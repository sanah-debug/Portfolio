import React from 'react';
import { Link } from 'react-router-dom';
import { SeoMeta } from '../components/SeoMeta';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SeoMeta
        title="404 — Page Not Found"
        description="The requested page could not be located in Sana Hasan's portfolio archive."
      />

      <div className="w-full max-w-4xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl sm:py-space-3xl flex flex-col items-center justify-center text-center space-y-space-md sm:space-y-space-lg min-h-[60vh]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/30">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span className="font-code-sm text-code-sm text-secondary tracking-wider font-semibold uppercase">
            Error 404 • Missing Artifact
          </span>
        </div>

        <h1 className="font-display text-display-mobile sm:text-display text-on-surface tracking-tight">
          Page Not Located<span className="text-secondary italic">.</span>
        </h1>

        <p className="font-body-lg text-body-md sm:text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
          The dossier, chapter, or route you are attempting to inspect does not exist in this archive or may have been relocated.
        </p>

        <div className="pt-space-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-space-sm sm:gap-space-md w-full sm:w-auto">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors duration-200 shadow-sm min-h-[44px]"
          >
            <span className="material-symbols-outlined mr-1.5 text-[18px]">arrow_back</span>
            <span>Return to Index</span>
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-surface-container border border-outline-variant/40 text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors min-h-[44px]"
          >
            <span>Explore Projects</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-surface-container border border-outline-variant/40 text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors min-h-[44px]"
          >
            <span>Direct Inquiry</span>
          </Link>
        </div>
      </div>
    </>
  );
};
