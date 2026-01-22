"use client";

import React, { useState } from 'react';
import { TreatmentNutrition, Language, RelatedLink } from '../types';
import Breadcrumbs from './Breadcrumbs';
import RelatedSection from './RelatedSection';
import SupervisorBadge from './SupervisorBadge';

interface TreatmentDetailViewProps {
  treatment: TreatmentNutrition;
  lang: Language;
  onBack: () => void;
  onNavigate: (type: RelatedLink['type'], slug?: string) => void;
}

const TreatmentDetailView: React.FC<TreatmentDetailViewProps> = ({ treatment, lang, onBack, onNavigate }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    explanation: true,
    goals: true,
    nutrition: true,
    safety: true,
    texture: true
  });

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const labels = {
    EN: {
      category: "Nutrition by Treatment",
      back: "Back",
      goals: "Nutrition Goals",
      prefer: "Foods to Prefer",
      avoid: "Foods to Avoid",
      hydration: "Hydration Guidelines",
      redFlags: "Warning Signs (Red Flags)",
      explanation: "How Treatment Affects Nutrition",
      caregiverNote: "Preferred & Restricted Foods",
      texture: "Texture & Consistency Advice"
    },
    HI: {
      category: "उपचार द्वारा पोषण",
      back: "पीछे",
      goals: "पोषण के लक्ष्य",
      prefer: "पसंदीदा भोजन",
      avoid: "इनसे बचें",
      hydration: "हाइड्रेशन दिशानिर्देश",
      redFlags: "खतरे के संकेत (Red Flags)",
      explanation: "इलाज का पोषण पर असर",
      caregiverNote: "भोजन के चुनाव",
      texture: "भोजन की बनावट (Texture) संबंधी सलाह"
    }
  }[lang];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Breadcrumbs 
        lang={lang} 
        category={labels.category} 
        title={treatment.title} 
        onHome={onBack} 
      />

      <SupervisorBadge lang={lang} />

      <header className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mb-16">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2rem] bg-blue-600 flex items-center justify-center text-4xl md:text-5xl shadow-xl shadow-blue-200 border-4 border-white transform hover:rotate-3 transition-transform" aria-hidden="true">
          {treatment.icon}
        </div>
        <div>
          <h1 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight mb-2 leading-tight">{treatment.title}</h1>
          <p className="text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-xs opacity-80">Clinical Nutritional Protocol</p>
        </div>
      </header>

      <div className="space-y-6 md:space-y-8">
        {/* Explanation Section */}
        <section className="glass-card rounded-4xl md:rounded-5xl overflow-hidden shadow-sm section-transition hover:shadow-md">
          <button 
            onClick={() => toggleSection('explanation')}
            className="w-full px-6 py-6 md:px-10 md:py-8 flex items-center justify-between text-left group"
            aria-expanded={openSections.explanation}
          >
            <h2 className="text-lg md:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{labels.explanation}</h2>
            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-50 flex items-center justify-center transform transition-transform duration-500 ${openSections.explanation ? 'rotate-180 bg-blue-50 text-blue-600' : ''}`}>
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </button>
          {openSections.explanation && (
            <div className="px-6 pb-8 md:px-10 md:pb-10">
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-bold">{treatment.explanation}</p>
            </div>
          )}
        </section>

        {/* Goals Section */}
        <section className="glass-card rounded-4xl md:rounded-5xl overflow-hidden shadow-sm section-transition hover:shadow-md">
          <button 
            onClick={() => toggleSection('goals')}
            className="w-full px-6 py-6 md:px-10 md:py-8 flex items-center justify-between text-left group"
            aria-expanded={openSections.goals}
          >
            <h2 className="text-lg md:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{labels.goals}</h2>
            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-50 flex items-center justify-center transform transition-transform duration-500 ${openSections.goals ? 'rotate-180 bg-blue-50 text-blue-600' : ''}`}>
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </button>
          {openSections.goals && (
            <div className="px-6 pb-8 md:px-10 md:pb-10">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {treatment.goals.map((goal, i) => (
                  <li key={i} className="flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-2xl md:rounded-3xl bg-blue-50/50 border border-blue-100 text-slate-800 font-black text-sm">
                    <span className="text-blue-600 text-xl" aria-hidden="true">🎯</span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Nutrition Guide */}
        <section className="glass-card rounded-4xl md:rounded-5xl overflow-hidden shadow-sm section-transition hover:shadow-md">
          <button 
            onClick={() => toggleSection('nutrition')}
            className="w-full px-6 py-6 md:px-10 md:py-8 flex items-center justify-between text-left group"
            aria-expanded={openSections.nutrition}
          >
            <h2 className="text-lg md:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{labels.caregiverNote}</h2>
            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-50 flex items-center justify-center transform transition-transform duration-500 ${openSections.nutrition ? 'rotate-180 bg-blue-50 text-blue-600' : ''}`}>
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </button>
          {openSections.nutrition && (
            <div className="px-6 pb-8 md:px-10 md:pb-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
              <div className="p-6 md:p-8 rounded-3xl md:rounded-4xl bg-green-50/50 border border-green-100">
                <h3 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-green-700 mb-4 md:mb-6 flex items-center gap-2">
                  <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-200 flex items-center justify-center text-[10px]">✓</span>
                  {labels.prefer}
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {treatment.eat.map((food, i) => (
                    <li key={i} className="flex items-start gap-3 md:gap-4 text-slate-700 font-bold text-sm md:text-base">
                      <span className="text-green-500 mt-1" aria-hidden="true">•</span> {food}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 md:p-8 rounded-3xl md:rounded-4xl bg-rose-50/50 border border-rose-100">
                <h3 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-rose-700 mb-4 md:mb-6 flex items-center gap-2">
                  <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-rose-200 flex items-center justify-center text-[10px]">✕</span>
                  {labels.avoid}
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {treatment.avoid.map((food, i) => (
                    <li key={i} className="flex items-start gap-3 md:gap-4 text-slate-700 font-bold text-sm md:text-base">
                      <span className="text-rose-400 mt-1" aria-hidden="true">•</span> {food}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* Texture Section */}
        {treatment.textureAdvice && (
          <section className="glass-card rounded-4xl md:rounded-5xl overflow-hidden shadow-sm section-transition hover:shadow-md">
            <button 
              onClick={() => toggleSection('texture')}
              className="w-full px-6 py-6 md:px-10 md:py-8 flex items-center justify-between text-left group"
              aria-expanded={openSections.texture}
            >
              <h2 className="text-lg md:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{labels.texture}</h2>
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-50 flex items-center justify-center transform transition-transform duration-500 ${openSections.texture ? 'rotate-180 bg-blue-50 text-blue-600' : ''}`}>
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </button>
            {openSections.texture && (
              <div className="px-6 pb-8 md:px-10 md:pb-10">
                <div className="p-5 md:p-6 bg-slate-50 border border-slate-100 rounded-3xl flex items-start gap-3 md:gap-4">
                   <span className="text-2xl md:text-3xl">🥣</span>
                   <p className="text-slate-700 text-base md:text-lg font-bold leading-relaxed">{treatment.textureAdvice}</p>
                </div>
              </div>
            )}
          </section>
        )}

        {/* Hydration & Safety */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <section className="bg-blue-600 text-white p-8 md:p-10 rounded-4xl md:rounded-5xl shadow-2xl shadow-blue-200 transform hover:-translate-y-1 transition-transform">
            <h2 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-blue-200 mb-4 md:mb-6 flex items-center gap-2">
              <span className="text-xl md:text-2xl" aria-hidden="true">💧</span> {labels.hydration}
            </h2>
            <p className="text-lg md:text-2xl font-black leading-snug">{treatment.hydration}</p>
          </section>
          <section className="bg-rose-50 border-2 border-rose-100 p-8 md:p-10 rounded-4xl md:rounded-5xl transform hover:-translate-y-1 transition-transform relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-rose-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
            </div>
            <h2 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-rose-800 mb-6 md:mb-8 flex items-center gap-2">
              <span className="text-xl md:text-2xl" aria-hidden="true">⚠️</span> {labels.redFlags}
            </h2>
            <ul className="space-y-3 md:space-y-4">
              {treatment.redFlags.map((flag, i) => (
                <li key={i} className="flex items-start gap-3 md:gap-4 text-rose-950 font-black text-sm md:text-base">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 mt-1.5 shrink-0" aria-hidden="true"></span>
                  {flag}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <RelatedSection 
        links={treatment.relatedLinks || []} 
        lang={lang} 
        onNavigate={onNavigate} 
      />
    </div>
  );
};

export default TreatmentDetailView;