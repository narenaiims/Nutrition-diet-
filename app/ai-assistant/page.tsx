
"use client";

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter, useSearchParams } from 'next/navigation';
import AIAssistantView from '../../components/AIAssistantView';
import ExternalAIWrapper from '../../components/ExternalAIWrapper';
import { AssistantType } from '../../lib/types';

export default function AIAssistantPage() {
  const { lang } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Determine if a specific assistant type is requested via query string
  const type = (searchParams.get('type') as AssistantType);

  // Default to our high-performance Gemini native chat if NUTRITION or no specific type is requested
  if (!type || type === 'NUTRITION') {
    return (
      <AIAssistantView 
        lang={lang} 
        onBack={() => router.back()} 
      />
    );
  }

  // Use the wrapper for other designated AI tools
  return (
    <ExternalAIWrapper 
      type={type} 
      lang={lang} 
      onBack={() => router.back()} 
    />
  );
}
