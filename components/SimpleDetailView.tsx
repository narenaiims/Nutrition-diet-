"use client";

import React from 'react';
import { SimpleDetail, Language, RelatedLink } from '../types';
import Breadcrumbs from './Breadcrumbs';
import RelatedSection from './RelatedSection';
import SupervisorBadge from './SupervisorBadge';

interface SimpleDetailViewProps {
  data: SimpleDetail;
  lang: Language;
  onBack: () => void;
  onNavigate: (type: RelatedLink['type'], slug?: string) => void;
}

const SimpleDetailView: React.FC<SimpleDetailViewProps> = ({ data, lang, onBack, onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Breadcrumbs 
        lang={lang} 
        category={lang === 'EN' ? "Care Protocol" : "देखभाल नियम"} 
        title={data.title} 
        onHome={onBack} 
      />

      <SupervisorBadge lang={lang} />

      <header className="mb-16">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-4xl bg-slate-100 flex items-center justify-center text-4xl md:text-5xl mb-8 shadow-inner border-4 border-white transform hover:scale-105 transition-transform">
          {data.icon}
        </div>
        <h1 className="text-3xl md:text-7xl font-black text-slate-900 tracking-tight mb-6 leading-tight">{data.title}</h1>
        <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-3xl italic">{data.description}</p>
      </header>

      <div className="space-y-8 md:space-y-10">
        {data.sections.map((section, idx) => (
          <section key={idx} className="glass-card p-6 md:p-14 rounded-4xl md:rounded-5xl shadow-sm hover:shadow-md section-transition relative overflow-hidden flex flex-col">
            {/* Background decorative number - repositioned to avoid text conflict */}
            <div className="absolute bottom-0 right-0 p-4 text-blue-100 text-[8rem] md:text-[12rem] font-black opacity-[0.02] select-none pointer-events-none translate-y-1/4 translate-x-1/4" aria-hidden="true">
              {idx + 1}
            </div>
            
            <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-6 md:mb-8 relative z-10 border-b border-slate-100 pb-4 max-w-[90%]">
              {section.heading}
            </h2>
            
            <div className="relative z-10">
              {Array.isArray(section.content) ? (
                <ul className="space-y-4 md:space-y-6">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 md:gap-6 text-slate-700 font-bold text-base md:text-xl leading-relaxed">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-2 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-700 font-bold text-base md:text-xl leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              )}
            </div>
          </section>
        ))}
      </div>

      <RelatedSection 
        links={data.relatedLinks || []} 
        lang={lang} 
        onNavigate={onNavigate} 
      />
    </div>
  );
};

export default SimpleDetailView;