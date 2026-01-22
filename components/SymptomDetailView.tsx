import React, { useState } from 'react';
import { ConditionNutrition, Language, RelatedLink } from '../types';
import { DOCTOR_INFO } from '../constants';
import Breadcrumbs from './Breadcrumbs';
import RelatedSection from './RelatedSection';
import SupervisorBadge from './SupervisorBadge';

interface SymptomDetailViewProps {
  condition: ConditionNutrition;
  lang: Language;
  onBack: () => void;
  onNavigate: (type: RelatedLink['type'], slug?: string) => void;
}

const SymptomDetailView: React.FC<SymptomDetailViewProps> = ({ condition, lang, onBack, onNavigate }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    happening: true,
    strategies: true,
    caregiver: true
  });

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const labels = {
    EN: {
      category: "Symptom Management",
      back: "Back",
      happening: "Why is this happening?",
      strategies: "Practical Strategies",
      indianFoods: "Indian Food Examples",
      dontForce: "Critical Advice",
      callDoctor: "Emergency Protocol",
      caregiverNote: "Caregiver Support Guide"
    },
    HI: {
      category: "लक्षण प्रबंधन",
      back: "पीछे",
      happening: "ऐसा क्यों हो रहा है?",
      strategies: "समाधान के तरीके",
      indianFoods: "भारतीय भोजन",
      dontForce: "जरूरी सलाह",
      callDoctor: "डॉक्टर को कब बुलाएं",
      caregiverNote: "परिवारों के लिए मार्गदर्शिका"
    }
  }[lang];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Breadcrumbs 
        lang={lang} 
        category={labels.category} 
        title={condition.title} 
        onHome={onBack} 
      />

      <SupervisorBadge lang={lang} />

      <header className="flex flex-col md:flex-row md:items-center gap-8 mb-16">
        <div className="w-24 h-24 rounded-[2rem] bg-emerald-600 flex items-center justify-center text-5xl shadow-xl shadow-emerald-200 border-4 border-white" aria-hidden="true">
          {condition.icon}
        </div>
        <div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-2">{condition.title}</h1>
          <p className="text-emerald-600 font-bold uppercase tracking-widest text-xs opacity-80">Supportive Symptom Care</p>
        </div>
      </header>

      <div className="space-y-8">
        {/* Why section */}
        <section className="glass-card rounded-5xl overflow-hidden shadow-sm section-transition">
          <button 
            onClick={() => toggleSection('happening')}
            className="w-full px-10 py-8 flex items-center justify-between text-left group"
          >
            <h2 className="text-2xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors">{labels.happening}</h2>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transform transition-all ${openSections.happening ? 'rotate-180 bg-emerald-50 text-emerald-600' : 'bg-slate-50'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </button>
          {openSections.happening && (
            <div className="px-10 pb-10">
              <p className="text-slate-700 text-xl font-medium leading-relaxed italic border-l-4 border-emerald-500 pl-6">{condition.happening}</p>
            </div>
          )}
        </section>

        {/* Strategies & Foods */}
        <section className="glass-card rounded-5xl overflow-hidden shadow-sm section-transition">
          <button 
            onClick={() => toggleSection('strategies')}
            className="w-full px-10 py-8 flex items-center justify-between text-left group"
          >
            <h2 className="text-2xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors">{labels.strategies}</h2>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transform transition-all ${openSections.strategies ? 'rotate-180 bg-emerald-50 text-emerald-600' : 'bg-slate-50'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </button>
          {openSections.strategies && (
            <div className="px-10 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-emerald-700">Immediate Actions</h3>
                <ul className="space-y-4">
                  {condition.strategies.map((strat, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-800 font-bold text-base leading-relaxed">
                       <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" aria-hidden="true"></span>
                       {strat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 rounded-4xl bg-white border border-slate-100 shadow-inner">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">{labels.indianFoods}</h3>
                <div className="flex flex-wrap gap-3">
                  {condition.indianFoods.map((food, i) => (
                    <span key={i} className="px-5 py-2.5 bg-emerald-50 text-emerald-700 rounded-2xl font-bold text-sm border border-emerald-100 shadow-sm">
                      {food}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Caregiver Specifics */}
        <section className="glass-card rounded-5xl overflow-hidden shadow-sm section-transition">
          <button 
            onClick={() => toggleSection('caregiver')}
            className="w-full px-10 py-8 flex items-center justify-between text-left group"
          >
            <h2 className="text-2xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors">{labels.caregiverNote}</h2>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transform transition-all ${openSections.caregiver ? 'rotate-180 bg-emerald-50 text-emerald-600' : 'bg-slate-50'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </button>
          {openSections.caregiver && (
            <div className="px-10 pb-10">
               <div className="p-8 rounded-4xl bg-amber-50 border-2 border-amber-100">
                  <h3 className="text-xs font-black uppercase tracking-widest text-amber-800 mb-6 flex items-center gap-2">
                    <span className="text-2xl">⚡</span> {labels.dontForce}
                  </h3>
                  <ul className="space-y-4">
                    {condition.dontForce.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-amber-950 font-black text-base">
                        <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" aria-hidden="true"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          )}
        </section>

        {/* Emergency Call Section */}
        <section className="bg-slate-900 text-white p-12 md:p-16 rounded-5xl shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000" aria-hidden="true"></div>
          <header className="relative z-10 mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/20 text-rose-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-rose-500/30 mb-6">
               Emergency Protocol
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 flex items-center gap-4">
               <span className="text-rose-500 text-5xl">🚨</span> {labels.callDoctor}
            </h2>
            <p className="text-slate-300 font-bold text-xl md:text-2xl leading-relaxed max-w-2xl">{condition.callDoctor}</p>
          </header>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-6">
            <a 
              href={`tel:${DOCTOR_INFO.phone}`}
              className="flex-1 px-10 py-5 bg-rose-600 hover:bg-rose-700 text-white rounded-3xl font-black text-center transition-all active:scale-95 shadow-xl shadow-rose-900/40"
            >
               Call Clinic Secretary
            </a>
            <a 
              href={DOCTOR_INFO.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex-1 px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-3xl font-black text-center border border-white/10 backdrop-blur-md transition-all active:scale-95"
            >
               WhatsApp Priority
            </a>
          </div>
        </section>
      </div>

      <RelatedSection 
        links={condition.relatedLinks || []} 
        lang={lang} 
        onNavigate={onNavigate} 
      />
    </div>
  );
};

export default SymptomDetailView;