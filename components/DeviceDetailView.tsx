"use client";

import React, { useState } from 'react';
import { DeviceCare, Language, RelatedLink } from '../types';
import { DOCTOR_INFO } from '../constants';
import Breadcrumbs from './Breadcrumbs';
import RelatedSection from './RelatedSection';
import SupervisorBadge from './SupervisorBadge';

interface DeviceDetailViewProps {
  device: DeviceCare;
  lang: Language;
  onBack: () => void;
  onNavigate: (type: RelatedLink['type'], slug?: string) => void;
}

const DeviceDetailView: React.FC<DeviceDetailViewProps> = ({ device, lang, onBack, onNavigate }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    daily: true,
    prevention: true,
    dosdonts: true,
    emergency: true
  });

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const labels = {
    EN: {
      category: "Device & Line Care",
      back: "Back",
      purpose: "Understanding the Purpose",
      dailyCare: "Daily Management Routine",
      prevention: "Infection Prevention Protocol",
      infectionSigns: "Warning Signs (Infection)",
      dos: "Recommended (Do's)",
      donts: "Strictly Avoid (Don'ts)",
      urgentHelp: "Emergency Response",
      callDoctor: "Contact Clinic Immediately"
    },
    HI: {
      category: "डिवाइस देखभाल",
      back: "पीछे",
      purpose: "डिवाइस का उद्देश्य",
      dailyCare: "दैनिक देखभाल के नियम",
      prevention: "इन्फेक्शन से बचाव के तरीके",
      infectionSigns: "इन्फेक्शन के संकेत",
      dos: "क्या करें (Do's)",
      donts: "क्या न करें (Don'ts)",
      urgentHelp: "आपातकालीन स्थिति",
      callDoctor: "सचिव को तुरंत फोन करें"
    }
  }[lang];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Breadcrumbs 
        lang={lang} 
        category={labels.category} 
        title={device.title} 
        onHome={onBack} 
      />

      <SupervisorBadge lang={lang} />

      <header className="flex flex-col md:flex-row md:items-center gap-8 mb-16">
        <div className="w-24 h-24 rounded-[2rem] bg-purple-600 flex items-center justify-center text-5xl shadow-xl shadow-purple-200 border-4 border-white" aria-hidden="true">
          {device.icon}
        </div>
        <div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-2">{device.title}</h1>
          <p className="text-purple-600 font-bold uppercase tracking-widest text-xs opacity-80">Clinical Home Management</p>
        </div>
      </header>

      <div className="space-y-8">
        {/* Purpose section */}
        <section className="glass-card rounded-5xl p-10 shadow-sm hover:shadow-md section-transition">
          <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">{labels.purpose}</h2>
          <p className="text-slate-700 text-xl font-bold leading-relaxed">{device.purpose}</p>
        </section>

        {/* Daily Care Section */}
        <section className="glass-card rounded-5xl overflow-hidden shadow-sm section-transition">
          <button 
            onClick={() => toggleSection('daily')}
            className="w-full px-10 py-8 flex items-center justify-between text-left group"
          >
            <h2 className="text-2xl font-black text-slate-900 group-hover:text-purple-600 transition-colors">{labels.dailyCare}</h2>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transform transition-all ${openSections.daily ? 'rotate-180 bg-purple-50 text-purple-600' : 'bg-slate-50'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </button>
          {openSections.daily && (
            <div className="px-10 pb-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <ul className="space-y-5">
                  {device.dailyCare.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-800 font-bold text-base leading-relaxed">
                       <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 shrink-0" aria-hidden="true"></span>
                       {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 rounded-4xl bg-rose-50/50 border border-rose-100">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-rose-700 mb-6">{labels.infectionSigns}</h3>
                <ul className="space-y-4">
                  {device.infectionSigns.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 font-bold text-sm">
                       <span className="text-rose-500" aria-hidden="true">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* Infection Prevention Section */}
        <section className="glass-card rounded-5xl overflow-hidden shadow-sm section-transition">
          <button 
            onClick={() => toggleSection('prevention')}
            className="w-full px-10 py-8 flex items-center justify-between text-left group"
          >
            <h2 className="text-2xl font-black text-slate-900 group-hover:text-purple-600 transition-colors">{labels.prevention}</h2>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transform transition-all ${openSections.prevention ? 'rotate-180 bg-purple-50 text-purple-600' : 'bg-slate-50'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </button>
          {openSections.prevention && (
            <div className="px-10 pb-10">
              <div className="p-8 rounded-4xl bg-blue-50/50 border border-blue-100">
                <ul className="space-y-4">
                  {device.infectionPrevention.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-blue-900 font-bold text-base">
                       <span className="text-xl">🛡️</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* Dos and Donts */}
        <section className="glass-card rounded-5xl overflow-hidden shadow-sm section-transition">
          <button 
            onClick={() => toggleSection('dosdonts')}
            className="w-full px-10 py-8 flex items-center justify-between text-left group"
          >
            <h2 className="text-2xl font-black text-slate-900 group-hover:text-purple-600 transition-colors">Safe Management Protocol</h2>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transform transition-all ${openSections.dosdonts ? 'rotate-180 bg-purple-50 text-purple-600' : 'bg-slate-50'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </button>
          {openSections.dosdonts && (
            <div className="px-10 pb-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="p-8 rounded-4xl bg-green-50/50 border border-green-100">
                <h3 className="text-xs font-black uppercase tracking-widest text-green-700 mb-6 flex items-center gap-2">
                   <span className="text-lg">✅</span> {labels.dos}
                </h3>
                <ul className="space-y-4">
                  {device.dos.map((item, i) => (
                    <li key={i} className="text-green-950 font-bold text-sm leading-relaxed">• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="p-8 rounded-4xl bg-rose-50/50 border border-rose-100">
                <h3 className="text-xs font-black uppercase tracking-widest text-rose-700 mb-6 flex items-center gap-2">
                   <span className="text-lg">❌</span> {labels.donts}
                </h3>
                <ul className="space-y-4">
                  {device.donts.map((item, i) => (
                    <li key={i} className="text-rose-950 font-bold text-sm leading-relaxed">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* Urgent Help Section */}
        <section className="bg-slate-900 text-white p-12 md:p-16 rounded-5xl shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000" aria-hidden="true"></div>
          <header className="relative z-10 mb-10">
            <h2 className="text-3xl md:text-5xl font-black mb-8 flex items-center gap-4">
               <span className="text-orange-500 text-5xl">🚨</span> {labels.urgentHelp}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {device.urgentHelp.map((item, i) => (
                <li key={i} className="bg-white/5 p-5 rounded-3xl border border-white/10 font-bold text-slate-200">
                  • {item}
                </li>
              ))}
            </ul>
          </header>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-6">
            <a 
              href={`tel:${DOCTOR_INFO.phone}`}
              className="flex-1 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl font-black text-center transition-all active:scale-95 shadow-xl shadow-blue-900/40"
            >
               Call Secretary
            </a>
            <a 
              href={DOCTOR_INFO.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex-1 px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-3xl font-black text-center border border-white/10 backdrop-blur-md transition-all active:scale-95"
            >
               WhatsApp Emergency
            </a>
          </div>
        </section>
      </div>

      <RelatedSection 
        links={device.relatedLinks || []} 
        lang={lang} 
        onNavigate={onNavigate} 
      />
    </div>
  );
};

export default DeviceDetailView;