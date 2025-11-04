import mermaid from 'mermaid';

// Initialize Mermaid when the page loads
document.addEventListener('DOMContentLoaded', function() {
  mermaid.initialize({
    startOnLoad: true,
    theme: 'default',
    securityLevel: 'loose',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  });
  
  // Re-render mermaid diagrams if they exist
  mermaid.run();
});