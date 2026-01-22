
"use client";

import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { useParams, useRouter } from 'next/navigation';
import { 
  TREATMENT_NUTRITION, 
  CONDITION_NUTRITION, 
  DEVICE_CARE, 
  MYTHS_FACTS, 
  HOME_MANAGEMENT, 
  SIMPLE_DETAILS 
} from '../../../lib/constants';
import TreatmentDetailView from '../../../components/TreatmentDetailView';
import SymptomDetailView from '../../../components/SymptomDetailView';
import DeviceDetailView from '../../../components/DeviceDetailView';
import MythDetailView from '../../../components/MythDetailView';
import HomeManagementDetailView from '../../../components/HomeManagementDetailView';
import SimpleDetailView from '../../../components/SimpleDetailView';
import { ViewType } from '../../../lib/types';

export default function DetailPage() {
  const { lang } = useLanguage();
  const params = useParams();
  const router = useRouter();
  const { category, slug } = params;

  const treatments = TREATMENT_NUTRITION[lang] || TREATMENT_NUTRITION['EN'];
  const symptoms = CONDITION_NUTRITION[lang] || CONDITION_NUTRITION['EN'];
  const devices = DEVICE_CARE[lang] || DEVICE_CARE['EN'];
  const myths = MYTHS_FACTS[lang] || MYTHS_FACTS['EN'];
  const management = HOME_MANAGEMENT[lang] || HOME_MANAGEMENT['EN'];
  const simpleItems = SIMPLE_DETAILS[lang] || SIMPLE_DETAILS['EN'];

  const allItems = [...treatments, ...symptoms, ...devices, ...myths, ...management, ...simpleItems];
  const item = allItems.find(i => i.slug === slug);

  if (!item) return <div>Content not found</div>;

  const handleNavigate = (type: ViewType, targetSlug?: string) => {
    if (type === 'home') router.push('/');
    else if (targetSlug) router.push(`/${category}/${targetSlug}`);
  };

  // Logic to determine which component to render
  if (treatments.find(t => t.slug === slug)) {
    return <TreatmentDetailView treatment={item as any} lang={lang} onBack={() => router.push(`/${category}`)} onNavigate={handleNavigate} />;
  }
  if (symptoms.find(t => t.slug === slug)) {
    return <SymptomDetailView condition={item as any} lang={lang} onBack={() => router.push(`/${category}`)} onNavigate={handleNavigate} />;
  }
  if (devices.find(t => t.slug === slug)) {
    return <DeviceDetailView device={item as any} lang={lang} onBack={() => router.push(`/${category}`)} onNavigate={handleNavigate} />;
  }
  if (myths.find(t => t.slug === slug)) {
    return <MythDetailView myth={item as any} lang={lang} onBack={() => router.push(`/${category}`)} />;
  }
  if (management.find(t => t.slug === slug)) {
    return <HomeManagementDetailView management={item as any} lang={lang} onBack={() => router.push(`/${category}`)} onNavigate={handleNavigate} />;
  }
  if (simpleItems.find(t => t.slug === slug)) {
    return <SimpleDetailView data={item as any} lang={lang} onBack={() => router.push(`/${category}`)} onNavigate={handleNavigate} />;
  }

  return <div>Unknown content type</div>;
}
