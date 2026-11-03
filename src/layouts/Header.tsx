import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';

interface HeaderProps {
  onOpenResume?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Journey', path: '/journey' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-surface-variant transition-colors duration-200">
      <div className="h-20 max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-space-sm sm:gap-space-md">
        {/* Brand / Logo */}
        <div className="flex items-center gap-space-sm min-w-0">
          <Link
            to="/"
            className="flex items-center gap-space-sm focus:outline-none group min-w-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Elegant Monogram Avatar */}
            <div className="h-9 w-9 shrink-0 rounded-lg bg-secondary text-white flex items-center justify-center font-display text-lg font-bold shadow-sm transition-transform duration-300 group-hover:scale-95">
              SH
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none group-hover:text-secondary transition-colors truncate">
                {portfolioData.profile.name}
              </span>
              <span className="font-code-sm text-code-sm text-on-surface-variant tracking-wider uppercase mt-0.5 truncate max-w-[130px] sm:max-w-none">
                {portfolioData.profile.role}
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-space-lg" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'transition-colors duration-200 text-on-surface font-medium border-b-2 border-secondary pb-1'
                  : 'font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors duration-200 pb-1'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2 sm:gap-space-md shrink-0">
          {/* Resume Link */}
          <a
            href={portfolioData.profile.resume.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-200 underline underline-offset-4 decoration-outline-variant hover:decoration-secondary cursor-pointer min-h-[44px]"
          >
            <span className="material-symbols-outlined text-[16px]">description</span>
            <span>Resume</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors flex items-center justify-center text-on-surface focus:outline-none min-h-[44px] min-w-[44px] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">
              {theme === 'light' ? 'dark_mode' : 'light_mode'}
            </span>
          </button>

          {/* Primary CTA */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center px-space-md py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary hover:text-on-secondary transition-colors duration-200 shadow-sm min-h-[44px]"
          >
            <span>Get in Touch</span>
          </Link>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface hover:text-secondary focus:outline-none transition-colors min-h-[44px] min-w-[44px] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop & Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 top-20 bg-black/40 backdrop-blur-xs z-40 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            className="lg:hidden relative z-50 bg-surface border-b border-surface-variant px-margin py-4 space-y-3 max-h-[calc(100vh-5rem)] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200 shadow-lg"
          >
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'p-3 rounded-lg bg-surface-container font-medium text-secondary flex items-center justify-between min-h-[44px]'
                      : 'p-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors flex items-center justify-between min-h-[44px]'
                  }
                >
                  <span className="font-label-md text-label-md">{link.label}</span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </NavLink>
              ))}
            </nav>
            <div className="pt-3 border-t border-surface-variant flex flex-col gap-2.5">
              <a
                href={portfolioData.profile.resume.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 p-3 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors min-h-[44px]"
              >
                <span className="material-symbols-outlined text-[18px]">description</span>
                <span>Curriculum Vitae / Resume</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 p-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors min-h-[44px]"
              >
                <span>Get in Touch</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
