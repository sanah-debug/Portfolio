import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { SeoMeta } from '../components/SeoMeta';

type FilterType = 'all' | 'code' | 'web' | 'creative';

export const SkillsPage: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  const { skills } = portfolioData;

  const codeSkills = skills.filter((s) => s.category === 'code');
  const webSkills = skills.filter((s) => s.category === 'web');
  const creativeSkills = skills.filter((s) => s.category === 'creative');
  const nextSkills = skills.filter((s) => s.category === 'next');

  return (
    <>
      <SeoMeta
        title="Technical Toolkit & Core Competencies"
        description="Comprehensive technical repertory of programming languages, web engineering principles, and creative tools used by Sana Hasan."
      />

      <div className="flex flex-col w-full">
        {/* Top Header */}
        <section className="relative w-full max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-xl pb-space-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
            <div className="lg:col-span-8 space-y-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-high text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span className="font-code-sm text-code-sm uppercase tracking-wider font-semibold">
                  Technical Toolkit &amp; Capabilities
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Tools, languages, and environments I work with.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                An honest inventory of programming languages, web technologies, and creative tools I actively use and explore. No arbitrary percentages or inflated metrics.
              </p>
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs text-on-surface-variant font-code-sm text-code-sm">
                <span className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
                  <span>Pragmatic focus</span>
                </span>
                <span className="text-outline-variant">/</span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-secondary">terminal</span>
                  <span>Systems + Interface balance</span>
                </span>
                <span className="text-outline-variant">/</span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-secondary">update</span>
                  <span>Catalog updated Oct 2026</span>
                </span>
              </div>
            </div>

            {/* Telemetry Card */}
            <div className="lg:col-span-4 relative mt-space-md lg:mt-0">
              <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm border border-outline-variant/40 space-y-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-code-sm text-code-sm uppercase tracking-wider text-on-surface-variant">
                    Telemetry &amp; Footprint
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-code-sm text-code-sm">
                    Live Focus
                  </span>
                </div>
                <div className="space-y-space-sm">
                  <div className="flex items-center justify-between font-body-sm text-body-sm">
                    <span className="text-on-surface">Primary stack concentration</span>
                    <span className="font-code-sm text-code-sm text-secondary font-medium">Full-Stack &amp; AI</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                  <div className="p-space-sm rounded bg-surface-container text-left border border-outline-variant/30">
                    <span className="font-headline-md text-headline-md text-on-surface block leading-none">07</span>
                    <span className="font-code-sm text-code-sm text-on-surface-variant mt-1 block">Programming Stack</span>
                  </div>
                  <div className="p-space-sm rounded bg-surface-container text-left border border-outline-variant/30">
                    <span className="font-headline-md text-headline-md text-on-surface block leading-none">05</span>
                    <span className="font-code-sm text-code-sm text-on-surface-variant mt-1 block">AI &amp; ML Frontiers</span>
                  </div>
                </div>

                {/* Filter Controls */}
                <div className="pt-space-xs flex items-center gap-space-xs text-on-surface-variant font-code-sm text-code-sm flex-wrap">
                  <span className="material-symbols-outlined text-[16px] text-secondary">filter_alt</span>
                  <span>Filter view:</span>
                  <button
                    type="button"
                    onClick={() => setFilter('all')}
                    className={
                      filter === 'all'
                        ? 'text-secondary font-medium underline underline-offset-2'
                        : 'hover:text-on-surface transition-colors cursor-pointer'
                    }
                  >
                    All
                  </button>
                  <span>·</span>
                  <button
                    type="button"
                    onClick={() => setFilter('code')}
                    className={
                      filter === 'code'
                        ? 'text-secondary font-medium underline underline-offset-2'
                        : 'hover:text-on-surface transition-colors cursor-pointer'
                    }
                  >
                    Code
                  </button>
                  <span>·</span>
                  <button
                    type="button"
                    onClick={() => setFilter('web')}
                    className={
                      filter === 'web'
                        ? 'text-secondary font-medium underline underline-offset-2'
                        : 'hover:text-on-surface transition-colors cursor-pointer'
                    }
                  >
                    Web
                  </button>
                  <span>·</span>
                  <button
                    type="button"
                    onClick={() => setFilter('creative')}
                    className={
                      filter === 'creative'
                        ? 'text-secondary font-medium underline underline-offset-2'
                        : 'hover:text-on-surface transition-colors cursor-pointer'
                    }
                  >
                    Design
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Bench Banner */}
        <section className="w-full max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
          <div className="relative rounded-2xl bg-surface-container p-space-lg md:p-space-xl overflow-hidden mb-space-2xl border border-outline-variant/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
              <div className="lg:col-span-7 space-y-space-sm">
                <span className="font-code-sm text-code-sm uppercase tracking-wider text-secondary">
                  Workplace Methodology
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Engineering with tactile empathy &amp; architectural discipline
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Technical tooling is a lever, not an identity. My foundation centers on strong computer science fundamentals, clear interfaces, and intentional layout systems that respect human attention.
                </p>
              </div>
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-xs h-40 rounded-xl overflow-hidden shadow-md">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUDekUSaoNzOW0q3mvZkG_Fg5LldAUoh5GRXzxJXQv0UXV-5Ty9kia6XKITehJDalnz-CPCTKlWQRnxmwwHPtd8EHoPddJKMGXizXnXaY2dGe7aTi1TuBuLxruSOsXURRaDIPstOsAgU2Gn4bL0-eufSqLS9FOIJuJI5yaNnDuoJYCV1-0SVhjiJA3fLiBYORdVLymclwq8oqPNbmJ_BeSNWyrr_zvFyrXcOdRC9AIZA7MjZXgPEhE_w"
                    alt="Close up architectural detail of printed blueprint specifications resting beside mechanical keyboard"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                  <div className="absolute bottom-2 left-2 px-2 py-1 bg-surface/90 rounded text-on-surface font-code-sm text-code-sm">
                    Studio Bench / Sana Hasan
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categorized Skills Grids */}
          <div className="space-y-space-3xl">
            {/* Category 01: Programming Languages */}
            {(filter === 'all' || filter === 'code') && (
              <div className="space-y-space-lg">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-space-xs pb-space-sm border-b border-surface-container-high">
                  <div className="flex items-center gap-space-sm">
                    <span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-medium">
                      01
                    </span>
                    <h2 className="font-headline-md text-headline-md text-on-surface">Programming Languages</h2>
                  </div>
                  <span className="font-code-sm text-code-sm text-on-surface-variant">
                    Core programmatic fundamentals &amp; logic
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
                  {codeSkills.map((sk) => (
                    <div
                      key={sk.id}
                      className="group p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all duration-200 flex flex-col justify-between space-y-space-md shadow-sm border border-outline-variant/30"
                    >
                      <div className="space-y-space-sm">
                        <div className="flex items-center justify-between">
                          <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">
                            {sk.name}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-code-sm text-code-sm">
                            {sk.tag}
                          </span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          {sk.description}
                        </p>
                      </div>
                      <div className="pt-space-sm flex flex-wrap gap-1.5 font-code-sm text-code-sm text-on-surface-variant">
                        {sk.keywords.map((kw, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-surface-container-high">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Language Perspective Card */}
                  <div className="p-space-lg rounded-xl bg-surface-container-high/40 flex flex-col justify-between space-y-space-md border border-outline-variant/30">
                    <div className="space-y-space-sm">
                      <span className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider">
                        Language Perspective
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">Algorithmic Clarity Over Trends</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Syntax shifts, but memory management, concurrency models, and algorithmic efficiency endure across paradigms.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-secondary font-code-sm text-code-sm">
                      <span className="material-symbols-outlined text-[18px]">psychology</span>
                      <span>Systems-first mindset</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Category 02: Web Technologies */}
            {(filter === 'all' || filter === 'web') && (
              <div className="space-y-space-lg">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-space-xs pb-space-sm border-b border-surface-container-high">
                  <div className="flex items-center gap-space-sm">
                    <span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-medium">
                      02
                    </span>
                    <h2 className="font-headline-md text-headline-md text-on-surface">Frontend &amp; Web Technologies</h2>
                  </div>
                  <span className="font-code-sm text-code-sm text-on-surface-variant">
                    Structural integrity, semantics &amp; user experience
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                  {webSkills.map((sk) => (
                    <div
                      key={sk.id}
                      className="group p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all duration-200 flex flex-col justify-between space-y-space-md shadow-sm border border-outline-variant/30"
                    >
                      <div className="space-y-space-sm">
                        <div className="flex items-center justify-between">
                          <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">
                            {sk.name}
                          </span>
                          <span className="material-symbols-outlined text-secondary">
                            {sk.id === 'react-native' ? 'smartphone' : sk.id === 'react' ? 'devices' : sk.id === 'tailwind' ? 'style' : 'web'}
                          </span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          {sk.description}
                        </p>
                      </div>
                      <div className="pt-space-sm flex flex-wrap gap-1.5 font-code-sm text-code-sm text-on-surface-variant">
                        {sk.keywords.map((kw, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-surface-container-high">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Category 03: Design & Creative Tools */}
            {(filter === 'all' || filter === 'creative') && (
              <div className="space-y-space-lg">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-space-xs pb-space-sm border-b border-surface-container-high">
                  <div className="flex items-center gap-space-sm">
                    <span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-medium">
                      03
                    </span>
                    <h2 className="font-headline-md text-headline-md text-on-surface">Design &amp; Creative Tools</h2>
                  </div>
                  <span className="font-code-sm text-code-sm text-on-surface-variant">
                    Form, visual articulation &amp; asset workflows
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  {creativeSkills.map((sk) => (
                    <div
                      key={sk.id}
                      className="group p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all duration-200 flex flex-col justify-between space-y-space-md shadow-sm border border-outline-variant/30"
                    >
                      <div className="space-y-space-sm">
                        <div className="flex items-center justify-between">
                          <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors">
                            {sk.name}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-code-sm text-code-sm">
                            {sk.tag}
                          </span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          {sk.description}
                        </p>
                      </div>
                      <div className="pt-space-sm flex flex-wrap gap-1.5 font-code-sm text-code-sm text-on-surface-variant">
                        {sk.keywords.map((kw, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-surface-container-high">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Category 04: Actively Exploring Next */}
            <div className="space-y-space-lg">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-space-xs pb-space-sm border-b border-surface-container-high">
                <div className="flex items-center gap-space-sm">
                  <span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-medium">
                    04
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface">Machine Learning, Deep Learning &amp; AI Horizons</h2>
                </div>
                <span className="font-code-sm text-code-sm text-secondary font-medium">
                  Foundational &amp; Certified
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
                {nextSkills.map((sk) => (
                  <div
                    key={sk.id}
                    className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between space-y-space-md shadow-sm border border-outline-variant/30"
                  >
                    <div className="space-y-space-sm">
                      <div className="flex items-center justify-between">
                        <span className="material-symbols-outlined text-secondary">
                          {sk.id.includes('machine')
                            ? 'psychology'
                            : sk.id.includes('deep')
                            ? 'hub'
                            : sk.id.includes('nlp')
                            ? 'translate'
                            : sk.id.includes('vision')
                            ? 'visibility'
                            : 'smart_toy'}
                        </span>
                        <span className="font-code-sm text-code-sm text-on-surface-variant">{sk.tag}</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">{sk.name}</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {sk.description}
                      </p>
                    </div>
                    {sk.progress && (
                      <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                        <div
                          className="bg-secondary h-full rounded-full"
                          style={{ width: `${sk.progress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Callout */}
        <section className="w-full max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-2xl">
          <div className="rounded-2xl bg-surface-container-low p-space-xl md:p-space-2xl text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-space-lg shadow-sm border border-outline-variant/40">
            <div className="space-y-space-xs max-w-xl">
              <span className="font-code-sm text-code-sm uppercase tracking-wider text-secondary font-medium">
                Applied Engineering
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">
                See these tools in action across my selected projects
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Theory and skills are measured through execution. Browse case studies covering full-stack web applications, procedural logic, and UI implementations.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/projects"
                className="inline-flex items-center gap-space-sm px-space-xl py-space-md rounded-lg bg-primary text-on-primary hover:bg-secondary transition-colors duration-200 shadow-sm font-label-md text-label-md group"
              >
                <span>Explore Selected Works</span>
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
