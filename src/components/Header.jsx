import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/blogs/', label: 'Blogs' },
    { href: '/speaking/', label: 'Speaking' },
    { href: '/about/', label: 'About Me' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <a href="/" className="text-xl font-bold text-primary hover:text-primary-dark">
                Kyle Jenkins
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

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                  <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
                  <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
                  <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-semibold text-primary">Navigation</h2>
            <button
              onClick={closeMenu}
              className="p-1 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
              aria-label="Close navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav role="navigation" aria-label="Mobile navigation">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;