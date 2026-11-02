import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from '../components/ProjectModal';
import { SeoMeta } from '../components/SeoMeta';

type ProjectFilter = 'all' | 'frontend' | 'fullstack' | 'automation';

export const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { projects } = portfolioData;

  const filteredProjects = projects.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  );

  return (
    <>
      <SeoMeta
        title="Selected Projects &amp; Practical Concepts"
        description="Curated archive of web applications, full-stack architectures, and CLI automation tools by Sana Hasan."
      />

      <div className="flex flex-col w-full">
        {/* Top Archival Intro */}
        <section className="w-full relative px-margin md:px-margin-tablet lg:px-margin-desktop pt-12 pb-16 lg:pt-16 lg:pb-24">
          <div className="absolute -top-16 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-7xl mx-auto flex flex-col space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-code-sm text-code-sm uppercase tracking-widest text-on-surface-variant font-medium">
                PORTFOLIO OF CRAFT — INDEX VOL. 02
              </span>
            </div>
            <h1 className="font-display text-display max-w-4xl tracking-tight text-on-surface">
              Selected Projects &amp;{' '}
              <span className="italic font-display text-secondary">Practical Concepts</span>.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              A curated collection of mobile applications, enterprise full-stack software, and e-commerce platforms developed through self-directed projects and professional internship at Octatribe.
            </p>

            {/* Editorial Metadata Ribbon */}
            <div className="pt-space-lg flex flex-wrap items-center gap-y-3 gap-x-8 text-on-surface-variant">
              <div className="flex items-center gap-2 font-code-sm text-code-sm">
                <span className="material-symbols-outlined text-secondary text-[18px]">view_timeline</span>
                <span>CURATED REPOSITORY ARCHIVE</span>
              </div>
              <span className="text-outline-variant hidden sm:inline">•</span>
              <div className="flex items-center gap-2 font-code-sm text-code-sm">
                <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                <span>MOBILE &amp; FULL-STACK ARCHITECTURE</span>
              </div>
              <span className="text-outline-variant hidden sm:inline">•</span>
              <div className="flex items-center gap-2 font-code-sm text-code-sm">
                <span className="material-symbols-outlined text-secondary text-[18px]">terminal</span>
                <span>3 FEATURED CASE STUDIES</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Filter Bar */}
        <section className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop sticky top-20 z-30 bg-surface/95 backdrop-blur-md py-4 border-y border-surface-variant/50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter projects by category">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all duration-200 shadow-sm flex items-center gap-1.5 cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">folder_copy</span>
                <span>All Works</span>
                <span className="ml-1 px-1.5 py-0.2 rounded-full bg-surface-container text-on-surface text-code-sm font-code-sm">
                  3
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveFilter('frontend')}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all duration-200 shadow-sm flex items-center gap-1.5 cursor-pointer ${
                  activeFilter === 'frontend'
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">smartphone</span>
                <span>Mobile App</span>
                <span className="ml-1 px-1.5 py-0.2 rounded-full bg-surface-container-high text-on-surface-variant text-code-sm font-code-sm">
                  1
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveFilter('fullstack')}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all duration-200 shadow-sm flex items-center gap-1.5 cursor-pointer ${
                  activeFilter === 'fullstack'
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">dns</span>
                <span>Full-Stack &amp; CRM</span>
                <span className="ml-1 px-1.5 py-0.2 rounded-full bg-surface-container-high text-on-surface-variant text-code-sm font-code-sm">
                  1
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveFilter('automation')}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all duration-200 shadow-sm flex items-center gap-1.5 cursor-pointer ${
                  activeFilter === 'automation'
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">shopping_cart</span>
                <span>E-Commerce</span>
                <span className="ml-1 px-1.5 py-0.2 rounded-full bg-surface-container-high text-on-surface-variant text-code-sm font-code-sm">
                  1
                </span>
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-3 font-code-sm text-code-sm text-on-surface-variant">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
              <span>Displaying {filteredProjects.length} of 3 Artifacts</span>
            </div>
          </div>
        </section>

        {/* Projects Showcase Bento Grid */}
        <section className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
          <div className="max-w-7xl mx-auto space-y-space-2xl">
            {/* Case 01: BookAHand */}
            {(activeFilter === 'all' || activeFilter === 'frontend') && (
              <article className="group w-full bg-surface-container-low rounded-xl p-space-md md:p-space-xl transition-all duration-300 hover:bg-surface-container shadow-sm border border-outline-variant/40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
                  {/* Column A: Project Metadata & Overview (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-space-lg">
                    <div className="space-y-space-md">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-code-sm text-code-sm px-2.5 py-1 rounded bg-surface text-secondary font-medium tracking-wide inline-flex items-center gap-1.5 border border-secondary/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                          {projects[0].status.toUpperCase()}
                        </span>
                        <span className="font-code-sm text-code-sm px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant uppercase">
                          Mobile App
                        </span>
                      </div>

                      <div>
                        <span className="font-code-sm text-code-sm text-on-surface-variant tracking-wider uppercase block mb-1">
                          Index • 01 / 03
                        </span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight group-hover:text-secondary transition-colors duration-200">
                          {projects[0].title}
                        </h2>
                      </div>

                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {projects[0].summary}
                      </p>

                      <div className="space-y-2 pt-2">
                        <span className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider block text-[11px]">
                          Core Architectural Stack
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {projects[0].technologies.map((t) => (
                            <span key={t} className="font-code-sm text-code-sm px-2.5 py-1 rounded bg-surface text-on-surface border border-outline-variant/30">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-space-md flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(projects[0])}
                        className="inline-flex items-center justify-center gap-2 px-space-md py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-all duration-200 group-hover:shadow-md cursor-pointer"
                      >
                        <span>View Full Details</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                      </button>
                      <span className="font-code-sm text-code-sm text-on-surface-variant italic">React Native &amp; Figma</span>
                    </div>
                  </div>

                  {/* Column B: Mockup Visual Preview Box (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col space-y-3">
                    <div className="relative w-full rounded-xl overflow-hidden bg-surface-container-high p-3 md:p-4 transition-transform duration-300 border border-outline-variant/30">
                      <div className="w-full flex items-center justify-between pb-3 px-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-outline-variant"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-outline-variant"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-outline-variant"></span>
                        </div>
                        <div className="px-3 py-1 bg-surface rounded text-center max-w-xs w-full mx-4 shadow-sm">
                          <span className="font-code-sm text-code-sm text-on-surface-variant truncate block text-[11px]">
                            BookAHand • Home Services Marketplace
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-on-surface-variant">
                          <span className="material-symbols-outlined text-[16px]">refresh</span>
                        </div>
                      </div>

                      <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden bg-surface-container">
                        <img
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          src={projects[0].image}
                          alt={projects[0].imageAlt}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 pointer-events-none p-3 flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <span className="font-code-sm text-code-sm bg-surface/90 text-secondary px-2 py-0.5 rounded shadow-sm">
                              FIG 01.A — MOBILE WORKFLOW &amp; UI
                            </span>
                            <span className="w-3 h-3 bg-secondary rounded-full"></span>
                          </div>
                          <div className="flex justify-between items-end">
                            <span className="font-code-sm text-code-sm bg-surface/90 text-on-surface-variant px-2 py-0.5 rounded shadow-sm">
                              GOOGLE AUTHENTICATION
                            </span>
                            <span className="font-code-sm text-code-sm text-secondary tracking-widest font-bold">
                              TAILWIND CSS &amp; FIGMA
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center pt-1">
                      {projects[0].metrics.map((m, idx) => (
                        <div key={idx} className="bg-surface rounded p-2 border border-outline-variant/30">
                          <span className="font-headline-sm text-headline-sm text-secondary block font-semibold">{m.value}</span>
                          <span className="font-code-sm text-code-sm text-on-surface-variant text-[11px]">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* Case 02: WACRM & Ecosystem (Octatribe) */}
            {(activeFilter === 'all' || activeFilter === 'fullstack') && (
              <article className="group w-full bg-surface-container-low rounded-xl p-space-md md:p-space-xl transition-all duration-300 hover:bg-surface-container shadow-sm border border-outline-variant/40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
                  {/* Column A: Visualization (7 cols) */}
                  <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col space-y-3">
                    <div className="relative w-full rounded-xl overflow-hidden bg-surface-container-high p-3 md:p-4 border border-outline-variant/30">
                      <div className="flex items-center justify-between pb-3 px-2">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[20px]">dataset</span>
                          <span className="font-headline-sm text-headline-sm text-on-surface text-[15px] font-medium">
                            Octatribe • WACRM
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-code-sm text-code-sm bg-surface px-2.5 py-0.5 rounded text-on-surface-variant">
                            ERPClaw &amp; SeldonFrame
                          </span>
                          <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        </div>
                      </div>

                      <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden bg-surface-container">
                        <img
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          src={projects[1].image}
                          alt={projects[1].imageAlt}
                          loading="lazy"
                        />
                        <div className="absolute bottom-4 left-4 right-4 bg-surface/95 backdrop-blur-md rounded-lg p-3 shadow-md flex items-center justify-between border border-outline-variant/30">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-secondary/10 flex items-center justify-center text-secondary">
                              <span className="material-symbols-outlined text-[18px]">verified</span>
                            </div>
                            <div>
                              <span className="font-label-md text-label-md text-on-surface block font-medium">
                                Junior Developer Intern
                              </span>
                              <span className="font-code-sm text-code-sm text-on-surface-variant block">
                                Directly collaborating with founder on CRM products
                              </span>
                            </div>
                          </div>
                          <span className="font-code-sm text-code-sm text-secondary font-medium px-2 py-1 bg-surface rounded">
                            ACTIVE
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center pt-1">
                      {projects[1].metrics.map((m, idx) => (
                        <div key={idx} className="bg-surface rounded p-2 border border-outline-variant/30">
                          <span className="font-headline-sm text-headline-sm text-secondary block font-semibold">{m.value}</span>
                          <span className="font-code-sm text-code-sm text-on-surface-variant text-[11px]">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column B: Project Metadata (5 cols) */}
                  <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-between h-full space-y-space-lg">
                    <div className="space-y-space-md">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-code-sm text-code-sm px-2.5 py-1 rounded bg-surface text-secondary font-medium tracking-wide inline-flex items-center gap-1.5 border border-secondary/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                          OCTATRIBE INTERNSHIP
                        </span>
                        <span className="font-code-sm text-code-sm px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant uppercase">
                          CRM Architecture
                        </span>
                      </div>

                      <div>
                        <span className="font-code-sm text-code-sm text-on-surface-variant tracking-wider uppercase block mb-1">
                          Index • 02 / 03
                        </span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight group-hover:text-secondary transition-colors duration-200">
                          {projects[1].title}
                        </h2>
                      </div>

                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {projects[1].summary}
                      </p>

                      <div className="space-y-2 pt-2">
                        <span className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider block text-[11px]">
                          Ecosystem Components
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {projects[1].technologies.map((t) => (
                            <span key={t} className="font-code-sm text-code-sm px-2.5 py-1 rounded bg-surface text-on-surface border border-outline-variant/30">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-space-md flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(projects[1])}
                        className="inline-flex items-center justify-center gap-2 px-space-md py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-all duration-200 group-hover:shadow-md cursor-pointer"
                      >
                        <span>View Full Details</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                      </button>
                      <span className="font-code-sm text-code-sm text-on-surface-variant italic">Production Engineering</span>
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* Case 03: Redify – Online Book Store */}
            {(activeFilter === 'all' || activeFilter === 'automation') && (
              <article className="group w-full bg-surface-container-low rounded-xl p-space-md md:p-space-xl transition-all duration-300 hover:bg-surface-container shadow-sm border border-outline-variant/40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
                  {/* Column A: Project Metadata (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-space-lg">
                    <div className="space-y-space-md">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-code-sm text-code-sm px-2.5 py-1 rounded bg-surface text-secondary font-medium tracking-wide inline-flex items-center gap-1.5 border border-secondary/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                          COMPLETED STORE
                        </span>
                        <span className="font-code-sm text-code-sm px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant uppercase">
                          WordPress E-Commerce
                        </span>
                      </div>

                      <div>
                        <span className="font-code-sm text-code-sm text-on-surface-variant tracking-wider uppercase block mb-1">
                          Index • 03 / 03
                        </span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight group-hover:text-secondary transition-colors duration-200">
                          {projects[2].title}
                        </h2>
                      </div>

                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {projects[2].summary}
                      </p>

                      <div className="space-y-2 pt-2">
                        <span className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider block text-[11px]">
                          Platform Architecture
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {projects[2].technologies.map((t) => (
                            <span key={t} className="font-code-sm text-code-sm px-2.5 py-1 rounded bg-surface text-on-surface border border-outline-variant/30">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-space-md flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(projects[2])}
                        className="inline-flex items-center justify-center gap-2 px-space-md py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-all duration-200 group-hover:shadow-md cursor-pointer"
                      >
                        <span>View Full Details</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                      </button>
                      <span className="font-code-sm text-code-sm text-on-surface-variant italic">E-Commerce Setup</span>
                    </div>
                  </div>

                  {/* Column B: Terminal Display (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col space-y-3">
                    <div className="relative w-full rounded-xl overflow-hidden bg-primary p-4 md:p-6 text-on-primary shadow-md">
                      <div className="flex items-center justify-between pb-4">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-secondary"></span>
                          <span className="w-3 h-3 rounded-full bg-surface-container"></span>
                          <span className="w-3 h-3 rounded-full bg-surface-container-high"></span>
                          <span className="font-code-sm text-code-sm text-on-surface-variant ml-2">
                            wordpress — redify-bookstore
                          </span>
                        </div>
                        <span className="font-code-sm text-code-sm text-secondary uppercase font-semibold">
                          LIVE DEPLOYMENT
                        </span>
                      </div>

                      <div className="font-code-sm text-code-sm space-y-2 bg-primary-container p-4 rounded-lg overflow-x-auto text-surface-container-lowest font-mono">
                        <p className="text-on-surface-variant">
                          <span className="text-secondary">$</span> wp-cli site:status --domain=redify-bookstore
                        </p>
                        <p className="text-secondary">→ [INFO] Redify Online Bookstore Engine initialized</p>
                        <p className="text-on-primary">• Catalog taxonomies: Fiction, Academic, Technology, Literature</p>
                        <p className="text-on-primary">• Configured product metadata, reading previews &amp; responsive cart</p>
                        <p className="text-secondary font-medium">✓ Storefront active with PHP &amp; MySQL relational database</p>
                        <p className="text-on-surface-variant text-[11px] pt-1">Theme assets: /wp-content/themes/redify-books/</p>
                      </div>

                      <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3 text-on-surface-variant">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[18px]">menu_book</span>
                          <span className="font-code-sm text-code-sm">Digital Bookstore</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[18px]">shopping_bag</span>
                          <span className="font-code-sm text-code-sm">E-Commerce Flow</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[18px]">database</span>
                          <span className="font-code-sm text-code-sm">WordPress &amp; MySQL</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center pt-1">
                      {projects[2].metrics.map((m, idx) => (
                        <div key={idx} className="bg-surface rounded p-2 border border-outline-variant/30">
                          <span className="font-headline-sm text-headline-sm text-secondary block font-semibold">{m.value}</span>
                          <span className="font-code-sm text-code-sm text-on-surface-variant text-[11px]">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            )}
          </div>
        </section>

        {/* Archival Colophon & Journey Callout */}
        <section className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-space-2xl">
          <div className="max-w-7xl mx-auto rounded-xl bg-surface-container p-space-lg md:p-space-2xl flex flex-col md:flex-row items-center justify-between gap-space-lg border border-outline-variant/40">
            <div className="space-y-space-sm max-w-xl">
              <span className="font-code-sm text-code-sm text-secondary uppercase font-semibold tracking-wider">
                COLLABORATIVE INTENT
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Interested in deep architectural breakdowns or code reviews?
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Explore complete chronology, system schemas, or connect directly to discuss upcoming software initiatives.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/journey"
                className="px-space-md py-3 rounded-lg bg-surface text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors duration-200 border border-outline-variant/40"
              >
                <span>Read Chronology</span>
              </Link>
              <Link
                to="/contact"
                className="px-space-md py-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-primary transition-colors duration-200 shadow-sm"
              >
                <span>Initiate Contact</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};
