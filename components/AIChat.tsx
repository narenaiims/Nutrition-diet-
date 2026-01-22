
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getGeminiResponse } from '../services/gemini';
import { DOCTOR_INFO } from '../lib/constants';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const AIChat: React.FC = () => {
  const { lang } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: lang === 'EN' 
        ? "Hello! I am Dr. Narendra Rathore's Digital Assistant. How can I help you with your nutrition or symptom management today?"
        : "नमस्ते! मैं डॉ. नरेंद्र राठौड़ का डिजिटल सहायक हूँ। आज मैं पोषण या लक्षणों के प्रबंधन में आपकी कैसे मदद कर सकता हूँ?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getGeminiResponse(userMsg, lang);
      setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
      {/* Header */}
      <div className="bg-slate-900 p-6 text-white flex items-center gap-4 shrink-0">
        <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-2xl shadow-lg border border-indigo-400">
          🤖
        </div>
        <div>
          <h2 className="font-black text-lg leading-tight">
            {lang === 'EN' ? "Onco-Nutrition Assistant" : "ऑन्को-पोषण सहायक"}
          </h2>
          <p className="text-[10px] uppercase tracking-widest text-indigo-300 font-bold opacity-80">
            Guided by {DOCTOR_INFO.name}
          </p>
        </div>
      </div>

      {/* Message List */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 no-scrollbar"
      >
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] p-5 rounded-3xl font-medium text-sm md:text-base shadow-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-white border border-slate-100 text-slate-800 rounded-tl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-100 p-5 rounded-3xl rounded-tl-none shadow-sm flex gap-2 items-center">
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-.5s]"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-6 bg-white border-t border-slate-100 shrink-0">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder={lang === 'EN' ? "Ask about diet, nausea, or care..." : "आहार या लक्षणों के बारे में पूछें..."}
            className="w-full pl-6 pr-16 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 p-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M3 12h18" />
            </svg>
          </button>
        </div>
        <p className="mt-4 text-[9px] text-slate-400 font-bold uppercase tracking-widest text-center">
          {lang === 'EN' ? "Clinical Guidance Only • Not for Treatment Changes" : "केवल चिकित्सीय मार्गदर्शन • उपचार परिवर्तन के लिए नहीं"}
        </p>
      </div>
    </div>
  );
};

export default AIChat;
