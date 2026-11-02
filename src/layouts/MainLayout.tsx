import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ResumeModal } from '../components/ResumeModal';

export const MainLayout: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-surface text-on-surface">
      <Header onOpenResume={() => setResumeOpen(true)} />
      <main className="w-full pt-20 bg-surface flex-grow min-h-[calc(100vh-5rem)]">
        <Outlet context={{ openResume: () => setResumeOpen(true) }} />
      </main>
      <Footer />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
};
