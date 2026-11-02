import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { SeoMeta } from '../components/SeoMeta';

export const JourneyPage: React.FC = () => {
  const { journey } = portfolioData;

  const scrollToPhase = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <SeoMeta
        title="Chronology &amp; Milestones"
        description="Structured evolution epochs of Sana Hasan from programming fundamentals in C and Java to full-stack modern web architecture."
      />

      <div className="flex flex-col w-full">
        {/* Hero Header Section */}
        <section className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-xl pb-space-2xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-end">
            <div className="lg:col-span-8 flex flex-col space-y-space-md">
              <div className="flex items-center gap-space-xs text-secondary">
                <span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-code-sm text-code-sm uppercase tracking-wider font-semibold">
                  Progression &amp; Milestones
                </span>
              </div>
              <h1 className="font-display text-display text-on-surface tracking-tight">
                My development journey<span className="text-secondary italic">.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                The incremental progression from BIM computational foundations to fullstack JavaScript, mobile engineering, and professional junior developer internship at Octatribe.
              </p>
            </div>

            {/* Quick Metrics Tag */}
            <div className="lg:col-span-4 flex flex-col justify-end">
              <div className="bg-surface-container-low p-space-lg rounded-xl shadow-sm border border-outline-variant/40 flex flex-col space-y-space-sm">
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span className="font-code-sm text-code-sm uppercase tracking-wider">Chronicle Record</span>
                  <span className="font-code-sm text-code-sm text-secondary">Oct 2026 / Active</span>
                </div>
                <div className="flex items-baseline gap-space-xs">
                  <span className="font-headline-lg text-headline-lg text-on-surface font-semibold">04</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Structured Evolution Epochs</span>
                </div>
                <div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
                  <div className="bg-secondary h-full rounded-full w-full transition-all duration-700"></div>
                </div>
                <div className="flex justify-between items-center pt-space-xs text-on-surface-variant">
                  <span className="font-code-sm text-code-sm">Baseline: BIM • TU</span>
                  <span className="font-code-sm text-code-sm font-medium text-on-surface">Target: ML/AI &amp; Full-Stack</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
            {/* Sticky Trajectory Index (4 cols) */}
            <aside className="hidden lg:block lg:col-span-4 space-y-space-xl">
              <div className="sticky top-28 space-y-space-lg p-space-lg bg-surface-container-low rounded-xl shadow-sm border border-outline-variant/40">
                <div className="flex items-center gap-space-xs pb-space-sm text-on-surface">
                  <span className="material-symbols-outlined text-[20px] text-secondary">history_edu</span>
                  <span className="font-headline-sm text-headline-sm">Trajectory Log</span>
                </div>
                <nav className="flex flex-col space-y-space-sm" aria-label="Timeline navigation">
                  <button
                    type="button"
                    onClick={() => scrollToPhase('phase-01')}
                    className="flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container transition-colors text-left cursor-pointer"
                  >
                    <span className="font-body-sm text-body-sm text-on-surface-variant">01. BIM Academic Core</span>
                    <span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Foundational</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToPhase('phase-02')}
                    className="flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container transition-colors text-left cursor-pointer"
                  >
                    <span className="font-body-sm text-body-sm text-on-surface-variant">02. JS Pre-Bootcamp</span>
                    <span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">72h BRIDGE</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToPhase('phase-03')}
                    className="flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container transition-colors text-left cursor-pointer"
                  >
                    <span className="font-body-sm text-body-sm text-on-surface-variant">03. Mobile &amp; Web Apps</span>
                    <span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Applied</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToPhase('phase-04')}
                    className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-high transition-colors text-left cursor-pointer"
                  >
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">04. Octatribe &amp; AI</span>
                    <span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-secondary text-on-secondary">Active</span>
                  </button>
                </nav>

                <div className="pt-space-md text-on-surface-variant space-y-space-xs border-t border-surface-variant">
                  <p className="font-code-sm text-code-sm italic">
                    "Building intelligent, data-driven software with Python, modern AI tools, and fullstack frameworks."
                  </p>
                  <span className="font-code-sm text-code-sm block text-secondary font-medium">
                    — Sana Hasan, 2026
                  </span>
                </div>
              </div>
            </aside>

            {/* Main Timeline Feed (8 cols) */}
            <div className="lg:col-span-8 flex flex-col space-y-space-2xl relative">
              <div aria-hidden="true" className="absolute left-6 md:left-8 top-6 bottom-6 w-0.5 bg-surface-variant hidden md:block"></div>

              {/* Phase 01 */}
              <article className="relative flex flex-col md:flex-row gap-space-lg items-start scroll-mt-28" id="phase-01">
                <div className="hidden md:flex flex-col items-center justify-center w-16 shrink-0 z-10">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface shadow-sm font-semibold border border-outline-variant/30">
                    <span className="font-code-sm text-code-sm">01</span>
                  </div>
                  <span className="font-code-sm text-code-sm text-on-surface-variant mt-2 font-mono">INIT</span>
                </div>

                <div className="w-full bg-surface-container-lowest p-space-xl rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 space-y-space-md border border-outline-variant/40">
                  <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-xs">
                    <span className="font-code-sm text-code-sm px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-medium">
                      Phase 01 • BIM Academic Foundation
                    </span>
                    <span className="font-code-sm text-code-sm text-secondary font-medium">Birgunj Public College (TU)</span>
                  </div>

                  <div className="space-y-space-xs">
                    <h2 className="font-headline-md text-headline-md text-on-surface">
                      {journey[0].title}
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {journey[0].description}
                    </p>
                  </div>

                  {journey[0].codeSnippet && (
                    <div className="bg-surface-container p-space-md rounded-lg overflow-x-auto border border-outline-variant/30">
                      <div className="flex items-center justify-between pb-space-xs mb-space-xs border-b border-surface-variant/60">
                        <div className="flex items-center gap-space-xs">
                          <span className="w-2.5 h-2.5 rounded-full bg-surface-dim"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-surface-dim"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-surface-dim"></span>
                          <span className="font-code-sm text-code-sm text-on-surface-variant ml-2 font-mono">
                            {journey[0].codeSnippet.filename}
                          </span>
                        </div>
                        <span className="font-code-sm text-code-sm text-on-surface-variant">
                          {journey[0].codeSnippet.archivedDate}
                        </span>
                      </div>
                      <pre className="font-code-sm text-code-sm text-on-surface leading-tight font-mono">
                        <code>{journey[0].codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}

                  <div className="pt-space-xs flex flex-wrap items-center gap-space-xs">
                    {journey[0].tags.map((tag) => (
                      <span key={tag} className="font-code-sm text-code-sm px-2 py-1 rounded bg-surface-container-high text-on-surface">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>

              {/* Phase 02 */}
              <article className="relative flex flex-col md:flex-row gap-space-lg items-start scroll-mt-28" id="phase-02">
                <div className="hidden md:flex flex-col items-center justify-center w-16 shrink-0 z-10">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface shadow-sm font-semibold border border-outline-variant/30">
                    <span className="font-code-sm text-code-sm">02</span>
                  </div>
                  <span className="font-code-sm text-code-sm text-on-surface-variant mt-2 font-mono">DOM</span>
                </div>

                <div className="w-full bg-surface-container-lowest p-space-xl rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 space-y-space-md border border-outline-variant/40">
                  <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-xs">
                    <span className="font-code-sm text-code-sm px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-medium">
                      Phase 02 • Fullstack Pre-Bootcamp
                    </span>
                    <span className="font-code-sm text-code-sm text-secondary font-medium">Karkhana Samuha &amp; TEJ Center</span>
                  </div>

                  <div className="space-y-space-xs">
                    <h2 className="font-headline-md text-headline-md text-on-surface">
                      {journey[1].title}
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {journey[1].description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                    {journey[1].cards?.map((card, i) => (
                      <div key={i} className="bg-surface-container p-space-md rounded-lg flex flex-col justify-between border border-outline-variant/30">
                        <div>
                          <span className="font-code-sm text-code-sm text-secondary font-semibold uppercase block">
                            {card.title}
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface mt-1 block font-medium">
                            {card.subtitle}
                          </span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                            {card.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-space-xs pt-space-sm text-on-surface-variant font-code-sm text-code-sm">
                          <span className="material-symbols-outlined text-[16px] text-secondary">{card.icon}</span>
                          <span>{card.meta}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-space-xs flex flex-wrap items-center gap-space-xs">
                    {journey[1].tags.map((tag) => (
                      <span key={tag} className="font-code-sm text-code-sm px-2 py-1 rounded bg-surface-container-high text-on-surface">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>

              {/* Phase 03 */}
              <article className="relative flex flex-col md:flex-row gap-space-lg items-start scroll-mt-28" id="phase-03">
                <div className="hidden md:flex flex-col items-center justify-center w-16 shrink-0 z-10">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface shadow-sm font-semibold border border-outline-variant/30">
                    <span className="font-code-sm text-code-sm">03</span>
                  </div>
                  <span className="font-code-sm text-code-sm text-on-surface-variant mt-2 font-mono">APPS</span>
                </div>

                <div className="w-full bg-surface-container-lowest p-space-xl rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 space-y-space-md border border-outline-variant/40">
                  <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-xs">
                    <span className="font-code-sm text-code-sm px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-medium">
                      Phase 03 • Applied Mobile &amp; E-Commerce
                    </span>
                    <span className="font-code-sm text-code-sm text-secondary font-medium">BookAHand &amp; Redify</span>
                  </div>

                  <div className="space-y-space-xs">
                    <h2 className="font-headline-md text-headline-md text-on-surface">
                      {journey[2].title}
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {journey[2].description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                    {journey[2].cards?.map((card, i) => (
                      <div key={i} className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between border border-outline-variant/30">
                        <div className="space-y-space-xs">
                          <div className="flex items-center justify-between">
                            <span className="font-code-sm text-code-sm text-secondary font-medium">{card.title}</span>
                            <span className="material-symbols-outlined text-[18px] text-on-surface-variant">{card.icon}</span>
                          </div>
                          <span className="font-headline-sm text-headline-sm text-on-surface block">{card.subtitle}</span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">{card.description}</p>
                        </div>
                        <div className="pt-space-md flex items-center gap-space-xs font-code-sm text-code-sm text-on-surface">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                          <span>{card.meta}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-space-xs flex flex-wrap items-center gap-space-xs">
                    {journey[2].tags.map((tag) => (
                      <span key={tag} className="font-code-sm text-code-sm px-2 py-1 rounded bg-surface-container-high text-on-surface">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>

              {/* Phase 04 */}
              <article className="relative flex flex-col md:flex-row gap-space-lg items-start scroll-mt-28" id="phase-04">
                <div className="hidden md:flex flex-col items-center justify-center w-16 shrink-0 z-10">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-on-secondary shadow-md animate-pulse">
                    <span className="material-symbols-outlined text-[20px]">explore</span>
                  </div>
                  <span className="font-code-sm text-code-sm text-secondary font-semibold mt-2 font-mono">NEXT</span>
                </div>

                <div className="w-full bg-surface-container p-space-xl rounded-xl shadow-md space-y-space-md border border-secondary/30">
                  <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-xs">
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
                      <span className="font-code-sm text-code-sm px-2.5 py-1 rounded bg-surface text-secondary font-semibold uppercase">
                        Phase 04 // Internship &amp; AI
                      </span>
                    </div>
                    <span className="font-code-sm text-code-sm px-2.5 py-1 rounded bg-secondary text-on-secondary font-medium">
                      Octatribe (WACRM)
                    </span>
                  </div>

                  <div className="space-y-space-xs">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">
                      {journey[3].title}
                    </h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                      {journey[3].description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
                    {journey[3].cards?.map((card, i) => (
                      <div key={i} className="bg-surface p-space-md rounded-lg shadow-sm border border-outline-variant/30">
                        <span className="font-code-sm text-code-sm text-secondary font-medium">{card.meta}</span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">{card.subtitle}</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{card.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-space-xs flex flex-wrap items-center gap-space-xs">
                    {journey[3].tags.map((tag) => (
                      <span key={tag} className="font-code-sm text-code-sm px-2.5 py-1 rounded bg-surface font-medium text-on-surface border border-outline-variant/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Bottom Dialogue Box */}
        <section className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-2xl w-full">
          <div className="rounded-2xl bg-surface-container-low p-space-xl md:p-space-2xl flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-sm border border-outline-variant/40">
            <div className="space-y-space-xs max-w-xl">
              <span className="font-code-sm text-code-sm uppercase tracking-wider text-secondary font-semibold">
                Trajectory Summary
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">
                Ready to review my selected implementations?
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                From foundational data structures in C and Java to full-stack reactive applications, see the source code and design decisions behind my work.
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-space-sm px-space-xl py-space-md rounded-lg bg-primary text-on-primary hover:bg-secondary transition-colors duration-200 shadow-sm font-label-md text-label-md group"
              >
                <span>View Projects</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform duration-200">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
