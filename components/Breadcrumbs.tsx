"use client";

import React from 'react';
import { Language } from '../types';

interface BreadcrumbsProps {
  lang: Language;
  category: string;
  title: string;
  onHome: () => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ lang, category, title, onHome }) => {
  const homeLabel = lang === 'EN' ? 'Home' : 'मुख्य पृष्ठ';
  
  return (
    <nav className="flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 mb-6 overflow-x-auto whitespace-nowrap pb-2 no-scrollbar">
      <button 
        onClick={onHome}
        className="hover:text-blue-600 transition-colors flex items-center gap-1"
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        {homeLabel}
      </button>
      <span className="opacity-30">/</span>
      <span className="opacity-60">{category}</span>
      <span className="opacity-30">/</span>
      <span className="text-slate-900">{title}</span>
    </nav>
  );
};

export default Breadcrumbs;