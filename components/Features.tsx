import React, { useState } from 'react';
import { Activity, FileSearch, Mic, BarChart3, CheckCircle2, Zap, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const features = [
    {
      icon: Activity,
      color: 'text-cyan-950',
      bg: 'bg-cyan-400',
      glow: 'shadow-[0_0_30px_rgba(34,211,238,0.4)]',
      title: t.features.f1_title,
      items: t.features.f1_items,
      footer_code: "PHYSIO_ENGINE_V1",
      delay: '0s'
    },
    {
      icon: FileSearch,
      color: 'text-amber-950',
      bg: 'bg-amber-400',
      glow: 'shadow-[0_0_30px_rgba(251,191,36,0.4)]',
      title: t.features.f2_title,
      items: t.features.f2_items,
      footer_code: "DIAGNOSTIC_CORE",
      delay: '0.1s'
    },
    {
      icon: Mic,
      color: 'text-sky-950',
      bg: 'bg-sky-400',
      glow: 'shadow-[0_0_30px_rgba(56,189,248,0.4)]',
      title: t.features.f3_title,
      items: t.features.f3_items,
      footer_code: "VOICE_RECOGNITION",
      delay: '0.2s'
    },
    {
      icon: BarChart3,
      color: 'text-purple-950',
      bg: 'bg-purple-400',
      glow: 'shadow-[0_0_30px_rgba(192,132,252,0.4)]',
      title: t.features.f4_title,
      items: t.features.f4_items,
      footer_code: "ANALYSIS_CORE_V2",
      delay: '0.3s'
    }
  ];

  return (
    <section id="expertise" className="py-20 sm:py-32 relative overflow-hidden bg-slate-950">
      <div className="px-6 mx-auto max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24 reveal">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/5 bg-white/5 mb-6 sm:mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-[10px] sm:text-xs font-display font-bold tracking-[0.2em] sm:tracking-[0.3em] text-slate-300 uppercase">{t.features_extended.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-black text-white mb-6 sm:mb-8 leading-tight">{t.features_extended.main_title}</h2>
          <p className="text-slate-300 max-w-3xl mx-auto font-medium text-lg sm:text-xl leading-relaxed">{t.features_extended.main_desc}</p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const isExpanded = !!expandedCards[idx];

            return (
              <div
                key={idx}
                onClick={() => toggleCard(idx)}
                /* Removed 'reveal' class to prevent React re-render from resetting animation state */
                /* Removed inline 'height', added 'min-h-[320px]' */
                className={`group relative p-8 rounded-[2.5rem] border border-slate-800 bg-slate-900/50 hover:bg-slate-900/80 hover:border-slate-700 transition-all duration-500 flex flex-col overflow-hidden cursor-pointer min-h-[320px] ${isExpanded ? 'bg-slate-900/90 border-slate-600' : ''}`}
                style={{
                  transitionDelay: feature.delay
                }}
              >
                {/* Top Accent Gradient - subtle inside border effect */}
                <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 pointer-events-none"></div>

                {/* Icon */}
                <div className={`w-16 h-16 mb-8 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center ${feature.glow} group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="w-8 h-8" strokeWidth={2.5} />
                </div>

                {/* Title */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-display font-black text-white uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-primary' : ''}`} />
                </div>

                {/* Checklist - Hidden by default, shown on expansion */}
                <div className={`space-y-4 mb-4 flex-grow transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'opacity-100 max-h-[500px] mt-4' : 'opacity-0 max-h-0'}`}>
                  {feature.items && feature.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 min-w-[20px]">
                        <div className="w-5 h-5 rounded-full border border-slate-700 bg-slate-800/50 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                          <CheckCircle2 className="w-3 h-3 text-primary" />
                        </div>
                      </div>
                      <span className="text-slate-300 font-bold text-sm leading-tight">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Footer Code */}
                <div className="mt-auto pt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-slate-600 uppercase tracking-wider group-hover:text-primary/70 transition-colors">
                    {feature.footer_code}
                  </span>
                  <Activity className="w-4 h-4 text-slate-700 group-hover:text-primary/50 transition-colors" />
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[400px] bg-primary/5 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none"></div>
    </section>
  );
};

export default Features;