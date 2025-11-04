import mermaid from 'mermaid';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-jsx.js';
import 'prismjs/components/prism-tsx.js';
import 'prismjs/components/prism-css.js';
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-json.js';
import 'prismjs/components/prism-markdown.js';

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Handle Mermaid diagrams
  const mermaidBlocks = document.querySelectorAll('pre code.language-mermaid');
  mermaidBlocks.forEach(block => {
    const pre = block.parentElement;
    const mermaidDiv = document.createElement('div');
    mermaidDiv.className = 'mermaid prose mb-4 text-center';
    mermaidDiv.textContent = block.textContent;
    pre.parentElement.replaceChild(mermaidDiv, pre);
  });

  // Initialize Mermaid
  mermaid.initialize({
    startOnLoad: true,
    theme: 'default',
    securityLevel: 'loose',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  });
  
  // Re-render mermaid diagrams
  mermaid.run();
  
  // Apply Prism syntax highlighting
  Prism.highlightAll();
});