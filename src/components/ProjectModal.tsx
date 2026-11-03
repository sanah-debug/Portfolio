import React, { useEffect } from 'react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-8 bg-surface-variant/80 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto bg-surface rounded-xl shadow-2xl p-4 sm:p-space-md md:p-space-2xl flex flex-col space-y-space-md sm:space-y-space-lg border border-outline-variant/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1 min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-code-sm text-code-sm uppercase tracking-wider text-secondary font-semibold">
                {project.eyebrow}
              </span>
              <span className="text-outline-variant">•</span>
              <span className="font-code-sm text-code-sm text-on-surface-variant">
                {project.status}
              </span>
            </div>
            <h3 id="modal-title" className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface leading-tight">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            aria-label="Close modal dialog"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-surface-container hover:bg-secondary hover:text-on-secondary transition-colors duration-200 flex items-center justify-center text-on-surface focus:outline-none shrink-0 min-h-[40px] min-w-[40px] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.technologies.map((t, idx) => (
            <span
              key={idx}
              className="font-code-sm text-code-sm px-2.5 py-1 rounded bg-surface-container-high text-on-surface font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Narrative Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 pt-2">
          {/* Challenge */}
          <div className="bg-surface-container-low p-3.5 sm:p-4 rounded-lg space-y-2 border border-outline-variant/30">
            <div className="flex items-center gap-1.5 text-secondary">
              <span className="material-symbols-outlined text-[18px]">psychology_alt</span>
              <h4 className="font-label-md text-label-md font-semibold uppercase">The Challenge</h4>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Architecture */}
          <div className="bg-surface-container-low p-3.5 sm:p-4 rounded-lg space-y-2 border border-outline-variant/30">
            <div className="flex items-center gap-1.5 text-secondary">
              <span className="material-symbols-outlined text-[18px]">architecture</span>
              <h4 className="font-label-md text-label-md font-semibold uppercase">Architecture</h4>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Lessons */}
          <div className="bg-surface-container-low p-3.5 sm:p-4 rounded-lg space-y-2 border border-outline-variant/30">
            <div className="flex items-center gap-1.5 text-secondary">
              <span className="material-symbols-outlined text-[18px]">lightbulb</span>
              <h4 className="font-label-md text-label-md font-semibold uppercase">Lessons</h4>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {project.lessons}
            </p>
          </div>
        </div>

        {/* Extended Specs */}
        <div className="bg-surface-container rounded-lg p-3.5 sm:p-space-md space-y-2 sm:space-y-3 border border-outline-variant/30">
          <div className="flex items-center justify-between flex-wrap gap-1">
            <span className="font-code-sm text-code-sm uppercase font-semibold text-on-surface flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary text-[16px]">data_object</span>
              Implementation Specification Details
            </span>
            <span className="font-code-sm text-xs sm:text-code-sm text-on-surface-variant">Architecture Note</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            {project.extendedDetails}
          </p>
        </div>

        {/* Action & Links Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-surface-variant">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors duration-200 min-h-[44px]"
              >
                <span className="material-symbols-outlined text-[18px]">code</span>
                <span>GitHub Profile</span>
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors duration-200 min-h-[44px]"
              >
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                <span>Live Demonstration</span>
              </a>
            )}
          </div>
          <span className="font-code-sm text-xs sm:text-code-sm text-on-surface-variant text-center sm:text-right">
            Verified Architectural Specification
          </span>
        </div>
      </div>
    </div>
  );
};
