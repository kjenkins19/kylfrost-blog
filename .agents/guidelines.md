# Kyle Jenkins Blog - Development Guidelines

This document outlines the development standards, best practices, and guidelines for the Kyle Jenkins blog project.

## 🏗️ Project Architecture

This is a static blog site built with:
- **React** for components and UI
- **TailwindCSS** for styling
- **MDX** for blog content
- **esbuild** for bundling and building
- **ReactDOMServer** for static HTML generation

### Folder Structure

```
/
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/         # Page components (home, blogs, speaking, about)
│   ├── blogs/         # MDX blog post files
│   └── styles.css     # Main CSS file with Tailwind imports
├── public/            # Static assets (favicon, images)
├── dist/              # Generated static HTML output
├── build.js           # Node build script
├── tailwind.config.js # TailwindCSS configuration
└── package.json       # Dependencies and scripts
```

## 📝 Content Guidelines

### Blog Posts (MDX)

All blog posts must follow this structure:

```mdx
export const title = "Your Blog Post Title";
export const date = "YYYY-MM-DD";
export const description = "Brief description for previews and SEO";

# Your Blog Post Title

Content goes here...
```

**Requirements:**
- Use proper heading hierarchy (H2 for sections, H3 for subsections)
- Do not include an H1 as that gets injected by the exported title
- Include code examples with proper syntax highlighting
- Export metadata at the top of each file
- Use semantic HTML elements where appropriate

### Writing Style

#### **Voice & Personality**

Write in a **clear, confident, and thoughtful** tone that balances curiosity with credibility. The voice should sound like someone who has real-world experience and perspective, but who stays open to new insight.

It’s less about personal reflection (“I think…”) and more about shared exploration (“It’s worth asking…”, “We often overlook…”). The goal is to **invite reflection, not center it on the writer**.

#### **Guiding Principles**

* **Curious *and* conclusive:** Explore ideas with openness, but don’t hesitate to state strong takeaways when they’re warranted. Insight should feel earned, not tentative.
  *Example:* “Curiosity is essential in leadership — but curiosity without direction quickly becomes drift.”
* **Confident, not absolute:** Present ideas with authority and nuance. Replace hedging (“maybe,” “perhaps,” “I think”) with language that signals thoughtful conviction (“often,” “typically,” “can,” “tends to”).
* **Inclusive framing:** Use collective or neutral phrasing like *“we,” “teams,” “leaders,”* or *“many of us”* instead of repeatedly using *“I.”* This shifts focus from self to shared human experience.
* **Grounded insight:** Anchor abstract concepts in tangible examples or observable patterns.
* **Conversational clarity:** Write with ease, but keep sentences purposeful. Sound natural, but not casual to the point of losing authority.

#### **Sentence & Structure Style**

* **Vary rhythm** between crisp, declarative sentences and more reflective ones.
* **Use transitions** that create flow and confidence: *“That’s why,” “This matters because,” “The real shift happens when…”*
* **Balance questioning and asserting:** A good rhythm might look like: observation → question → insight → application.
  *Example:* “It’s easy to assume trust is built through big gestures. But what if it’s actually formed in quiet consistency? That shift changes how we show up for others.”

#### **Emotional & Cognitive Tone**

* **Grounded confidence:** You’ve thought this through. It’s not bravado, but earned clarity.
* **Inviting, not introspective:** The piece should feel like an open conversation, not a personal monologue.
* **Pragmatic optimism:** Even when exploring challenges, maintain a sense of possibility and growth.
* **Credible and Trustworthy:** Speaking in a manner that builds trust is key to providing quality content.

#### **Language Tips**

* Avoid: *“I think,” “I’ve been wondering,” “It seems to me.”*
* Prefer: *“It’s clear that,” “What often happens is,” “One pattern that stands out,” “The key insight here is.”*
* Sprinkle occasional rhetorical questions — not as self-doubt, but as prompts for reflection:
  *“What does that look like in practice?”* or *“How often do we actually pause long enough to notice?”*

#### **Example Voice Line**

> “Trust isn’t built in grand gestures — it’s built in quiet consistency. The moments when we follow through, even when no one’s watching, do more to shape credibility than any speech or promise could.”

#### **Additional Rules**

* No em dashes
* Use Complete sentences
* Goal Length is between 500 and 1000 words

### Page Components

All page components should:
- Accept a `blogs` prop containing blog metadata
- Use the shared `Layout` component
- Include proper SEO meta tags via Layout props
- Follow responsive design principles
- Use TailwindCSS classes for styling

## 🎨 Design Standards

### Color Palette

