import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const firstFocusableElementRef = useRef(null);
  const lastFocusableElementRef = useRef(null);

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

  // Handle ESC key and focus trapping
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isMenuOpen) return;

      if (event.key === 'Escape') {
        closeMenu();
        menuButtonRef.current?.focus();
        return;
      }

      // Focus trapping
      if (event.key === 'Tab') {
        const focusableElements = menuRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Focus first element when menu opens
      setTimeout(() => {
        const focusableElements = menuRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements && focusableElements.length > 0) {
          focusableElements[0].focus();
        }
      }, 100);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
                // ref={menuButtonRef}
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                  <div
                    className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                      isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                  ></div>
                  <div
                    className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0' : ''
                    }`}
                  ></div>
                  <div
                    className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                      isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-all duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'
        } md:hidden`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 id="mobile-menu-title" className="text-lg font-semibold text-primary">
              Navigation
            </h2>
            <button
              ref={lastFocusableElementRef}
              onClick={closeMenu}
              className="p-1 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Close navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav role="navigation" aria-label="Mobile navigation">
            <div className="space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  ref={index === 0 ? firstFocusableElementRef : null}
                  href={link.href}
                  className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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