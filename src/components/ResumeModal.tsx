import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { profile } = portfolioData;

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

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-surface-variant/80 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[95vh] h-[90vh] bg-surface rounded-xl shadow-2xl p-space-md flex flex-col space-y-space-sm border border-outline-variant/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-space-xs border-b border-surface-variant">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
            <span id="resume-modal-title" className="font-code-sm text-code-sm uppercase tracking-wider text-secondary font-semibold">
              Official Resume PDF • {profile.name}
            </span>
          </div>
          <button
            type="button"
            aria-label="Close resume modal"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-surface-container hover:bg-secondary hover:text-on-secondary transition-colors duration-200 flex items-center justify-center text-on-surface focus:outline-none cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* PDF Viewer Container */}
        <div className="w-full flex-grow bg-surface-container-low rounded-lg border border-outline-variant/30 overflow-hidden">
          <iframe
            src={`${profile.resume.downloadUrl}#view=FitH`}
            title="Sana Hasan - Official Resume PDF"
            className="w-full h-full rounded-lg border-0 bg-surface"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={profile.resume.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors duration-200 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              <span>Open in New Tab</span>
            </a>
            <a
              href={profile.resume.downloadUrl}
              download={profile.resume.fileName}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors duration-200 shadow-sm w-full sm:w-auto cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">file_download</span>
              <span>Download PDF ({profile.resume.fileSize})</span>
            </a>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-on-surface-variant hover:text-on-surface font-code-sm text-code-sm underline underline-offset-4 cursor-pointer"
          >
            Close Dialog
          </button>
        </div>
      </div>
    </div>
  );
};
