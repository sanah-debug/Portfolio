import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from '../components/ProjectModal';
import { SeoMeta } from '../components/SeoMeta';

export const HomePage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { profile, principles, projects, skills, journey } = portfolioData;

  return (
    <>
      <SeoMeta
        title="Sana Hasan — Full-Stack Developer & Technologist"
        description={profile.headline}
      />

      <div className="flex flex-col w-full">
        {/* Section 1: Hero Editorial Layout */}
        <section className="w-full max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-xl lg:pt-space-2xl pb-space-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            {/* Left Column: Manifesto & Narrative */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-space-lg">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/30">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="font-code-sm text-code-sm text-secondary tracking-wider font-semibold uppercase">
                  {profile.role}
                </span>
              </div>

              {/* Serif Headline */}
              <h1 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg lg:text-display text-on-surface leading-tight tracking-tight">
                Building thoughtful digital experiences, grounded in clean code and human-centered design.
              </h1>

              {/* Intro Paragraph */}
              <p className="font-body-lg text-body-md sm:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                {profile.subheadline}
              </p>

              {/* CTAs */}
              <div className="pt-space-sm flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-space-sm sm:gap-space-md w-full sm:w-auto">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-6 py-3.5 sm:py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors duration-200 shadow-sm group min-h-[44px]"
                >
                  <span>View Selected Work</span>
                  <span className="material-symbols-outlined ml-1.5 text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 sm:py-3 rounded-lg bg-surface-container-low border border-outline-variant/50 text-on-surface font-label-md text-label-md hover:bg-surface-container hover:border-on-surface transition-all duration-200 min-h-[44px]"
                >
                  <span>Get in Touch</span>
                </Link>
                <div className="flex items-center justify-start gap-4 pt-1 sm:pt-0">
                  <a
                    href={profile.resume.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 py-2 text-on-surface-variant hover:text-secondary font-code-sm text-code-sm underline underline-offset-4 decoration-outline-variant hover:decoration-secondary transition-colors cursor-pointer min-h-[44px]"
                  >
                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                    <span>View Resume</span>
                  </a>
                  <a
                    href={profile.resume.downloadUrl}
                    download={profile.resume.fileName}
                    className="inline-flex items-center gap-1.5 py-2 text-on-surface-variant hover:text-secondary font-code-sm text-code-sm underline underline-offset-4 decoration-outline-variant hover:decoration-secondary transition-colors cursor-pointer min-h-[44px]"
                  >
                    <span className="material-symbols-outlined text-[16px]">file_download</span>
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>

              {/* Micro Meta Ticker */}
              <div className="pt-space-xs sm:pt-space-sm flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-space-lg font-code-sm text-code-sm text-on-surface-variant">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-[16px]">terminal</span>
                  <span>Full-Stack / Mobile / AI</span>
                </div>
                <span className="text-outline-variant hidden sm:inline">/</span>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
                  <span>Junior Developer Intern @ Octatribe</span>
                </div>
              </div>
            </div>

            {/* Right Column: Technical Paper Artifact */}
            <div className="lg:col-span-5 relative mt-space-xl lg:mt-0">
              <div className="absolute -top-4 -right-4 w-full h-full bg-surface-container-high rounded-xl -z-10 hidden sm:block"></div>
              <div className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-space-md sm:p-space-lg shadow-sm flex flex-col space-y-space-md">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-surface-variant pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-surface-variant inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-surface-variant inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-surface-variant inline-block"></span>
                    <span className="font-code-sm text-code-sm text-on-surface-variant ml-2">profile_meta.ts</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container text-secondary font-code-sm text-code-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    <span>Octatribe Intern</span>
                  </div>
                </div>

                {/* Code Manifest */}
                <div className="bg-surface-container-low rounded-lg p-space-sm sm:p-space-md font-code-sm text-xs sm:text-code-sm text-on-surface overflow-x-auto">
                  <pre className="leading-relaxed"><code><span className="text-secondary font-medium">const</span> developer = &#123;{'\n'}
{'  '}<span className="text-on-surface-variant">name</span>: <span className="text-on-surface font-semibold">"{profile.name}"</span>,{'\n'}
{'  '}<span className="text-on-surface-variant">role</span>: <span className="text-on-surface font-semibold">"{profile.role}"</span>,{'\n'}
{'  '}<span className="text-on-surface-variant">internship</span>: <span className="text-secondary">"Octatribe (WACRM)"</span>,{'\n'}
{'  '}<span className="text-on-surface-variant">education</span>: <span className="text-on-surface">"BIM • Birgunj Public College, TU"</span>,{'\n'}
{'  '}<span className="text-on-surface-variant">focus</span>: <span className="text-on-surface">"{profile.currentFocus}"</span>,{'\n'}
{'  '}<span className="text-on-surface-variant">coreStack</span>: [<span className="text-secondary">"React Native"</span>, <span className="text-secondary">"Python"</span>, <span className="text-secondary">"JavaScript"</span>]{'\n'}
&#125;;</code></pre>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-space-sm pt-space-xs border-t border-surface-variant">
                  <div className="bg-surface-container-low p-3 rounded">
                    <span className="font-code-sm text-code-sm text-on-surface-variant block uppercase tracking-wider">Foundation</span>
                    <span className="font-label-md text-label-md text-on-surface font-medium mt-0.5 block">Python • Java • C • SQL</span>
                  </div>
                  <div className="bg-surface-container-low p-3 rounded">
                    <span className="font-code-sm text-code-sm text-on-surface-variant block uppercase tracking-wider">Interface &amp; Mobile</span>
                    <span className="font-label-md text-label-md text-on-surface font-medium mt-0.5 block">React • React Native • Tailwind</span>
                  </div>
                </div>

                {/* Footnote */}
                <div className="flex items-center justify-between text-on-surface-variant font-code-sm text-code-sm pt-1">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    {profile.location}
                  </span>
                  <span>Updated Oct 2026</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Divider Rule */}
        <div className="w-full max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <div className="h-px bg-surface-variant w-full"></div>
        </div>

        {/* Section 2: Core Manifesto & Principles */}
        <section className="w-full max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl sm:py-space-2xl lg:py-space-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-baseline">
            <div className="lg:col-span-4 flex flex-col space-y-space-sm mb-space-md lg:mb-0">
              <span className="font-code-sm text-code-sm uppercase tracking-widest text-secondary font-medium">Core Manifesto</span>
              <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface tracking-tight">Crafting with clarity &amp; intent.</h2>
              <p className="font-body-md text-body-md text-on-surface-variant pt-space-xs">
                Software engineering is as much about human empathy and clear mental models as it is about algorithmic execution.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {principles.map((pr) => (
                <div
                  key={pr.num}
                  className="bg-surface-container-low border border-outline-variant/40 rounded-xl p-space-md flex flex-col justify-between hover:border-secondary/50 transition-colors duration-200"
                >
                  <div>
                    <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-secondary mb-space-md">
                      <span className="material-symbols-outlined text-[20px]">{pr.icon}</span>
                    </div>
                    <span className="font-code-sm text-code-sm text-on-surface-variant font-mono">
                      {pr.num} / PRINCIPLE
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 mb-2">
                      {pr.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {pr.description}
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm border-t border-surface-variant/70 font-code-sm text-code-sm text-secondary">
                    {pr.concept}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Horizontal Divider Rule */}
        <div className="w-full max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <div className="h-px bg-surface-variant w-full"></div>
        </div>

        {/* Section 3: Selected Projects Preview */}
        <section className="w-full max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl sm:py-space-2xl lg:py-space-3xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-xl sm:mb-space-2xl gap-space-md">
            <div className="space-y-space-xs">
              <div className="inline-flex items-center gap-2">
                <span className="font-code-sm text-code-sm uppercase tracking-widest text-secondary font-medium">Index of Works</span>
                <span className="text-outline-variant text-code-sm">/ 03 Selected</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface tracking-tight">Selected Projects</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">A collection of things I've built, explored, and learned from.</p>
            </div>
            <div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary hover:text-on-secondary-fixed-variant transition-colors group min-h-[44px]"
              >
                <span>Explore All Projects</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_right_alt
                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="group bg-surface-container-lowest border border-outline-variant/50 rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div className="p-space-md sm:p-space-lg flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="font-code-sm text-code-sm text-on-surface-variant font-mono">
                      {proj.eyebrow}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-code-sm bg-surface-container text-secondary border border-secondary/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> {proj.status}
                    </span>
                  </div>

                  <div className="w-full h-44 sm:h-48 rounded-lg bg-surface-container-low mb-space-md overflow-hidden relative border border-surface-variant flex items-center justify-center">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={proj.image}
                      alt={proj.imageAlt}
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 left-2 bg-surface/90 px-2 py-0.5 rounded text-[11px] font-code-sm text-on-surface-variant backdrop-blur-sm">
                      {proj.canvasTag}
                    </div>
                  </div>

                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 group-hover:text-secondary transition-colors">
                    {proj.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md flex-grow">
                    {proj.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-space-xs mb-space-lg">
                    {proj.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-surface-container font-code-sm text-code-sm text-on-surface-variant border border-outline-variant/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-space-md sm:px-space-lg py-3 bg-surface-container-low/70 border-t border-surface-variant flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(proj)}
                    className="font-label-md text-label-md text-on-surface font-medium group-hover:text-secondary transition-colors flex items-center gap-1 cursor-pointer min-h-[44px]"
                  >
                    <span>View Details</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                  <span className="font-code-sm text-code-sm text-on-surface-variant">{proj.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Horizontal Divider Rule */}
        <div className="w-full max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <div className="h-px bg-surface-variant w-full"></div>
        </div>

        {/* Section 4: Skills Overview Strip */}
        <section className="w-full max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl sm:py-space-2xl lg:py-space-3xl">
          <div className="bg-surface-container-low border border-outline-variant/40 rounded-xl p-space-lg sm:p-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter-desktop items-center">
              <div className="lg:col-span-5 space-y-space-xs">
                <span className="font-code-sm text-code-sm uppercase tracking-widest text-secondary font-medium">Technical Repertory</span>
                <h2 className="font-headline-md text-headline-md text-on-surface">Primary Tools &amp; Foundations</h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  A balanced mix of low-level computational foundations, client-side web technologies, and visual design instruments.
                </p>
                <div className="pt-space-sm">
                  <Link
                    to="/skills"
                    className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary hover:underline underline-offset-4 font-medium min-h-[44px]"
                  >
                    <span>View Full Skills &amp; Toolkit</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-7 flex flex-wrap gap-2 sm:gap-space-sm items-center pt-2 lg:pt-0">
                {skills.slice(0, 10).map((skill) => (
                  <div
                    key={skill.id}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant/50"
                  >
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span className="font-code-sm text-code-sm font-semibold text-on-surface">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Divider Rule */}
        <div className="w-full max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <div className="h-px bg-surface-variant w-full"></div>
        </div>

        {/* Section 5: Development Journey Preview */}
        <section className="w-full max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl sm:py-space-2xl lg:py-space-3xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-xl sm:mb-space-2xl gap-space-md">
            <div className="space-y-space-xs">
              <span className="font-code-sm text-code-sm uppercase tracking-widest text-secondary font-medium">Trajectory &amp; Progression</span>
              <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface tracking-tight">Milestones in Motion</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">A progressive timeline from foundational logic to production-ready engineering.</p>
            </div>
            <div>
              <Link
                to="/journey"
                className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary hover:text-on-secondary-fixed-variant transition-colors group min-h-[44px]"
              >
                <span>Read the Full Journey</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_right_alt
                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter relative">
            {journey.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="p-space-md sm:p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between relative"
              >
                <div className="space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-code-sm text-code-sm text-secondary font-mono font-medium">
                      {item.stage}
                    </span>
                    <span className="font-code-sm text-code-sm text-on-surface-variant">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm border-t border-surface-variant flex items-center gap-1 text-on-surface-variant font-code-sm text-code-sm">
                  <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
                  <span>{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Contact & Collaboration Callout */}
        <section className="w-full max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl sm:py-space-2xl lg:py-space-3xl mb-space-xl sm:mb-space-2xl">
          <div className="relative bg-surface-container rounded-xl p-space-lg sm:p-space-xl lg:p-space-2xl overflow-hidden border border-outline-variant/40">
            <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-secondary/5 blur-2xl pointer-events-none"></div>
            <div className="relative z-10 max-w-3xl flex flex-col items-start space-y-space-md">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-code-sm text-code-sm uppercase tracking-widest text-secondary font-semibold">Inquiries &amp; Dialogues</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg md:text-display text-on-surface tracking-tight">
                Have an idea or looking to collaborate?
              </h2>
              <p className="font-body-lg text-body-md sm:text-body-lg text-on-surface-variant">
                I'm always keen to hear about junior developer roles, open-source initiatives, internships, or interesting software challenges. Let's discuss what we can construct together.
              </p>
              <div className="pt-space-sm flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors duration-200 shadow-sm min-h-[44px] w-full sm:w-auto"
                >
                  <span>Let's Connect</span>
                  <span className="material-symbols-outlined ml-2 text-[18px]">send</span>
                </Link>
                <a
                  href={`mailto:${profile.inbox}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-lowest border border-outline-variant/50 text-on-surface font-label-md text-label-md hover:border-secondary transition-colors min-h-[44px] w-full sm:w-auto truncate"
                >
                  <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">alternate_email</span>
                  <span className="truncate">{profile.inbox}</span>
                </a>
              </div>
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
