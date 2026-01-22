
"use client";

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter, useSearchParams } from 'next/navigation';
import ExternalAIWrapper from '../../components/ExternalAIWrapper';
import { AssistantType } from '../../lib/types';

/**
 * Universal AI Assistant entry point for App Router.
 * Refactored to exclusively use External AI Wrappers (Netlify hosted).
 * All Gemini AI / @google/genai dependencies have been removed.
 */
export default function AIAssistantPage() {
  const { lang } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Default to NUTRITION if no specific type is requested via query or context
  const type = (searchParams.get('type') as AssistantType) || 'NUTRITION';

  return (
    <ExternalAIWrapper 
      type={type} 
      lang={lang} 
      onBack={() => router.back()} 
    />
  );
}
