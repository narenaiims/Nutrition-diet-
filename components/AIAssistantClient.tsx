"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useRouter, useSearchParams } from 'next/navigation';
import ExternalAIWrapper from './ExternalAIWrapper';
import { AssistantType } from '../lib/types';

export default function AIAssistantClient() {
  const { lang } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const type = (searchParams.get('type') as AssistantType) || 'NUTRITION';

  return (
    <ExternalAIWrapper 
      type={type} 
      lang={lang} 
      onBack={() => router.back()} 
    />
  );
}
