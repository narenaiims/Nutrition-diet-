"use client";

import React, { useState, useEffect } from 'react';
import { Language, ViewType } from '../types';

interface FloatingAIChatProps {
  lang: Language;
  view: { type: ViewType; categorySlug?: string; detailSlug?: string };
  onOpen: () => void;
}

const FloatingAIChat: React.FC<FloatingAIChatProps> = ({ lang, view, onOpen }) => {
  const [context, setContext] = useState("");

  useEffect(() => {
    const ctxMap: Record<string, string> = {
      'mucositis': lang === 'EN' ? "Mouth Sores" : "मुंह के छाले",
      'nausea-management': lang === 'EN' ? "Nausea" : "जी मिचलाना",
      'loss-of-appetite': lang === 'EN' ? "Appetite" : "भूख की कमी",
      'chemotherapy-nutrition': lang === 'EN' ? "Chemo Diet" : "कीमो पोषण",
      'radiation-nutrition': lang === 'EN' ? "Radiation Diet" : "रेडिएशन पोषण",
      'ryles-tube': lang === 'EN' ? "Tube Care" : "नली की देखभाल",
      'breast-cancer': lang === 'EN' ? "Breast Cancer" : "ब्रेस्ट कैंसर",
      'head-neck-cancer': lang === 'EN' ? "H&N Cancer" : "सिर और गर्दन का कैंसर",
      'gi-cancer': lang === 'EN' ? "GI Cancer" : "पाचन तंत्र कैंसर",
      'lung-cancer': lang === 'EN' ? "Lung Cancer" : "फेफड़ों का कैंसर",
      'weight-recovery': lang === 'EN' ? "Weight Recovery" : "वजन बढ़ाना",
      'when-to-call-doctor': lang === 'EN' ? "Emergency" : "खतरे के संकेत",
    };

    const currentSlug = view.detailSlug || view.categorySlug || "";
    const ctxName = ctxMap[currentSlug] || (lang === 'EN' ? "Care" : "देखभाल");
    setContext(ctxName);
  }, [view, lang]);

  // Don't show floating button on the main AI page or home
  if (view.type === 'ai-assistant' || view.type === 'home') return null;

  return (
    <div className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-[150]">
      <button
        onClick={onOpen}
        className={`group flex items-center gap-3 bg-slate-900 text-white pl-5 pr-4 py-3.5 rounded-full shadow-2xl hover:bg-indigo-600 transition-all duration-500 active:scale-95 border border-white/10`}
      >
        <div className="flex flex-col items-start leading-none text-left">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-0.5">
            Ask AI
          </span>
          <span className="text-xs font-black uppercase tracking-widest hidden md:inline">
            About {context}
          </span>
        </div>
        <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center animate-pulse">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default FloatingAIChat;