"use client";

import React from 'react';
import { Language, NavCard, ViewType } from '../types';
import Breadcrumbs from './Breadcrumbs';
import SupervisorBadge from './SupervisorBadge';

interface CategoryPageViewProps {
  lang: Language;
  card: NavCard;
  items: { id: string; slug: string; title: string; icon: string; description?: string }[];
  detailType: ViewType;
  onBack: () => void;
  onItemSelect: (slug: string) => void;
}

const CategoryPageView: React.FC<CategoryPageViewProps> = ({ lang, card, items, detailType, onBack, onItemSelect }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Breadcrumbs 
        lang={lang} 
        category={lang === 'EN' ? "Library" : "लाइब्रेरी"} 
        title={card.title} 
        onHome={onBack} 
      />

      <SupervisorBadge lang={lang} />

      <header className="mb-16">
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
           <div className={`w-20 h-20 rounded-4xl ${card.bgColor} flex items-center justify-center text-5xl shadow-xl shadow-blue-100 border-4 border-white`}>
             {card.icon}
           </div>
           <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight leading-none">{card.title}</h1>
        </div>
        <p className="text-slate-500 text-xl md:text-2xl font-medium max-w-3xl leading-relaxed">
          {card.description}
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onItemSelect(item.slug)}
            className="group glass-card p-10 rounded-5xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all text-left flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full translate-x-1/2 -translate-y-1/2 opacity-20 group-hover:scale-150 transition-transform duration-1000" aria-hidden="true"></div>
            
            <div className="text-5xl mb-10 group-hover:scale-110 transition-transform duration-500 origin-left drop-shadow-sm">{item.icon}</div>
            
            <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">{item.title}</h3>
            
            {item.description && (
              <p className="text-slate-500 text-base font-medium leading-relaxed mb-10 opacity-80 flex-grow">{item.description}</p>
            )}
            
            <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-blue-600 transition-all">
               <span>Open Guide</span>
               <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                 <svg className="w-5 h-5 transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7" /></svg>
               </div>
            </div>
          </button>
        ))}
      </div>

      {items.length === 0 && (
        <div className="text-center py-24 glass-card rounded-5xl border-2 border-dashed border-slate-200">
           <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner">📚</div>
           <p className="text-slate-400 font-black text-xl tracking-tight">Content coming soon for this category.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPageView;