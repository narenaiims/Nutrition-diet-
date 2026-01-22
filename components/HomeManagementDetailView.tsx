import React, { useState } from 'react';
import { HomeManagement, Language, RelatedLink } from '../types';
import { DOCTOR_INFO } from '../constants';
import Breadcrumbs from './Breadcrumbs';
import RelatedSection from './RelatedSection';
import SupervisorBadge from './SupervisorBadge';

interface HomeManagementDetailViewProps {
  management: HomeManagement;
  lang: Language;
  onBack: () => void;
  onNavigate: (type: RelatedLink['type'], slug?: string) => void;
}

const HomeManagementDetailView: React.FC<HomeManagementDetailViewProps> = ({ management, lang, onBack, onNavigate }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    steps: true,
    nutrition: true
  });

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const labels = {
    EN: {
      category: "Home Management Support",
      back: "Back",
      why: "Understanding the Reaction",
      homeSteps: "Care Protocol at Home",
      nutrition: "Nutritional Support",
      warning: "Urgent: When to Call Doctor",
      caregiverNote: "Supportive Family Guide",
      call: "Call Secretary for Priority Support"
    },
    HI: {
      category: "होम मैनेजमेंट सपोर्ट",
      back: "पीछे",
      why: "लक्षण को समझें",
      homeSteps: "घर पर देखभाल के नियम",
      nutrition: "पोषण संबंधी बदलाव",
      warning: "चेतावनी: डॉक्टर को कब बुलाएं",
      caregiverNote: "परिवारों के लिए सहायक गाइड",
      call: "मदद के लिए सचिव को फोन करें"
    }
  }[lang];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Breadcrumbs 
        lang={lang} 
        category={labels.category} 
        title={management.title} 
        onHome={onBack} 
      />

      <SupervisorBadge lang={lang} />

      <header className="flex flex-col md:flex-row md:items-center gap-8 mb-16">
        <div className="w-24 h-24 rounded-[2rem] bg-indigo-600 flex items-center justify-center text-5xl shadow-xl shadow-indigo-200 border-4 border-white" aria-hidden="true">
          {management.icon}
        </div>
        <div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-2">{management.title}</h1>
          <p className="text-indigo-600 font-bold uppercase tracking-widest text-xs opacity-80">{labels.caregiverNote}</p>
        </div>
      </header>

      <div className="space-y-8">
        {/* Why section */}
        <section className="glass-card rounded-5xl p-10 md:p-14 shadow-sm hover:shadow-md section-transition">
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8">{labels.why}</h2>
          <p className="text-slate-700 text-xl md:text-2xl font-bold leading-relaxed border-l-4 border-indigo-500 pl-8 italic">{management.whyHappens}</p>
        </section>

        {/* Home Steps Section */}
        <section className="glass-card rounded-5xl overflow-hidden shadow-sm section-transition">
          <button 
            onClick={() => toggleSection('steps')}
            className="w-full px-10 py-8 flex items-center justify-between text-left group"
          >
            <h2 className="text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{labels.homeSteps}</h2>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transform transition-all ${openSections.steps ? 'rotate-180 bg-indigo-50 text-indigo-600' : 'bg-slate-50'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </button>
          {openSections.steps && (
            <div className="px-10 pb-10">
              <ul className="space-y-6">
                {management.homeSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-6 text-slate-800 font-bold text-lg leading-relaxed">
                     <span className="w-3 h-3 rounded-full bg-indigo-500 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(79,70,229,0.4)]" aria-hidden="true"></span>
                     {step}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Nutrition Adjustments Section */}
        <section className="glass-card rounded-5xl overflow-hidden shadow-sm section-transition">
          <button 
            onClick={() => toggleSection('nutrition')}
            className="w-full px-10 py-8 flex items-center justify-between text-left group"
          >
            <h2 className="text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{labels.nutrition}</h2>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transform transition-all ${openSections.nutrition ? 'rotate-180 bg-indigo-50 text-indigo-600' : 'bg-slate-50'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </button>
          {openSections.nutrition && (
            <div className="px-10 pb-10">
              <div className="bg-blue-50/50 border border-blue-100 p-10 rounded-4xl">
                <ul className="space-y-5">
                  {management.nutritionAdjustments.map((adj, i) => (
                    <li key={i} className="flex items-start gap-5 text-slate-700 font-bold text-lg leading-relaxed">
                       <span className="text-2xl" aria-hidden="true">🥗</span> {adj}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* Warning signs Emergency Section */}
        <section className="bg-slate-900 text-white p-12 md:p-16 rounded-5xl shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/10 rounded-full blur-[100px]" aria-hidden="true"></div>
          <header className="relative z-10 mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-10 flex items-center gap-5">
               <span className="text-rose-500 text-5xl" aria-hidden="true">🚨</span> {labels.warning}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {management.warningSigns.map((sign, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-3xl border border-white/10 flex items-center gap-4 group-hover:border-rose-500/30 transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0 shadow-[0_0_8px_rgba(244,63,94,0.8)]" aria-hidden="true"></div>
                  <span className="font-bold text-slate-200 text-lg">{sign}</span>
                </div>
              ))}
            </div>
          </header>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-6">
            <a 
              href={`tel:${DOCTOR_INFO.phone}`}
              className="flex-1 px-10 py-6 bg-rose-600 hover:bg-rose-700 text-white rounded-3xl font-black text-center transition-all active:scale-95 shadow-xl shadow-rose-900/40"
            >
               {labels.call}
            </a>
            <a 
              href={DOCTOR_INFO.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex-1 px-10 py-6 bg-white/10 hover:bg-white/20 text-white rounded-3xl font-black text-center border border-white/10 backdrop-blur-md transition-all active:scale-95"
            >
               WhatsApp Care Team
            </a>
          </div>
        </section>
      </div>

      <RelatedSection 
        links={management.relatedLinks || []} 
        lang={lang} 
        onNavigate={onNavigate} 
      />
    </div>
  );
};

export default HomeManagementDetailView;