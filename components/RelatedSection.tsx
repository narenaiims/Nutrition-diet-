"use client";

import React from 'react';
import { RelatedLink, Language } from '../types';

interface RelatedSectionProps {
  links: RelatedLink[];
  lang: Language;
  onNavigate: (type: RelatedLink['type'], slug?: string) => void;
}

const RelatedSection: React.FC<RelatedSectionProps> = ({ links, lang, onNavigate }) => {
  if (!links || links.length === 0) return null;

  const heading = lang === 'EN' ? "Explore Related Topics" : "संबंधित विषय देखें";

  return (
    <section className="mt-12">
      <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
        {heading}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((link, i) => (
          <button
            key={i}
            onClick={() => onNavigate(link.type, link.slug)}
            className="flex items-center justify-between p-5 bg-white border border-slate-100 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all group text-left"
          >
            <span className="font-bold text-slate-800 text-sm">{link.label}</span>
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default RelatedSection;