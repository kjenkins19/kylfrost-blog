import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import esbuild from 'esbuild';
import { compile } from '@mdx-js/mdx';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import chokidar from 'chokidar';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

// Configuration
const CONFIG = {
  srcDir: path.join(__dirname, 'src'),
  distDir: path.join(__dirname, 'dist'),
  publicDir: path.join(__dirname, 'public'),
  blogsDir: path.join(__dirname, 'src', 'blogs'),
  pagesDir: path.join(__dirname, 'src', 'pages'),
  componentsDir: path.join(__dirname, 'src', 'components'),
  stylesFile: path.join(__dirname, 'src', 'styles.css'),
  isDev: process.argv.includes('--dev')
};

// Utility functions
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const copyDir = (src, dest) => {
  ensureDir(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// CSS Processing
const processCss = async () => {
  console.log('📦 Processing CSS...');
  
  const css = fs.readFileSync(CONFIG.stylesFile, 'utf8');
  
  const result = await postcss([
    tailwindcss(),
    autoprefixer()
  ]).process(css, { from: CONFIG.stylesFile });
  
  const outputPath = path.join(CONFIG.distDir, 'styles.css');
  fs.writeFileSync(outputPath, result.css);
  
  console.log('✅ CSS processed');
};

// MDX Blog Processing
const processMdxBlogs = async () => {
  console.log('📝 Processing MDX blogs...');
  
  const blogFiles = fs.readdirSync(CONFIG.blogsDir).filter(file => file.endsWith('.mdx'));
  const blogs = [];
  
  for (const file of blogFiles) {
    const filePath = path.join(CONFIG.blogsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract metadata
    const metadataRegex = /export const (\w+) = ["'`]([^"'`]+)["'`];/g;
    const metadata = {};
    let match;
    
    while ((match = metadataRegex.exec(content)) !== null) {
      metadata[match[1]] = match[2];
    }
    
    // Compile MDX to program format
    const compiled = await compile(content, {
      outputFormat: 'program',
      development: CONFIG.isDev,
      jsxImportSource: 'react'
    });
    
    const slug = path.basename(file, '.mdx');
    const blogData = {
      slug,
      ...metadata,
      compiled: compiled.toString(),
      filename: file
    };
    
    blogs.push(blogData);
    
    // Create individual blog page
    await createBlogPage(blogData);
  }
  
  console.log(`✅ Processed ${blogs.length} blog posts`);
  return blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
};

// Create individual blog page
const createBlogPage = async (blog) => {
  const blogDir = path.join(CONFIG.distDir, 'blogs', blog.slug);
  ensureDir(blogDir);
  
  // Create temporary MDX component file
  const tempMdxPath = path.join(CONFIG.distDir, `temp-mdx-${blog.slug}.js`);
  fs.writeFileSync(tempMdxPath, blog.compiled);
  
  // Create a temporary component file for the blog
  const tempComponentPath = path.join(CONFIG.distDir, `temp-blog-${blog.slug}.js`);
  
  const componentCode = `
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../src/components/Layout.jsx';
import MDXContent from './temp-mdx-${blog.slug}.js';

const mdxComponents = {
  h1: (props) => React.createElement('h1', { className: 'prose text-3xl font-bold mb-6 text-black', ...props }),
  h2: (props) => React.createElement('h2', { className: 'prose text-2xl font-semibold mb-4 text-black', ...props }),
  h3: (props) => React.createElement('h3', { className: 'prose text-xl font-medium mb-3 text-black', ...props }),
  p: (props) => React.createElement('p', { className: 'prose mb-4 text-gray-800 leading-relaxed', ...props }),
  a: (props) => React.createElement('a', { className: 'prose text-primary hover:text-primary-dark underline', ...props }),
  ul: (props) => React.createElement('ul', { className: 'prose list-disc pl-6 mb-4', ...props }),
  ol: (props) => React.createElement('ol', { className: 'prose list-decimal pl-6 mb-4', ...props }),
  li: (props) => React.createElement('li', { className: 'prose mb-1', ...props }),
  blockquote: (props) => React.createElement('blockquote', { className: 'prose border-l-4 border-primary-light pl-4 italic text-gray-700 mb-4', ...props }),
  code: (props) => React.createElement('code', { className: 'prose bg-gray-100 px-1 py-0.5 rounded text-sm font-mono', ...props }),
  pre: (props) => React.createElement('pre', { className: 'prose bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4', ...props }),
};

const BlogPage = () => {
  return React.createElement(Layout, {
    title: "${blog.title} - Kyle Jenkins",
    description: "${blog.description}"
  }, React.createElement('article', { className: 'prose max-w-4xl mx-auto' },
    React.createElement('header', { className: 'mb-8 pb-8 border-b border-gray-200' },
      React.createElement('h1', { className: 'text-3xl md:text-4xl font-bold text-black mb-4' }, "${blog.title}"),
      React.createElement('div', { className: 'flex items-center text-gray-600' },
        React.createElement('time', { dateTime: "${blog.date}" }, new Date("${blog.date}").toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }))
      )
    ),
    React.createElement('div', { className: 'prose max-w-none' },
      React.createElement(MDXProvider, { components: mdxComponents },
        React.createElement(MDXContent, {})
      )
    ),
    React.createElement('footer', { className: 'mt-12 pt-8 border-t border-gray-200' },
      React.createElement('div', { className: 'text-center' },
        React.createElement('a', { 
          href: '/blogs/',
          className: 'inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors duration-200'
        }, 
          React.createElement('svg', {
            className: 'mr-1 w-4 h-4',
            fill: 'none',
            stroke: 'currentColor',
            viewBox: '0 0 24 24'
          }, React.createElement('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 2,
            d: 'M15 19l-7-7 7-7'
          })),
          'Back to All Posts'
        )
      )
    )
  ));
};

export default BlogPage;
`;
  
  fs.writeFileSync(tempComponentPath, componentCode);
  
  try {
    // Bundle the component
    const result = await esbuild.build({
      entryPoints: [tempComponentPath],
      bundle: true,
      format: 'cjs',
      platform: 'node',
      write: false,
      external: ['react', 'react-dom'],
      jsx: 'automatic'
    });
    
    // Execute the bundled code to get the component
    const bundledCode = result.outputFiles[0].text;
    const module = { exports: {} };
    const func = new Function('module', 'exports', 'require', bundledCode);
    func(module, module.exports, require);
    
    const BlogComponent = module.exports.default;
    const html = renderToStaticMarkup(React.createElement(BlogComponent));
    
    fs.writeFileSync(path.join(blogDir, 'index.html'), `<!DOCTYPE html>${html}`);
    
  } catch (error) {
    console.error(`❌ Error creating blog page for ${blog.slug}:`, error);
  } finally {
    // Clean up temp files
    if (fs.existsSync(tempComponentPath)) {
      fs.unlinkSync(tempComponentPath);
    }
    if (fs.existsSync(tempMdxPath)) {
      fs.unlinkSync(tempMdxPath);
    }
  }
};

// Create static pages
const createStaticPages = async (blogs) => {
  console.log('📄 Creating static pages...');
  
  const pages = [
    { name: 'home', path: '/' },
    { name: 'blogs', path: '/blogs/' },
    { name: 'speaking', path: '/speaking/' },
    { name: 'about', path: '/about/' }
  ];
  
  for (const page of pages) {
    await createStaticPage(page, blogs);
  }
  
  console.log('✅ Static pages created');
};

const createStaticPage = async (page, blogs) => {
  const tempComponentPath = path.join(CONFIG.distDir, `temp-page-${page.name}.js`);
  
  const componentCode = `
import React from 'react';
import ${page.name.charAt(0).toUpperCase() + page.name.slice(1)}Page from '../src/pages/${page.name}.jsx';

const Page = () => {
  return React.createElement(${page.name.charAt(0).toUpperCase() + page.name.slice(1)}Page, {
    blogs: ${JSON.stringify(blogs)}
  });
};

export default Page;
`;
  
  fs.writeFileSync(tempComponentPath, componentCode);
  
  try {
    const result = await esbuild.build({
      entryPoints: [tempComponentPath],
      bundle: true,
      format: 'cjs',
      platform: 'node',
      write: false,
      external: ['react', 'react-dom'],
      jsx: 'automatic'
    });
    
    const bundledCode = result.outputFiles[0].text;
    const module = { exports: {} };
    const func = new Function('module', 'exports', 'require', bundledCode);
    func(module, module.exports, require);
    
    const PageComponent = module.exports.default;
    const html = renderToStaticMarkup(React.createElement(PageComponent));
    
    // Create directory structure
    if (page.path === '/') {
      fs.writeFileSync(path.join(CONFIG.distDir, 'index.html'), `<!DOCTYPE html>${html}`);
    } else {
      const pageDir = path.join(CONFIG.distDir, page.path);
      ensureDir(pageDir);
      fs.writeFileSync(path.join(pageDir, 'index.html'), `<!DOCTYPE html>${html}`);
    }
    
  } catch (error) {
    console.error(`❌ Error creating page ${page.name}:`, error);
  } finally {
    if (fs.existsSync(tempComponentPath)) {
      fs.unlinkSync(tempComponentPath);
    }
  }
};

// Development server
const startDevServer = () => {
  console.log('🚀 Starting development server...');
  
  const watcher = chokidar.watch([CONFIG.srcDir], {
    ignored: /node_modules/,
    persistent: true
  });
  
  watcher.on('change', async (filePath) => {
    console.log(`📁 File changed: ${filePath}`);
    await build();
  });
  
  // Simple HTTP server
  const http = require('http');
  const url = require('url');
  
  const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    let pathname = parsedUrl.pathname;
    
    // Default to index.html for directories
    if (pathname.endsWith('/')) {
      pathname += 'index.html';
    }
    
    const filePath = path.join(CONFIG.distDir, pathname);
    
    if (fs.existsSync(filePath)) {
      const ext = path.extname(filePath);
      const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.ico': 'image/x-icon'
      }[ext] || 'text/plain';
      
      res.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404);
      res.end('Not Found');
    }
  });
  
  const PORT = 3000;
  server.listen(PORT, () => {
    console.log(`✅ Dev server running at http://localhost:${PORT}`);
  });
};

// Main build function
const build = async () => {
  console.log('🏗️  Starting build process...');
  
  // Clean dist directory
  if (fs.existsSync(CONFIG.distDir)) {
    fs.rmSync(CONFIG.distDir, { recursive: true });
  }
  ensureDir(CONFIG.distDir);
  
  // Copy public files
  if (fs.existsSync(CONFIG.publicDir)) {
    copyDir(CONFIG.publicDir, CONFIG.distDir);
    console.log('📁 Public files copied');
  }
  
  try {
    // Process CSS
    await processCss();
    
    // Process blogs
    const blogs = await processMdxBlogs();
    
    // Create static pages
    await createStaticPages(blogs);
    
    console.log('🎉 Build completed successfully!');
    
    if (CONFIG.isDev) {
      startDevServer();
    }
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
};

// Run build
build();