- Primary: `#005596`
- Primary Dark: `#12456B`
- Primary Darker: `#162F42`
- Primary Light: `#B0C8FF`
- Primary Lighter: `#ABDBFF`
- Primary Lightest: `#D4EDFF`

### Typography

- Use system fonts for better performance
- Maintain consistent heading hierarchy
- Ensure proper contrast ratios for accessibility
- Use relative units (rem, em) for scalability

### Responsive Design

- Mobile-first approach
- Fixed header on all screen sizes
- Flexible layouts using CSS Grid and Flexbox

## 🧩 Component Guidelines

### Header Component

- Fixed positioning at top
- Smooth animations for menu transitions
- Proper ARIA labels for accessibility

### Layout Component

- Wraps all pages with consistent structure
- Includes HTML document structure
- Manages SEO meta tags
- Contains header and footer

### BlogList Component

- Displays blog previews with metadata
- Supports limiting number of posts
- Responsive card layout
- Formatted dates and descriptions

## 🚀 Build Process

### Development

```bash
npm run dev
```

- Starts development server on port 3000
- Watches for file changes and rebuilds
- Hot reloading for faster development

### Production Build

```bash
npm run build
```

- Processes MDX files and extracts metadata
- Compiles TailwindCSS with PostCSS
- Generates static HTML for all pages and blogs
- Optimizes assets for production

### Deployment

```bash
npm run deploy
```

- Builds the project
- Deploys to GitHub Pages using gh-pages

## 📚 Code Standards

### JavaScript/JSX

- Use ES6+ features and modern JavaScript patterns
- Prefer functional components over class components
- Use destructuring for props and imports
- Write descriptive variable and function names
- Add comments for complex logic

### CSS/Styling

- Use TailwindCSS utility classes primarily
- Create custom components in CSS for reusable patterns
- Follow BEM naming convention for custom CSS classes
- Ensure styles work across different screen sizes
- Use semantic class names

### File Naming

- Use kebab-case for file names
- Use PascalCase for React components
- Use camelCase for variables and functions
- Be descriptive and consistent

## ♿ Accessibility

### Requirements

- Use semantic HTML elements
- Include ARIA labels where needed
- Ensure keyboard navigation works
- Maintain proper heading hierarchy
- Test with screen readers

### Navigation

- Skip links for keyboard users
- Focus indicators on interactive elements
- Logical tab order
- Descriptive link text

## 🧪 Testing

### Manual Testing

- Test on multiple screen sizes
- Verify navigation works on all devices
- Check form functionality
- Test build process regularly

### Performance

- Optimize images and assets
- Minimize bundle sizes
- Use lazy loading where appropriate
- Test Core Web Vitals metrics

## 🔧 Development Workflow

### Adding New Blog Posts

1. Create new `.mdx` file in `src/blogs/`
2. Add required metadata exports
3. Write content following guidelines
4. Test locally with `npm run dev`
5. Build and deploy

### Adding New Pages

1. Create component in `src/pages/`
2. Export default React component
3. Update build.js if needed
4. Test routing and functionality

### Modifying Components

1. Make changes to component files
2. Test in development mode
3. Verify responsive behavior
4. Check accessibility compliance

## 📦 Dependencies

### Production

- `react`: UI library
- `react-dom`: DOM rendering

### Development

- `@mdx-js/mdx`: MDX compilation
- `@mdx-js/react`: MDX React integration
- `esbuild`: Fast bundling
- `tailwindcss`: CSS framework
- `postcss`: CSS processing
- `autoprefixer`: CSS vendor prefixes
- `chokidar`: File watching
- `gh-pages`: GitHub Pages deployment

## 🚨 Common Issues

### Build Errors

- Ensure all MDX files have required metadata
- Check for syntax errors in React components
- Verify all imports are correct

### Styling Issues

- Run TailwindCSS purge to remove unused styles
- Check for conflicting CSS rules
- Ensure responsive breakpoints are used correctly

### Deployment Issues

- Verify build completes successfully
- Check GitHub Pages settings
- Ensure all assets are properly linked

## 📈 Future Enhancements

### Potential Improvements

- Add search functionality
- Implement tags/categories for blogs
- Add RSS feed generation
- Include social media sharing
- Add comment system integration
- Implement analytics tracking

### Performance Optimizations

- Image optimization and lazy loading
- Code splitting for larger applications
- Service worker for offline functionality
- CDN integration for static assets

## 🤝 Contributing

When contributing to this project:

1. Follow the established code style
2. Test changes thoroughly
3. Update documentation as needed
4. Ensure accessibility standards are met
5. Verify responsive design works
6. Check build process completes successfully

---

*This guidelines document should be updated as the project evolves and new requirements emerge.*