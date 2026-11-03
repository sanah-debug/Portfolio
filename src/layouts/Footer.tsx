import React from 'react';
import { NavLink } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sitemap = [
    { label: 'Index', path: '/' },
    { label: 'Biography & Ethics', path: '/about' },
    { label: 'Core Competencies', path: '/skills' },
    { label: 'Selected Works', path: '/projects' },
    { label: 'Chronology & Milestones', path: '/journey' },
    { label: 'Inquiries', path: '/contact' },
  ];

  return (
    <footer className="w-full bg-surface-container-low border-t border-surface-variant transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl sm:py-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-space-xl md:gap-gutter-desktop">
          {/* Identity Column */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-space-md">
            <div className="space-y-space-sm">
              <div className="flex items-center gap-space-xs">
                <span className="font-headline-md text-headline-md text-on-surface">
                  {portfolioData.profile.name}
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary align-baseline"></span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                Information Management undergraduate &amp; Junior Developer Intern at Octatribe. Building full-stack, mobile, and intelligent data-driven software.
              </p>
            </div>
            <div className="flex items-center gap-space-sm sm:gap-space-md text-on-surface-variant flex-wrap pt-2 md:pt-0">
              <a
                href={portfolioData.profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors duration-200 flex items-center gap-1 font-code-sm text-code-sm min-h-[44px]"
              >
                <span className="material-symbols-outlined text-[18px]">code</span>
                <span>GitHub</span>
              </a>
              <span className="text-outline-variant">/</span>
              <a
                href={`mailto:${portfolioData.profile.inbox}`}
                className="hover:text-secondary transition-colors duration-200 flex items-center gap-1 font-code-sm text-code-sm min-h-[44px]"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <span>Email</span>
              </a>
              <span className="text-outline-variant">/</span>
              <a
                href={portfolioData.profile.social.phone}
                className="hover:text-secondary transition-colors duration-200 flex items-center gap-1 font-code-sm text-code-sm min-h-[44px]"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>{portfolioData.profile.phone}</span>
              </a>
            </div>
          </div>

          {/* Sitemap Column */}
          <div className="md:col-span-3 space-y-space-sm">
            <span className="font-code-sm text-code-sm uppercase tracking-wider text-on-surface-variant block font-medium">
              Sitemap
            </span>
            <ul className="space-y-space-xs">
              {sitemap.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'font-body-sm text-body-sm text-secondary font-medium transition-colors duration-200 block py-1 min-h-[36px] flex items-center'
                        : 'font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors duration-200 block py-1 min-h-[36px] flex items-center'
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Colophon & Legal Column */}
          <div className="md:col-span-4 flex flex-col justify-between space-y-space-md">
            <div className="space-y-space-xs">
              <span className="font-code-sm text-code-sm uppercase tracking-wider text-on-surface-variant block font-medium">
                Colophon
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Typeset in Playfair Display, Inter, and JetBrains Mono. Built with semantic standards and archival restraint.
              </p>
            </div>
            <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 sm:gap-3 pt-space-md border-t border-surface-variant">
              <span className="font-code-sm text-code-sm text-on-surface-variant">
                © {new Date().getFullYear()} Sana Hasan
              </span>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1 font-code-sm text-code-sm text-on-surface-variant hover:text-secondary transition-colors duration-200 group focus:outline-none min-h-[40px] cursor-pointer"
              >
                <span>Back to top</span>
                <span className="material-symbols-outlined text-[16px] group-hover:-translate-y-0.5 transition-transform duration-200">
                  arrow_upward
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
