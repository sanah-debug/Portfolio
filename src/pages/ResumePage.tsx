import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { SeoMeta } from '../components/SeoMeta';

export const ResumePage: React.FC = () => {
  const { profile } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <SeoMeta
        title="Curriculum Vitae — Sana Hasan"
        description="Official Curriculum Vitae of Sana Hasan, Aspiring Full-Stack Developer and Junior Developer Intern at Octatribe."
      />

      <div className="w-full max-w-6xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-lg lg:py-space-xl">
        {/* Top Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-space-md mb-space-lg border-b border-surface-variant">
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="inline-flex items-center gap-1 font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span>Back to Index</span>
            </Link>
            <span className="text-outline-variant">/</span>
            <span className="font-code-sm text-code-sm text-secondary uppercase font-semibold">
              Curriculum Vitae
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={profile.resume.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors duration-200 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              <span>Open in New Tab</span>
            </a>
            <a
              href={profile.resume.downloadUrl}
              download={profile.resume.fileName}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors duration-200 shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">file_download</span>
              <span>Download PDF ({profile.resume.fileSize})</span>
            </a>
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors duration-200 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">print</span>
              <span>Print</span>
            </button>
            <a
              href={`mailto:${profile.inbox}?subject=Inquiry%20from%20Portfolio%20-%20Sana%20Hasan`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors duration-200"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="w-full bg-surface-container-low rounded-xl border border-outline-variant/40 shadow-sm p-2 sm:p-4">
          <iframe
            src={`${profile.resume.downloadUrl}#view=FitH`}
            title="Sana Hasan - Official Resume PDF"
            className="w-full h-[85vh] min-h-[700px] rounded-lg border border-outline-variant/20 bg-surface"
          />
        </div>
      </div>
    </>
  );
};
