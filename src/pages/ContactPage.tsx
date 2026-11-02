import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { submitContactMessage } from '../utils/api';
import { SeoMeta } from '../components/SeoMeta';

export const ContactPage: React.FC = () => {
  const { profile } = portfolioData;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
    note?: string;
  }>({
    type: 'idle',
    message: '',
  });

  // Copy email feedback
  const [copied, setCopied] = useState(false);

  // Live Clock
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short',
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.inbox);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validations
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setFormStatus({
        type: 'error',
        message: 'Please provide a valid name (at least 2 characters).',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address (e.g. name@organization.com).',
      });
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a message of at least 10 characters.',
      });
      return;
    }

    setFormStatus({
      type: 'loading',
      message: 'Dispatching message through transmittal pipeline...',
    });

    try {
      const result = await submitContactMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim() || undefined,
        message: formData.message.trim(),
      });

      if (result.success) {
        setFormStatus({
          type: 'success',
          message: result.message,
          note: result.data?.note || undefined,
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus({
          type: 'error',
          message: result.message || 'Failed to submit contact inquiry.',
        });
      }
    } catch (err: any) {
      setFormStatus({
        type: 'error',
        message: err?.message || 'Unexpected transmittal error.',
      });
    }
  };

  return (
    <>
      <SeoMeta
        title="Inquiries &amp; Dialogues"
        description="Direct channel to get in touch with Sana Hasan for internship opportunities, project collaborations, and software advisory."
      />

      <div className="flex flex-col w-full">
        <section className="w-full max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl lg:py-space-2xl">
          {/* Header */}
          <div className="relative pb-space-xl">
            <div className="flex items-center gap-space-sm mb-space-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-code-sm text-code-sm uppercase tracking-widest text-secondary font-medium">
                Direct Channel
              </span>
              <span className="font-code-sm text-code-sm text-on-surface-variant">/ Ref. 2025.CON</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
              <div className="lg:col-span-8">
                <h1 className="font-display text-display text-on-surface tracking-tight leading-[1.08] max-w-3xl">
                  Have an idea? <br />
                  <span className="italic font-normal text-on-surface-variant font-display">
                    Let's connect.
                  </span>
                </h1>
              </div>
              <div className="lg:col-span-4 lg:pb-space-xs">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Whether it's an internship opportunity, freelance inquiry, collaboration, or simply a conversation about technology and design, I'd love to hear from you.
                </p>
              </div>
            </div>
            <div className="w-full h-px bg-surface-variant mt-space-xl"></div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop mt-space-xl items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-surface-container-low rounded-xl p-space-lg md:p-space-xl shadow-sm border border-outline-variant/40">
                <div className="flex items-center justify-between pb-space-md mb-space-lg border-b border-surface-variant">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[20px]">edit_note</span>
                    <span className="font-code-sm text-code-sm uppercase tracking-wider text-on-surface font-medium">
                      Transmittal Dispatch
                    </span>
                  </div>
                  <span className="font-code-sm text-code-sm text-on-surface-variant">
                    Standard Encrypted Form
                  </span>
                </div>

                <form className="space-y-space-lg" onSubmit={handleSubmit} noValidate>
                  {/* Name */}
                  <div className="space-y-space-xs">
                    <div className="flex justify-between items-baseline">
                      <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="fullName">
                        Name <span className="text-secondary font-bold">*</span>
                      </label>
                      <span className="font-code-sm text-code-sm text-on-surface-variant">Required</span>
                    </div>
                    <div className="relative">
                      <input
                        className="w-full px-space-md py-3 rounded-lg bg-surface text-on-surface placeholder:text-outline text-body-md font-body-md focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all duration-200 border border-outline-variant/30"
                        id="fullName"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Sharma"
                        required
                        type="text"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-space-xs">
                    <div className="flex justify-between items-baseline">
                      <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="emailAddr">
                        Email Address <span className="text-secondary font-bold">*</span>
                      </label>
                      <span className="font-code-sm text-code-sm text-on-surface-variant">Format: name@domain.com</span>
                    </div>
                    <div className="relative">
                      <input
                        className="w-full px-space-md py-3 rounded-lg bg-surface text-on-surface placeholder:text-outline text-body-md font-body-md focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all duration-200 border border-outline-variant/30"
                        id="emailAddr"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@organization.com"
                        required
                        type="email"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-space-xs">
                    <div className="flex justify-between items-baseline">
                      <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="subjectLine">
                        Subject
                      </label>
                      <span className="font-code-sm text-code-sm text-on-surface-variant">Optional</span>
                    </div>
                    <div className="relative">
                      <input
                        className="w-full px-space-md py-3 rounded-lg bg-surface text-on-surface placeholder:text-outline text-body-md font-body-md focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all duration-200 border border-outline-variant/30"
                        id="subjectLine"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Internship opening / Technical advisory / Project discourse"
                        type="text"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-space-xs">
                    <div className="flex justify-between items-baseline">
                      <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="messageBody">
                        Message <span className="text-secondary font-bold">*</span>
                      </label>
                      <span className="font-code-sm text-code-sm text-on-surface-variant">Min. 10 characters</span>
                    </div>
                    <div className="relative">
                      <textarea
                        className="w-full p-space-md rounded-lg bg-surface text-on-surface placeholder:text-outline text-body-md font-body-md focus:outline-none focus:ring-2 focus:ring-secondary/20 resize-y transition-all duration-200 border border-outline-variant/30"
                        id="messageBody"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Outline the scope, problem set, timeline, or thoughts you wish to share..."
                        required
                        rows={6}
                      ></textarea>
                    </div>
                  </div>

                  {/* Actions & Feedback */}
                  <div className="pt-space-xs space-y-space-md">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md">
                      <button
                        className="inline-flex items-center justify-center gap-space-sm px-space-xl py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-all duration-200 shadow-md group disabled:opacity-50 cursor-pointer"
                        id="submitBtn"
                        type="submit"
                        disabled={formStatus.type === 'loading'}
                      >
                        <span>{formStatus.type === 'loading' ? 'Dispatching...' : 'Send Message'}</span>
                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform duration-200">
                          arrow_forward
                        </span>
                      </button>
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                        <span className="font-code-sm text-code-sm">Avg response: &lt; 24h</span>
                      </div>
                    </div>

                    {/* Status Banners */}
                    {formStatus.type === 'success' && (
                      <div className="p-space-md rounded-lg bg-surface border border-secondary/30 text-on-surface text-body-sm font-body-sm space-y-1 animate-in fade-in duration-300">
                        <div className="flex items-center gap-space-xs text-secondary font-medium">
                          <span className="material-symbols-outlined text-[18px]">check_circle</span>
                          <span>{formStatus.message}</span>
                        </div>
                        {formStatus.note && (
                          <p className="text-on-surface-variant font-code-sm text-code-sm pl-6">
                            {formStatus.note}
                          </p>
                        )}
                      </div>
                    )}

                    {formStatus.type === 'error' && (
                      <div className="p-space-md rounded-lg bg-surface border border-error/40 text-error text-body-sm font-body-sm flex items-center gap-space-xs animate-in fade-in duration-300">
                        <span className="material-symbols-outlined text-[18px]">error</span>
                        <span>{formStatus.message}</span>
                      </div>
                    )}

                    {/* Transparent Integration Disclaimer */}
                    <div className="p-space-md rounded-lg bg-surface/70 mt-space-md border border-outline-variant/30">
                      <div className="flex items-start gap-space-sm">
                        <span className="material-symbols-outlined text-outline text-[18px] mt-0.5">info</span>
                        <p className="font-code-sm text-code-sm text-on-surface-variant leading-relaxed">
                          Note: This form connects directly to the backend Express API (<code className="text-secondary bg-surface px-1 py-0.5 rounded">POST /api/contact</code>). Submissions are safely logged and will forward via SMTP or Resend once email credentials are provided.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* Security / PGP Card */}
              <div className="mt-space-lg p-space-lg rounded-xl bg-surface-container-high/60 flex items-center justify-between border border-outline-variant/30">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[22px]">fingerprint</span>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface font-medium">Public Key &amp; Secure Channels</p>
                    <p className="font-code-sm text-code-sm text-on-surface-variant">PGP Fingerprint: {profile.pgpKey}</p>
                  </div>
                </div>
                <span className="font-code-sm text-code-sm px-2 py-1 rounded bg-surface text-on-surface-variant border border-outline-variant/30">
                  v4.19
                </span>
              </div>
            </div>

            {/* Sidebar Column (5 cols) */}
            <div className="lg:col-span-5 space-y-space-lg">
              {/* Status Badge */}
              <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm border border-outline-variant/30">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                  </span>
                  <div className="flex-1">
                    <span className="font-code-sm text-code-sm uppercase tracking-wider text-secondary font-semibold block leading-none">
                      Current Status
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface font-medium mt-1">
                      Junior Developer Intern @ Octatribe • Seeking ML/AI &amp; Dev Roles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Primary Inbox with Copy */}
              <div className="bg-surface-container-low rounded-xl p-space-lg md:p-space-xl shadow-sm border border-outline-variant/30">
                <div className="flex items-center justify-between mb-space-md pb-space-xs border-b border-surface-variant">
                  <span className="font-code-sm text-code-sm uppercase tracking-widest text-on-surface-variant">
                    Primary Inbox
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[18px]">alternate_email</span>
                </div>
                <div className="space-y-space-sm">
                  <div className="p-space-md rounded-lg bg-surface flex items-center justify-between gap-space-sm border border-outline-variant/30">
                    <div className="min-w-0">
                      <span className="font-code-sm text-code-sm text-on-surface-variant block uppercase tracking-wider">
                        Direct Address
                      </span>
                      <span className="font-code-md text-code-md text-on-surface font-medium truncate block" id="emailText">
                        {profile.inbox}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      title="Copy address to clipboard"
                      className="flex items-center justify-center p-2 rounded bg-surface-container hover:bg-secondary hover:text-on-secondary transition-colors duration-200 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">content_copy</span>
                    </button>
                  </div>
                  {copied && (
                    <p className="font-code-sm text-code-sm text-secondary animate-in fade-in duration-200">
                      ✓ Copied to clipboard
                    </p>
                  )}
                </div>
              </div>

              {/* Verified Channels */}
              <div className="bg-surface-container-low rounded-xl p-space-lg md:p-space-xl shadow-sm border border-outline-variant/30">
                <div className="flex items-center justify-between mb-space-md pb-space-xs border-b border-surface-variant">
                  <span className="font-code-sm text-code-sm uppercase tracking-widest text-on-surface-variant">
                    Verified Channels
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px]">verified</span>
                </div>
                <div className="space-y-space-sm">
                  <a
                    className="group flex items-center justify-between p-space-md rounded-lg bg-surface hover:bg-surface-container transition-colors duration-200 border border-outline-variant/30"
                    href={profile.social.github}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-colors duration-200">
                        <span className="material-symbols-outlined text-[18px]">code</span>
                      </div>
                      <div>
                        <span className="font-label-md text-label-md text-on-surface font-medium block">GitHub</span>
                        <span className="font-code-sm text-code-sm text-on-surface-variant">{profile.social.github}</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[18px] text-outline group-hover:text-secondary group-hover:translate-x-0.5 transition-all duration-200">
                      north_east
                    </span>
                  </a>

                  <a
                    className="group flex items-center justify-between p-space-md rounded-lg bg-surface hover:bg-surface-container transition-colors duration-200 border border-outline-variant/30"
                    href={profile.social.phone}
                  >
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-colors duration-200">
                        <span className="material-symbols-outlined text-[18px]">call</span>
                      </div>
                      <div>
                        <span className="font-label-md text-label-md text-on-surface font-medium block">Direct Phone</span>
                        <span className="font-code-sm text-code-sm text-on-surface-variant">{profile.phone}</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[18px] text-outline group-hover:text-secondary group-hover:translate-x-0.5 transition-all duration-200">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              {/* Offline Dossier Card */}
              <div className="bg-surface-container-high rounded-xl p-space-lg md:p-space-xl shadow-sm relative overflow-hidden border border-outline-variant/30">
                <div className="relative z-10 space-y-space-md">
                  <div>
                    <span className="font-code-sm text-code-sm uppercase tracking-wider text-secondary font-medium block">
                      Curriculum Vitae
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">
                      Want to review my background offline?
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                      Download my complete resume including BIM undergraduate coursework, junior developer internship at Octatribe, and certifications.
                    </p>
                  </div>
                  <div className="pt-space-xs space-y-2">
                    <a
                      href={profile.resume.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full px-space-md py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors duration-200 shadow-sm group cursor-pointer"
                    >
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                        <span>View Resume (PDF)</span>
                      </div>
                      <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </a>
                    <a
                      href={profile.resume.downloadUrl}
                      download={profile.resume.fileName}
                      className="inline-flex items-center justify-between w-full px-space-md py-2.5 rounded-lg bg-surface-container-high border border-outline-variant/30 text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors duration-200 shadow-sm group cursor-pointer"
                    >
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-[20px]">download</span>
                        <span>Download Official Resume (PDF)</span>
                      </div>
                      <span className="font-code-sm text-code-sm opacity-75">PDF · {profile.resume.fileSize}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Timezone & Clock */}
              <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm border border-outline-variant/30 space-y-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-code-sm text-code-sm uppercase tracking-wider text-on-surface-variant">
                    Local Clock
                  </span>
                  <span className="font-code-sm text-code-sm text-secondary font-medium">
                    {currentTime || 'NPT (UTC+5:45)'}
                  </span>
                </div>
                <div className="flex items-center gap-space-sm text-on-surface">
                  <span className="material-symbols-outlined text-outline text-[20px]">location_on</span>
                  <span className="font-body-md text-body-md font-medium">{profile.location}</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Coordinated across Nepal (NPT) and remote operational windows.
                </p>
              </div>
            </div>
          </div>

          {/* Three Pillars Footer Strip */}
          <div className="mt-space-2xl pt-space-xl border-t border-surface-variant">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              <div className="space-y-space-xs">
                <span className="font-code-sm text-code-sm uppercase tracking-wider text-on-surface-variant block">
                  01 / Collaboration
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">Engineering &amp; Systems</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Full-stack product features, database schema design, typed TypeScript architectures, and accessible UI frameworks.
                </p>
              </div>
              <div className="space-y-space-xs">
                <span className="font-code-sm text-code-sm uppercase tracking-wider text-on-surface-variant block">
                  02 / Advisory
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">Code Audit &amp; Prototyping</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Independent evaluations of web performance, user journey ergonomics, and architectural consistency.
                </p>
              </div>
              <div className="space-y-space-xs">
                <span className="font-code-sm text-code-sm uppercase tracking-wider text-on-surface-variant block">
                  03 / Mentorship
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">Open Knowledge</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Always open to conversations with fellow students, junior engineers, and community builders.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
