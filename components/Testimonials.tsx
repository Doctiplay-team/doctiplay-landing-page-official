
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 relative overflow-hidden bg-slate-950/20">
      <div className="px-6 mx-auto max-w-7xl relative z-10 flex flex-col items-center">
        <div className="reveal flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-sm mb-10 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
            <span className="text-[12px] font-display font-black text-primary tracking-[0.3em] uppercase">{t.testimonials.badge}</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-black text-white tracking-tighter max-w-5xl leading-none">
            {t.testimonials.title}
          </h2>

          <div className="mt-16 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40"></div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"></div>
    </section>
  );
};

export default Testimonials;
