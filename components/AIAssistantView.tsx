
import React from 'react';
import { Language } from '../lib/types';
import AIChat from './AIChat';
import Breadcrumbs from './Breadcrumbs';
import SupervisorBadge from './SupervisorBadge';

interface AIAssistantViewProps {
  lang: Language;
  onBack: () => void;
}

const AIAssistantView: React.FC<AIAssistantViewProps> = ({ lang, onBack }) => {
  return (
    <div className="flex flex-col h-[calc(100vh-80px)] w-full overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto w-full px-6 py-6 shrink-0">
        <Breadcrumbs 
          lang={lang} 
          category={lang === 'EN' ? "AI Care" : "AI देखभाल"} 
          title={lang === 'EN' ? "Nutrition Assistant" : "पोषण सहायक"} 
          onHome={onBack} 
        />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-2">
          <div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none mb-4">
              {lang === 'EN' ? "Onco-Nutrition Assistant" : "ऑन्को-पोषण सहायक"}
            </h1>
            <SupervisorBadge lang={lang} />
          </div>
          <button 
            onClick={onBack}
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            {lang === 'EN' ? "Back to Library" : "लाइब्रेरी पर वापस"}
          </button>
        </div>
      </div>

      <div className="flex-1 max-w-4xl mx-auto w-full px-6 pb-6 overflow-hidden">
        <AIChat />
      </div>
    </div>
  );
};

export default AIAssistantView;
