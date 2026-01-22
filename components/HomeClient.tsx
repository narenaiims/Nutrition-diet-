"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import NavCardComponent from './NavCard';
import { CONTENT, NAV_CARDS, DOCTOR_INFO } from '../lib/constants';
import { useRouter } from 'next/navigation';

export default function HomeClient() {
  const { lang } = useLanguage();
  const router = useRouter();
  const pageText = CONTENT[lang] || CONTENT['EN'];
  const navCards = NAV_CARDS[lang] || NAV_CARDS['EN'];

  const handleCardClick = (slug: string) => {
    if (slug === 'ai-nutrition-assistant') {
      router.push('/ai-assistant');
    } else {
      router.push(`/${slug}`);
    }
  };

  return (
    <>
      <section id="home" className="relative overflow-hidden px-6 pt-12 md:pt-24 pb-16 md:pb-24 bg-white" aria-labelledby="hero-heading">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <article className="lg:col-span-7 text-left">
            <header>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-8 border border-blue-100 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                Supportive Oncology Care
              </div>
              
              <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                {pageText.title}
              </h1>
            </header>
            
            <p className="text-slate-600 text-lg md:text-xl mb-10 max-w-2xl font-medium leading-relaxed opacity-90">
              {pageText.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => router.push('/ai-assistant')}
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl shadow-blue-200 hover:bg-blue-700 hover:translate-y-[-2px] transition-all active:scale-95 text-base group"
              >
                {lang === 'EN' ? "Talk to Onco-Assistant" : "ऑनको-सहायक से बात करें"}
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              <a href="#explore" className="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-800 px-8 py-4 rounded-2xl font-bold shadow-sm hover:shadow-md hover:bg-slate-50 hover:translate-y-[-2px] transition-all active:scale-95 text-base">
                {lang === 'EN' ? "Explore Library" : "लाइब्रेरी देखें"}
              </a>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-[2rem] bg-slate-50 border border-slate-100 max-w-md shadow-sm">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-white">
                  <img 
                    src="https://unavatar.io/twitter/drn_dr" 
                    alt={DOCTOR_INFO.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm mb-0">{DOCTOR_INFO.name}</p>
                <p className="text-blue-600 text-[10px] font-bold uppercase tracking-wider leading-tight">Senior Oncology Team</p>
              </div>
            </div>
          </article>

          <div className="lg:col-span-5 relative hidden lg:flex justify-center items-center" aria-hidden="true">
             <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
               <path fill="#E0F2FE" d="M45.5,-76.4C58.3,-69.1,67.6,-56.3,75.4,-42.6C83.2,-28.9,89.5,-14.5,89.3,-0.1C89,14.3,82.3,28.6,73.4,41.2C64.5,53.8,53.4,64.7,40.5,72.4C27.6,80.1,13.8,84.6,-0.3,85.2C-14.4,85.7,-28.8,82.4,-41.8,75C-54.7,67.5,-66.3,55.8,-74.6,42.4C-82.9,29,-87.8,14.5,-87.6,0.1C-87.4,-14.2,-82.1,-28.5,-73.4,-41.2C-64.8,-53.8,-52.8,-64.8,-39.6,-71.8C-26.4,-78.7,-13.2,-81.7,0.7,-82.9C14.7,-84.1,29.3,-83.6,45.5,-76.4Z" transform="translate(100 100)" />
               <circle cx="100" cy="100" r="40" fill="white" />
               <path d="M100 80V120M80 100H120" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" />
             </svg>
          </div>
        </div>
      </section>

      <section id="explore" className="max-w-7xl mx-auto px-6 py-24 bg-white scroll-mt-20">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            {lang === 'EN' ? "Supportive Care Library" : "सहायक देखभाल लाइब्रेरी"}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            {lang === 'EN' ? "Select a category below to explore specific guidance for your journey." : "अपनी यात्रा के लिए विशिष्ट मार्गदर्शन देखने के लिए नीचे एक श्रेणी चुनें।"}
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {navCards.map((card) => (
            <NavCardComponent key={card.id} card={card} onClick={handleCardClick} />
          ))}
        </div>
      </section>
    </>
  );
}
