"use client";

import React, { useState } from 'react';
import { AssistantType, Language } from '../types';
import { ASSISTANT_CONFIG, DOCTOR_INFO } from '../constants';
import Breadcrumbs from './Breadcrumbs';

interface ExternalAIWrapperProps {
  type: AssistantType;
  lang: Language;
  onBack: () => void;
}

const ExternalAIWrapper: React.FC<ExternalAIWrapperProps> = ({ type, lang, onBack }) => {
  const config = ASSISTANT_CONFIG[type];
  const [loading, setLoading] = useState(true);

  const themeClasses = {
    emerald: "bg-emerald-50 border-emerald-100 text-emerald-700",
    purple: "bg-purple-50 border-purple-100 text-purple-700",
    slate: "bg-slate-900 border-slate-800 text-white"
  }[config.theme] || "bg-blue-50 border-blue-100 text-blue-700";

  const accentColor = {
    emerald: "text-emerald-600",
    purple: "text-purple-600",
    slate: "text-indigo-400"
  }[config.theme] || "text-blue-600";

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] w-full overflow-hidden bg-white">
      {/* Dynamic Themed Header */}
      <div className={`px-6 py-6 border-b transition-colors duration-500 ${themeClasses} shrink-0`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Breadcrumbs 
              lang={lang} 
              category={lang === 'EN' ? "AI Concierge" : "AI द्वार"} 
              title={config.title} 
              onHome={onBack} 
            />
            <h1 className="text-2xl md:text-3xl font-black tracking-tight leading-none mb-2">
              {config.title}
            </h1>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] opacity-80">
              Assistant guided under supervision of Dr Narendra Rathore, Senior Oncologist
            </p>
          </div>
          <button 
            onClick={onBack}
            className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 shadow-sm bg-white border border-slate-200 text-slate-900 hover:bg-slate-50`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Library
          </button>
        </div>
      </div>

      {/* Main Assistant Frame Container */}
      <div className="flex-1 relative bg-slate-50">
        {loading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className={`w-16 h-16 border-4 border-slate-100 border-t-current rounded-full animate-spin mb-6 ${accentColor}`}></div>
            <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] animate-pulse">
              Connecting to {config.title}...
            </p>
          </div>
        )}
        
        <iframe 
          src={config.url}
          className="w-full h-full border-none"
          title={config.title}
          onLoad={() => setLoading(false)}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>

      {/* Safety Bottom Bar */}
      <div className="px-6 py-4 bg-white border-t border-slate-100 shrink-0">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center sm:text-left leading-relaxed max-w-lg">
            {lang === 'EN' 
              ? "Disclaimer: This digital assistant provide general supportive guidance. For treatment changes or emergencies, contact the clinic directly." 
              : "अस्वीकरण: यह डिजिटल सहायक केवल सामान्य सहायता देता है। आपातकालीन स्थिति के लिए सीधे क्लिनिक से संपर्क करें।"}
          </p>
          <div className="flex items-center gap-3">
             <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{DOCTOR_INFO.phone}</span>
             <a href={`tel:${DOCTOR_INFO.phone}`} className={`w-8 h-8 rounded-lg flex items-center justify-center bg-slate-900 text-white shadow-lg active:scale-90 transition-transform`}>
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExternalAIWrapper;