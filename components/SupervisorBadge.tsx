import React from 'react';
import { Language } from '../types';

interface SupervisorBadgeProps {
  lang: Language;
}

const SupervisorBadge: React.FC<SupervisorBadgeProps> = ({ lang }) => {
  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full shadow-sm animate-pulse mb-8">
      <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="text-[10px] md:text-xs font-black text-emerald-800 uppercase tracking-widest">
        {lang === 'EN' 
          ? "Reviewed under guidance of Dr Narendra Rathore, Senior Oncologist" 
          : "डॉ. नरेंद्र राठौड़, वरिष्ठ ऑन्कोलॉजिस्ट के मार्गदर्शन में समीक्षा की गई"}
      </p>
    </div>
  );
};

export default SupervisorBadge;