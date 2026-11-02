import { useEffect } from 'react';

interface SeoMetaProps {
  title: string;
  description?: string;
}

export const SeoMeta: React.FC<SeoMetaProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = `${title} — Sana Hasan`;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title, description]);

  return null;
};
