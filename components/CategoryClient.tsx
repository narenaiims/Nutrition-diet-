"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { NAV_CARDS, TREATMENT_NUTRITION, CONDITION_NUTRITION, DEVICE_CARE, MYTHS_FACTS, HOME_MANAGEMENT, SIMPLE_DETAILS } from '../lib/constants';
import { useParams, useRouter } from 'next/navigation';
import CategoryPageView from './CategoryPageView';
import { ViewType } from '../lib/types';

export default function CategoryClient() {
  const { lang } = useLanguage();
  const params = useParams();
  const router = useRouter();
  const categorySlug = params.category as string;

  const navCards = NAV_CARDS[lang] || NAV_CARDS['EN'];
  const card = navCards.find(c => c.slug === categorySlug);

  if (!card) return <div>Category not found</div>;

  let items: any[] = [];
  let detailType: ViewType = 'home';

  const treatments = TREATMENT_NUTRITION[lang] || TREATMENT_NUTRITION['EN'];
  const symptoms = CONDITION_NUTRITION[lang] || CONDITION_NUTRITION['EN'];
  const devices = DEVICE_CARE[lang] || DEVICE_CARE['EN'];
  const myths = MYTHS_FACTS[lang] || MYTHS_FACTS['EN'];
  const management = HOME_MANAGEMENT[lang] || HOME_MANAGEMENT['EN'];
  const simpleItems = SIMPLE_DETAILS[lang] || SIMPLE_DETAILS['EN'];

  if (categorySlug === 'nutrition-by-treatment') { 
    items = treatments; 
    detailType = 'treatment-detail'; 
  }
  else if (categorySlug === 'symptom-based-nutrition') { 
    items = symptoms; 
    detailType = 'symptom-detail'; 
  }
  else if (categorySlug === 'device-and-line-care') { 
    items = devices; 
    detailType = 'device-detail'; 
  }
  else if (categorySlug === 'myth-busters') { 
    items = myths; 
    detailType = 'myth-detail'; 
  }
  else if (categorySlug === 'home-management') { 
    items = management; 
    detailType = 'home-management-detail'; 
  }
  else if (categorySlug === 'nutrition-by-cancer-type') {
    items = simpleItems.filter(item => ['breast', 'head-neck', 'gi', 'lung', 'gynaec'].includes(item.id));
    detailType = 'simple-detail';
  }
  else if (categorySlug === 'for-caregivers') {
    items = simpleItems.filter(item => item.id.startsWith('caregivers-'));
    detailType = 'simple-detail';
  }
  else if (categorySlug === 'after-treatment') {
    items = simpleItems.filter(item => item.id.startsWith('recovery-'));
    detailType = 'simple-detail';
  }
  else if (categorySlug === 'when-to-call-doctor') {
    items = simpleItems.filter(item => item.id === 'emergency');
    detailType = 'simple-detail';
  }

  return (
    <CategoryPageView 
      lang={lang} 
      card={card} 
      items={items} 
      detailType={detailType} 
      onBack={() => router.push('/')} 
      onItemSelect={(slug) => router.push(`/${categorySlug}/${slug}`)} 
    />
  );
}
