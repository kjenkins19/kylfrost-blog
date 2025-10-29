import React from 'react';

const Header = () => {
  const navLinks = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/blogs/', label: 'Blogs', icon: '📝' },
    { href: '/speaking/', label: 'Speaking', icon: '🎤' },
    { href: '/about/', label: 'About Me', icon: '👤' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand - Desktop shows full name, Mobile shows "KJ" */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-primary hover:text-primary-dark">
              <span className="hidden md:inline">Kyle Jenkins</span>
              <span className="md:hidden">KJ</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" role="navigation" aria-label="Main navigation">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Navigation - Icon-based */}
          <nav className="md:hidden flex items-center space-x-4" role="navigation" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex flex-col items-center p-2 text-gray-700 hover:text-primary transition-colors duration-200"
                title={link.label}
                aria-label={link.label}
              >
                <span className="text-lg mb-1">{link.icon}</span>
                <span className="text-xs">{link.label === 'About Me' ? 'About' : link.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;