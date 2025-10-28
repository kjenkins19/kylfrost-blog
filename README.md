# Kyle Jenkins Blog

A responsive static blog website built with React, TailwindCSS, MDX, and esbuild. This project generates a fully static site that can be hosted on GitHub Pages or any static hosting service.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kylfrost-blog
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
kylfrost-blog/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Header.jsx      # Navigation header with mobile menu
│   │   ├── Layout.jsx      # Page layout wrapper
│   │   └── BlogList.jsx    # Blog post list component
│   ├── pages/              # Page components
│   │   ├── home.jsx        # Homepage (shows recent posts)
│   │   ├── blogs.jsx       # All blogs page
│   │   ├── speaking.jsx    # Speaking engagements page
│   │   └── about.jsx       # About me page
│   ├── blogs/              # MDX blog posts
│   │   ├── blog1.mdx       # React Hooks guide
│   │   ├── blog2.mdx       # Scalable web applications
│   │   ├── blog3.mdx       # Future of web development
│   │   ├── blog4.mdx       # CSS Grid vs Flexbox
│   │   └── blog5.mdx       # JavaScript async/await
│   └── styles.css          # TailwindCSS imports and custom styles
├── public/                 # Static assets (favicon, images)
├── dist/                   # Generated static site (after build)
├── build.js                # Custom build script
├── tailwind.config.js      # TailwindCSS configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## 🛠️ Available Scripts

### `npm run dev`
Starts the development server with hot reloading on port 3000. Watches for file changes and automatically rebuilds the site.

### `npm run build`
Builds the static site for production. Outputs all files to the `dist/` directory.

### `npm run deploy`
Builds the site and deploys it to GitHub Pages using the `gh-pages` branch.

### `npm run lint`
Runs ESLint on all JavaScript and JSX files.

### `npm run lint:css`
Runs Stylelint on CSS files.

## 📝 Adding New Blog Posts

1. Create a new `.mdx` file in `src/blogs/` directory
2. Follow the required metadata structure:

```mdx
export const title = "Your Blog Post Title";
export const date = "YYYY-MM-DD";
export const description = "Brief description for previews and SEO";

# Your Blog Post Title

Your content goes here...
```

3. Write your content using Markdown syntax with JSX components
4. Run `npm run dev` to see your changes
5. Build and deploy when ready

### Blog Post Guidelines

- **Title**: Use a descriptive, SEO-friendly title
- **Date**: Use YYYY-MM-DD format for proper sorting
- **Description**: Write a concise summary for previews and meta tags
- **Content**: Use proper heading hierarchy (H1 for title, H2 for sections)
- **Code Examples**: Use proper syntax highlighting with code blocks
- **Images**: Place in `public/` directory and reference with absolute paths

## 🎨 Design System

### Color Palette

- **Primary**: `#005596` - Main brand color
- **Primary Dark**: `#12456B` - Hover states
- **Primary Darker**: `#162F42` - Active states
- **Primary Light**: `#B0C8FF` - Light accents
- **Primary Lighter**: `#ABDBFF` - Background tints
- **Primary Lightest**: `#D4EDFF` - Very light backgrounds

### Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Typography

The site uses system fonts for optimal performance:
- **Primary**: system-ui, -apple-system, BlinkMacSystemFont
- **Fallbacks**: Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif

## 🏗️ Build Process

The build system handles:

1. **MDX Compilation**: Converts `.mdx` files to React components
2. **Metadata Extraction**: Extracts title, date, and description from blog posts
3. **CSS Processing**: Compiles TailwindCSS with PostCSS and Autoprefixer
4. **Static Generation**: Renders all pages to static HTML using ReactDOMServer
5. **Asset Optimization**: Copies and optimizes static assets

### Build Output

```
dist/
├── index.html              # Homepage
├── styles.css              # Compiled CSS
├── blogs/                  # Blog posts
│   ├── blog1/
│   │   └── index.html
│   ├── blog2/
│   │   └── index.html
│   └── ...
├── blogs/
│   └── index.html          # All blogs page
├── speaking/
│   └── index.html          # Speaking page
├── about/
│   └── index.html          # About page
└── [static assets]         # Copied from public/
```

## 🚢 Deployment

### GitHub Pages

1. Enable GitHub Pages in repository settings
2. Set source to "Deploy from a branch" and select `gh-pages`
3. Run `npm run deploy` to build and deploy

### Manual Deployment

1. Run `npm run build`
2. Upload the contents of `dist/` directory to your web server
3. Configure your server to serve `index.html` for directory requests

### Netlify/Vercel

1. Connect your repository to the platform
2. Set build command to `npm run build`
3. Set publish directory to `dist`
4. Deploy

## 🧪 Development

### Local Development

The development server includes:
- **Hot Reloading**: Automatic rebuilds on file changes
- **File Watching**: Monitors `src/` directory for changes
- **Static Serving**: Serves built files with proper MIME types
- **Error Handling**: Clear error messages in console

### Adding New Pages

1. Create a new component in `src/pages/`
2. Export a React component that accepts a `blogs` prop
3. Add the page to the `pages` array in `build.js`
4. Test locally and build

### Modifying Components

- All components use TailwindCSS for styling
- Follow the existing patterns for consistency
- Ensure responsive design across all breakpoints
- Test accessibility with keyboard navigation

## 📋 Dependencies

### Production Dependencies

- **react**: UI library for component-based architecture
- **react-dom**: DOM rendering and server-side rendering

### Development Dependencies

- **@mdx-js/mdx**: MDX compilation and processing
- **@mdx-js/react**: MDX React integration
- **esbuild**: Fast JavaScript bundler and minifier
- **tailwindcss**: Utility-first CSS framework
- **postcss**: CSS transformation toolkit
- **autoprefixer**: CSS vendor prefixing
- **chokidar**: File watching for development
- **gh-pages**: GitHub Pages deployment

## 🔧 Configuration

### TailwindCSS

Configuration in `tailwind.config.js`:
- Custom color palette
- Content scanning for MDX and JSX files
- System font stack
- Responsive breakpoints

### Build Configuration

The `build.js` script can be customized:
- Change port number (default: 3000)
- Modify file watching patterns
- Add additional build steps
- Configure deployment targets

## 🐛 Troubleshooting

### Common Issues

**Build fails with MDX errors:**
- Ensure all blog posts have required metadata exports
- Check for syntax errors in MDX files
- Verify proper heading hierarchy

**Styles not loading:**
- Run `npm run build` to regenerate CSS
- Check TailwindCSS configuration
- Verify CSS file paths

**Development server not starting:**
- Check if port 3000 is available
- Ensure all dependencies are installed
- Check for Node.js version compatibility

### Getting Help

1. Check the [.junie/guidelines.md](.junie/guidelines.md) for detailed development guidelines
2. Review the build logs for specific error messages
3. Ensure all dependencies are up to date

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes following the guidelines
4. Test thoroughly on different screen sizes
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🔗 Links

- **Live Site**: [Your deployed URL]
- **Repository**: [Your GitHub repository URL]
- **Speaking**: [https://sessionize.com/kyle-jenkins](https://sessionize.com/kyle-jenkins)
- **Presentations**: [https://github.com/kjenkins19/presentations](https://github.com/kjenkins19/presentations)

---

Built with ❤️ using React, TailwindCSS, and MDX