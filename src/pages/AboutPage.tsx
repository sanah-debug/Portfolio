import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { SeoMeta } from '../components/SeoMeta';

export const AboutPage: React.FC = () => {
  const { profile } = portfolioData;

  return (
    <>
      <SeoMeta
        title="Biography & Philosophy"
        description="A little about Sana Hasan, her background in computer science, how she solves problems, and her approach to software development."
      />

      <div className="flex flex-col w-full">
        <div className="max-w-7xl mx-auto w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl lg:py-space-2xl">
          {/* Editorial Lead-in Header */}
          <header className="mb-space-xl sm:mb-space-2xl max-w-4xl">
            <div className="flex items-center gap-space-xs text-secondary mb-space-sm">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-code-sm text-code-sm tracking-widest uppercase font-semibold">
                Biography // Philosophy
              </span>
            </div>
            <h1 className="font-display text-display-mobile sm:text-display text-on-surface leading-[1.12] tracking-tight">
              A little about me, my path, and how I approach software.
            </h1>
            <p className="mt-space-md font-body-lg text-body-md sm:text-body-lg text-on-surface-variant max-w-2xl">
              Bridging the foundational discipline of computer science with the thoughtful restraint of editorial craftsmanship.
            </p>
          </header>

          {/* Visual Divider & Reading Time */}
          <div className="w-full bg-surface-variant h-[1px] mb-space-xl sm:mb-space-2xl flex flex-col xs:flex-row xs:items-center justify-between gap-1">
            <span className="bg-surface pr-space-md font-code-sm text-xs sm:text-code-sm text-on-surface-variant uppercase tracking-wider">
              Document ID: SH-2025-BIO
            </span>
            <span className="bg-surface pl-space-md font-code-sm text-xs sm:text-code-sm text-secondary">
              {profile.readingCadence}
            </span>
          </div>

          {/* Editorial Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-space-2xl lg:gap-x-gutter-desktop items-start">
            {/* Left Narrative Column (8 Cols) */}
            <article className="lg:col-span-8 flex flex-col space-y-space-2xl pr-0 lg:pr-space-md">
              {/* Dual Portrait & Workspace */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-space-md">
                <div className="sm:col-span-7 bg-surface-container rounded-lg overflow-hidden shadow-sm aspect-[4/3] relative">
                  <img
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_k7_R0LGB1hGG4ljil7EqrQakjx6NUdqiUvRNIJwciM4x4Q8WcwSCCcdlTGYdw24TVTstRCUGPwI2jV5b5BIrjGKgJ6j0dAp1Kymk5yQRzrAsgIo1rl3MgwuqBj2-wdSFhazCSR1AB_LChuVgEB-Aqlc5Ecb5RPoDG20_eH_BF1HBV9FnOHqLS7m2baENBEF1SMS0BQYUmXqY51-pjGAhmn4O4plyQeERY8j-9lgEyK030fKDyYTDYg"
                    alt="Editorial portrait of Sana Hasan in an architecturally styled studio with natural morning sunlight"
                    loading="lazy"
                  />
                  <div className="absolute bottom-space-xs right-space-xs bg-surface/90 px-space-xs py-0.5 rounded text-on-surface-variant font-code-sm text-code-sm">
                    [Fig. 01: Portrait Study]
                  </div>
                </div>
                <div className="sm:col-span-5 bg-surface-container rounded-lg overflow-hidden shadow-sm aspect-[4/3] relative">
                  <img
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ3JOa8opvncAyja_WXs3HhvrXTfSJk-4Ph8UaBK2cxTc73K1KHa03t5_c731mUl53stIHAtS56JXQPn7WUwttJ7T29mw5NjN-BKdVXHwh8Wh7ws-MUr7tNhHC9SLgu_-c53_o1Y4WUUBa1XqN7IqWSqnIpG6JnYI6aKiXH9MSaaTdTqVUkAgf9gi1bAnuk1mpHiE9ak57J8LMjYTG1PkIooIaJm3t-UjP0Odf3qD5MiRgEEJ19a5Ktw"
                    alt="A curated engineering desk aesthetic with open typography spec notebook and laptop"
                    loading="lazy"
                  />
                  <div className="absolute bottom-space-xs right-space-xs bg-surface/90 px-space-xs py-0.5 rounded text-on-surface-variant font-code-sm text-code-sm">
                    [Fig. 02: Workbench]
                  </div>
                </div>
              </div>

              {/* Section 1: Introduction */}
              <section className="space-y-space-md">
                <div className="flex items-baseline gap-space-xs">
                  <span className="font-code-sm text-code-sm text-secondary font-medium">[01]</span>
                  <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface">Introduction</h2>
                </div>
                <div className="space-y-space-md font-body-lg text-body-md sm:text-body-lg text-on-surface leading-relaxed">
                  <p>
                    I am Sana Hasan, an Information Management undergraduate at Birgunj Public College, Tribhuvan University, and Junior Developer Intern at Octatribe. I have hands-on experience in full-stack and mobile application development, along with foundational knowledge of Machine Learning, Deep Learning, Natural Language Processing, and Computer Vision.
                  </p>
                  <p className="text-on-surface-variant">
                    My academic studies in Information Management unite foundational computer science logic with modern full-stack engineering—procedural programming in C, object-oriented software design in Java, Python scripting, relational database management in SQL, and reactive user interfaces in React Native and React. At Octatribe, I develop WACRM and collaborate directly with the founder on ERPClaw and SeldonFrame, aiming to build intelligent, data-driven software using Python and modern AI tools.
                  </p>
                </div>

                <div className="bg-surface-container-low p-space-md sm:p-space-xl rounded-xl my-space-lg shadow-sm border border-outline-variant/30">
                  <blockquote className="font-headline-md text-headline-md-mobile sm:text-headline-md italic text-on-surface leading-snug">
                    “Software should behave like fine typography: structured by an invisible baseline grid, unambiguous in purpose, and built to outlast immediate trends.”
                  </blockquote>
                  <p className="mt-space-sm font-code-sm text-code-sm text-secondary uppercase tracking-wider">
                    — Engineering Notes, 2026
                  </p>
                </div>
              </section>

              {/* Section 2: How I Learn & Solve Problems */}
              <section className="space-y-space-md">
                <div className="flex items-baseline gap-space-xs">
                  <span className="font-code-sm text-code-sm text-secondary font-medium">[02]</span>
                  <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface">How I Learn &amp; Solve Problems</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Complex software problems rarely present themselves as neat algorithms. Instead, they arrive as ambiguity—nebulous client demands, high cognitive loads, or legacy friction. My approach begins with an intentional deconstruction of requirements before writing a single line of executable code:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-space-md pt-space-xs">
                  <div className="bg-surface-container-low p-space-md sm:p-space-lg rounded-xl shadow-sm border border-outline-variant/30 flex flex-col justify-between">
                    <div>
                      <span className="font-code-sm text-code-sm text-secondary">PHASE .01</span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-space-xs">First-Principles Dissection</h3>
                      <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                        Mapping inputs, mutations, and domain edge cases with paper schematics prior to scaffolding component trees.
                      </p>
                    </div>
                    <div className="mt-space-md font-code-sm text-code-sm text-on-surface-variant">
                      Output: Data Diagrams
                    </div>
                  </div>

                  <div className="bg-surface-container-low p-space-md sm:p-space-lg rounded-xl shadow-sm border border-outline-variant/30 flex flex-col justify-between">
                    <div>
                      <span className="font-code-sm text-code-sm text-secondary">PHASE .02</span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-space-xs">Atomic Modularization</h3>
                      <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                        Carving monolithic processes into discrete, deterministic functions with well-defined contracts and test boundaries.
                      </p>
                    </div>
                    <div className="mt-space-md font-code-sm text-code-sm text-on-surface-variant">
                      Output: Pure Units
                    </div>
                  </div>

                  <div className="bg-surface-container-low p-space-md sm:p-space-lg rounded-xl shadow-sm border border-outline-variant/30 flex flex-col justify-between">
                    <div>
                      <span className="font-code-sm text-code-sm text-secondary">PHASE .03</span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-space-xs">Self-Documenting Code</h3>
                      <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                        Treating variable semantics, commit narratives, and API declarations with literary clarity for future collaborators.
                      </p>
                    </div>
                    <div className="mt-space-md font-code-sm text-code-sm text-on-surface-variant">
                      Output: Clean Systems
                    </div>
                  </div>
                </div>

                {/* Workflow Distribution Chart */}
                <div className="bg-surface-container p-space-md sm:p-space-lg rounded-xl mt-space-md border border-outline-variant/30">
                  <div className="flex items-center justify-between mb-space-sm flex-wrap gap-2">
                    <span className="font-code-sm text-code-sm text-on-surface uppercase tracking-wider font-medium">
                      Cognitive Workflow Distribution
                    </span>
                    <span className="font-code-sm text-code-sm text-secondary font-medium">
                      100% System Completeness
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high h-3 rounded-full overflow-hidden flex">
                    <div className="bg-primary h-full" style={{ width: '35%' }} title="Architecture & Planning (35%)"></div>
                    <div className="bg-secondary h-full" style={{ width: '40%' }} title="Modular Construction (40%)"></div>
                    <div className="bg-outline h-full" style={{ width: '25%' }} title="Testing & Ergonomics (25%)"></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-space-sm font-code-sm text-xs sm:text-code-sm text-on-surface-variant">
                    <div><span className="inline-block w-2 h-2 rounded-full bg-primary mr-1"></span>35% Blueprinting</div>
                    <div><span className="inline-block w-2 h-2 rounded-full bg-secondary mr-1"></span>40% Construction</div>
                    <div><span className="inline-block w-2 h-2 rounded-full bg-outline mr-1"></span>25% Polish &amp; Audit</div>
                  </div>
                </div>
              </section>

              {/* Section 3: Core Engineering Principles */}
              <section className="space-y-space-md">
                <div className="flex items-baseline gap-space-xs">
                  <span className="font-code-sm text-code-sm text-secondary font-medium">[03]</span>
                  <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface">Core Engineering Principles</h2>
                </div>
                <div className="space-y-space-lg pt-space-xs">
                  <div className="bg-surface-container-low p-space-lg sm:p-space-xl rounded-xl shadow-sm border border-outline-variant/30 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-space-sm mb-space-xs">
                      <span className="material-symbols-outlined text-secondary">architecture</span>
                      <h3 className="font-headline-md text-headline-md-mobile sm:text-headline-md text-on-surface">1. Build with Purpose</h3>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Refusal to introduce speculative complexity. Every library, database column, and interface transition must serve a demonstrated problem. If a standard web primitive solves the user's issue with greater resilience, that primitive is chosen over trendy, fragile abstraction layers.
                    </p>
                  </div>

                  <div className="bg-surface-container-low p-space-lg sm:p-space-xl rounded-xl shadow-sm border border-outline-variant/30 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-space-sm mb-space-xs">
                      <span className="material-symbols-outlined text-secondary">autorenew</span>
                      <h3 className="font-headline-md text-headline-md-mobile sm:text-headline-md text-on-surface">2. Continuous Iteration</h3>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Writing software is an evolutionary dialog. The earliest prototype will be imperfect, but quick, instrumented deployments reveal empirical user patterns. I favor short feedback loops, strict semantic versioning, and codebases configured to receive incremental refactors safely.
                    </p>
                  </div>

                  <div className="bg-surface-container-low p-space-lg sm:p-space-xl rounded-xl shadow-sm border border-outline-variant/30 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-space-sm mb-space-xs">
                      <span className="material-symbols-outlined text-secondary">accessibility_new</span>
                      <h3 className="font-headline-md text-headline-md-mobile sm:text-headline-md text-on-surface">3. Human-First Design</h3>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Systems fail if their cognitive friction exceeds their computational utility. From WCAG AAA color contrast ratios and keyboard navigation pathways down to descriptive HTTP error payloads, ergonomics is an engineering responsibility—not an afterthought relegated to a style pass.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Beyond Code */}
              <section className="space-y-space-md">
                <div className="flex items-baseline gap-space-xs">
                  <span className="font-code-sm text-code-sm text-secondary font-medium">[04]</span>
                  <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface">Beyond Code</h2>
                </div>
                <div className="space-y-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  <p>
                    When away from the terminal, I invest deliberate time into tactile visual communication. Working with tools like Adobe Illustrator, Photoshop, and Canva, I experiment with typographic scales, spatial harmony, and print-like publication layouts.
                  </p>
                  <p>
                    Studying how editorial magazines handle typographic rhythm and hierarchical signposting profoundly informs how I architect frontend state machines. Knowing <em>why</em> a user’s eye drifts toward a specific focal point helps me construct better information hierarchies, less jarring states, and interfaces that feel grounded and calm rather than frantic.
                  </p>
                </div>

                <div className="bg-surface-container-low p-space-md sm:p-space-xl rounded-xl shadow-sm border border-outline-variant/30 grid grid-cols-1 sm:grid-cols-3 gap-space-md items-center">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                      <span className="material-symbols-outlined text-[20px]">format_size</span>
                    </div>
                    <div>
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface block">Editorial Typo</span>
                      <span className="font-code-sm text-code-sm text-on-surface-variant">Grid &amp; Scale studies</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface">
                      <span className="material-symbols-outlined text-[20px]">palette</span>
                    </div>
                    <div>
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface block">Warm Colorimetry</span>
                      <span className="font-code-sm text-code-sm text-on-surface-variant">Restraint &amp; Ink tones</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
                      <span className="material-symbols-outlined text-[20px]">menu_book</span>
                    </div>
                    <div>
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface block">Print Ephemera</span>
                      <span className="font-code-sm text-code-sm text-on-surface-variant">Archival cataloging</span>
                    </div>
                  </div>
                </div>
              </section>
            </article>

            {/* Right Aside (4 Cols) */}
            <aside className="lg:col-span-4 sticky top-24 space-y-space-xl">
              <div className="bg-surface-container-low rounded-xl p-space-xl shadow-sm border border-outline-variant/40 flex flex-col space-y-space-lg">
                <div className="flex items-center justify-between pb-space-sm bg-surface-container-high/40 p-space-sm rounded-lg">
                  <span className="font-code-sm text-code-sm font-semibold text-on-surface uppercase tracking-wider">
                    Technical Index
                  </span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                  </span>
                </div>

                <div className="space-y-space-xs">
                  <span className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider block">Current Focus</span>
                  <p className="font-headline-sm text-headline-sm text-on-surface font-medium leading-tight">
                    {profile.currentFocus}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                    {profile.academicBase} • Undergraduate Studies
                  </p>
                </div>

                <div className="w-full h-[1px] bg-surface-variant"></div>

                <div className="space-y-space-xs">
                  <span className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider block">Primary Languages</span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['Python', 'Java', 'C', 'JavaScript', 'PHP', 'SQL', 'HTML', 'CSS'].map((l) => (
                      <span key={l} className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-code-sm text-code-sm">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full h-[1px] bg-surface-variant"></div>

                <div className="space-y-space-xs">
                  <span className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider block">Current Reading &amp; Inquiries</span>
                  <ul className="space-y-2 pt-1 font-body-sm text-body-sm text-on-surface">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-code-sm text-code-sm">↳</span>
                      <span>Machine Learning, Deep Learning &amp; Computer Vision</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-code-sm text-code-sm">↳</span>
                      <span>Cross-Platform Mobile Architecture with React Native</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-code-sm text-code-sm">↳</span>
                      <span>Google Cloud AI &amp; Generative AI Studio Workflows</span>
                    </li>
                  </ul>
                </div>

                <div className="w-full h-[1px] bg-surface-variant"></div>

                <div className="space-y-space-xs">
                  <span className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider block">Coordinates</span>
                  <p className="font-body-sm text-body-sm text-on-surface">
                    {profile.location}
                  </p>
                </div>
              </div>

              {/* Resume Trigger Card */}
              <div className="bg-surface-container rounded-xl p-space-xl shadow-sm border border-outline-variant/40 space-y-space-md">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-secondary shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">description</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface leading-snug">Curriculum Vitae</h4>
                    <p className="font-code-sm text-code-sm text-on-surface-variant">Official PDF Dossier</p>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  A comprehensive overview of my academic background (BIM), junior developer internship at Octatribe, technical skills, and certified achievements.
                </p>
                <div className="flex flex-col gap-2 w-full pt-1">
                  <a
                    href={profile.resume.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-space-xs px-space-md py-3 rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors duration-200 shadow-sm cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                    <span>View Resume (PDF)</span>
                    <span className="material-symbols-outlined text-[16px] ml-1">open_in_new</span>
                  </a>
                  <a
                    href={profile.resume.downloadUrl}
                    download={profile.resume.fileName}
                    className="w-full inline-flex items-center justify-center gap-space-xs px-space-md py-2.5 rounded bg-surface-container-high border border-outline-variant/30 text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors duration-200 shadow-sm cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>

              <div className="p-space-md bg-surface-container-high/30 rounded-lg border border-outline-variant/20">
                <p className="font-code-sm text-code-sm text-on-surface-variant leading-relaxed">
                  Credentials: Innovating with Google Cloud AI, Generative AI Studio, Ethical Hacking 101, and Fullstack JavaScript Pre-Bootcamp (72 hrs).
                </p>
              </div>
            </aside>
          </div>

          {/* Bottom CTA Banner */}
          <section className="mt-space-2xl sm:mt-space-3xl mb-space-xl sm:mb-space-2xl">
            <div className="bg-surface-container-low rounded-xl p-space-lg sm:p-space-xl md:p-space-2xl shadow-sm border border-outline-variant/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg sm:gap-space-xl">
              <div className="max-w-xl space-y-space-xs">
                <span className="font-code-sm text-code-sm text-secondary uppercase tracking-widest font-semibold">Initiate Dialogue</span>
                <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface">
                  Interested in collaborating or discussing an upcoming project?
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant pt-space-xs">
                  I am currently open to internship opportunities, joint development initiatives, and technical writing inquiries.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md w-full md:w-auto">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-space-xs px-space-xl py-3.5 sm:py-4 rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors duration-200 shadow-sm group min-h-[44px]"
                >
                  <span>Let's talk</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform duration-200">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-space-md py-3.5 sm:py-4 rounded bg-surface text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors duration-200 shadow-sm border border-outline-variant/30 min-h-[44px]"
                >
                  <span>Inspect Selected Works</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
