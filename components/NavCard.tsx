
import React from 'react';
import { NavCard as NavCardType } from '../types';

interface NavCardProps {
  card: NavCardType;
  onClick: (slug: string) => void;
}

const NavCard: React.FC<NavCardProps> = ({ card, onClick }) => {
  const isSpecial = card.slug === 'ai-nutrition-assistant';

  return (
    <button
      onClick={() => onClick(card.slug)}
      className={`group relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl active:scale-[0.98] text-left w-full h-full overflow-hidden ${
        isSpecial 
          ? 'bg-slate-900 border-slate-800 text-white shadow-xl shadow-slate-200' 
          : `${card.bgColor} border-slate-100 shadow-sm hover:shadow-blue-100/40 hover:bg-white`
      }`}
      aria-label={`Navigate to ${card.title}`}
    >
      {/* Decorative effect */}
      <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-1000 ${
        isSpecial ? 'bg-indigo-500' : 'bg-current ' + card.accentColor
      }`}></div>
      
      {/* Icon with refined background */}
      <div className={`mb-8 w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-sm border border-white/50 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3 ${
        isSpecial ? 'bg-indigo-600 border-indigo-400' : 'bg-white'
      }`}>
        {card.icon}
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <h3 className={`text-xl md:text-2xl font-black mb-3 tracking-tight ${
          isSpecial ? 'text-white' : 'text-slate-900 group-hover:text-blue-600 transition-colors'
        }`}>
          {card.title}
        </h3>
        <p className={`text-sm md:text-base font-bold leading-relaxed flex-grow ${
          isSpecial ? 'text-slate-400' : 'text-slate-500 opacity-80'
        }`}>
          {card.description}
        </p>
        
        {/* Call to Action Indicator */}
        <div className={`mt-8 flex items-center gap-2 transition-all duration-300 ${
          isSpecial ? 'text-indigo-400' : 'text-blue-600'
        }`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm ${
            isSpecial ? 'bg-indigo-500/20' : 'bg-white'
          }`}>
             <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
             </svg>
          </div>
        </div>
      </div>
    </button>
  );
};

export default NavCard;
