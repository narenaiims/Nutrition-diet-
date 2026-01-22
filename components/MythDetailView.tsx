
import React, { useState } from 'react';
import { MythFact, Language } from '../types';
import Breadcrumbs from './Breadcrumbs';
import SupervisorBadge from './SupervisorBadge';

interface MythDetailViewProps {
  myth: MythFact;
  lang: Language;
  onBack: () => void;
}

const MythDetailView: React.FC<MythDetailViewProps> = ({ myth, lang, onBack }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    science: true,
    action: true
  });

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const labels = {
    EN: {
      category: "Cancer Awareness",
      myth: "The Common Myth",
      fact: "The Medical Fact",
      science: "The Scientific Evidence",
      action: "Patient Action Step",
    },
    HI: {
      category: "कैंसर जागरूकता",
      myth: "आम भ्रम (गलत सोच)",
      fact: "चिकित्सा सच",
      science: "वैज्ञानिक प्रमाण",
      action: "मरीज के लिए सलाह",
    }
  }[lang];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Breadcrumbs 
        lang={lang} 
        category={labels.category} 
        title={myth.category} 
        onHome={onBack} 
      />

      <SupervisorBadge lang={lang} />

      <header className="flex flex-col md:flex-row md:items-center gap-8 mb-16">
        <div className="w-24 h-24 rounded-4xl bg-amber-50 flex items-center justify-center text-5xl shadow-xl shadow-amber-100 border-4 border-white transform hover:rotate-6 transition-transform" aria-hidden="true">
          {myth.icon}
        </div>
        <div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-2 leading-none">{myth.category}</h1>
          <p className="text-amber-600 font-bold uppercase tracking-widest text-xs opacity-80">{labels.category}</p>
        </div>
      </header>

      <article className="space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="bg-rose-50 border-2 border-rose-100 p-10 rounded-5xl shadow-sm transform hover:-translate-y-1 transition-all">
            <h2 className="text-xs font-black uppercase tracking-widest text-rose-700 mb-8 flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">❌</span> {labels.myth}
            </h2>
            <p className="text-rose-950 text-2xl font-black italic leading-tight">
              "{myth.myth}"
            </p>
          </section>

          <section className="bg-emerald-50 border-2 border-emerald-100 p-10 rounded-5xl shadow-sm transform hover:-translate-y-1 transition-all">
            <h2 className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-8 flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">✅</span> {labels.fact}
            </h2>
            <p className="text-emerald-950 text-2xl font-black leading-tight">
              {myth.fact}
            </p>
          </section>
        </div>

        <section className="glass-card rounded-5xl overflow-hidden shadow-sm section-transition hover:shadow-md">
          <button 
            onClick={() => toggleSection('science')}
            className="w-full px-10 py-8 flex items-center justify-between text-left group"
          >
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-amber-600 transition-colors">{labels.science}</h2>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transform transition-all ${openSections.science ? 'rotate-180 bg-amber-50 text-amber-600' : 'bg-slate-50'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </button>
          {openSections.science && (
            <div className="px-10 pb-10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 text-slate-50 text-8xl font-black opacity-20 pointer-events-none" aria-hidden="true">SCI</div>
               <p className="text-slate-700 text-xl font-bold leading-relaxed relative z-10">
                {myth.science}
              </p>
            </div>
          )}
        </section>

        <section className="bg-slate-900 text-white rounded-5xl shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent pointer-events-none"></div>
          
          <button 
            onClick={() => toggleSection('action')}
            className="w-full px-10 py-8 flex items-center justify-between text-left group z-10 relative"
          >
            <h2 className="text-3xl font-black flex items-center gap-5">
               <span className="text-amber-500 text-5xl" aria-hidden="true">💡</span> {labels.action}
            </h2>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transform transition-all bg-white/10 ${openSections.action ? 'rotate-180' : ''}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </button>

          {openSections.action && (
            <div className="px-10 pb-10 relative z-10">
              <p className="text-slate-200 font-bold text-xl md:text-2xl leading-relaxed mb-10">
                {myth.action}
              </p>
              <div className="pt-10 border-t border-white/10">
                <p className="text-slate-400 font-medium italic text-base">
                  {lang === 'EN' ? "Follow the science, trust the experts." : "विज्ञान का पालन करें, विशेषज्ञों पर भरोसा करें।"}
                </p>
              </div>
            </div>
          )}
        </section>
      </article>
    </div>
  );
};

export default MythDetailView;
