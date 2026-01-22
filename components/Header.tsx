
"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DOCTOR_INFO } from '../lib/constants';
import Link from 'next/link';

const Header: React.FC = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <header role="banner" className="sticky top-0 z-[100] bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <nav role="navigation" aria-label="Main navigation" className="h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="bg-blue-600 text-white w-9 h-9 md:w-11 md:h-11 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg rotate-3 group hover:rotate-0 transition-transform">
              NR
            </div>
            <div className="block">
              <p className="font-bold text-slate-900 text-xs md:text-base tracking-tight leading-none mb-1">{DOCTOR_INFO.name}</p>
              <p className="text-[9px] md:text-[10px] text-blue-600 font-bold uppercase tracking-widest opacity-80">Oncology Expert</p>
            </div>
          </Link>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors">{t.nav.home}</Link>
              <Link href="/#explore" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors">{t.nav.nutrition}</Link>
              <Link href="/#contact" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors">{t.nav.contact}</Link>
            </div>
            
            <button 
              onClick={() => setLang(lang === 'EN' ? 'HI' : 'EN')}
              aria-label={lang === 'EN' ? "Switch to Hindi" : "अंग्रेजी में बदलें"}
              className="bg-white border border-slate-200 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold shadow-sm hover:shadow-md transition-all flex items-center gap-2 group shrink-0"
            >
              <span className={lang === 'EN' ? 'text-blue-600' : 'text-slate-400'}>EN</span>
              <div className="w-[1px] h-3 bg-slate-200 group-hover:bg-blue-200 transition-colors" aria-hidden="true"></div>
              <span className={lang === 'HI' ? 'text-blue-600' : 'text-slate-400'}>HI</span>
            </button>
          </div>
        </nav>
        
        <nav className="md:hidden flex items-center gap-8 overflow-x-auto pb-3 no-scrollbar border-t border-slate-100 pt-3" aria-label="Mobile quick links">
          <Link href="/" className="text-[11px] font-black uppercase tracking-widest text-slate-500 shrink-0 px-1">{t.nav.home}</Link>
          <Link href="/#explore" className="text-[11px] font-black uppercase tracking-widest text-slate-500 shrink-0 px-1">{t.nav.nutrition}</Link>
          <Link href="/#contact" className="text-[11px] font-black uppercase tracking-widest text-slate-500 shrink-0 px-1">{t.nav.contact}</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
