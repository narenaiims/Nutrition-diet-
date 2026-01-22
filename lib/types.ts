
export type Language = 'EN' | 'HI';

export interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Content;
}

export interface Content {
  nav: {
    home: string;
    nutrition: string;
    symptoms: string;
    contact: string;
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
    support: string;
    locationLabel: string;
  };
  common: {
    callSecretary: string;
    whatsapp: string;
    appointment: string;
    timing: string;
    disclaimer: string;
  };
}

export interface NavCard {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  accentColor: string;
}

export type AssistantType = 'NUTRITION' | 'CAREGIVER' | 'HEALTH';

export type ViewType = 
  | 'home' 
  | 'category' 
  | 'treatment-detail' 
  | 'symptom-detail' 
  | 'device-detail' 
  | 'myth-detail' 
  | 'home-management-detail' 
  | 'simple-detail'
  | 'ai-assistant';

export interface RelatedLink {
  label: string;
  type: ViewType;
  slug?: string;
}

export interface TreatmentNutrition {
  id: string;
  slug: string;
  title: string;
  icon: string;
  explanation: string;
  goals: string[];
  eat: string[];
  avoid: string[];
  hydration: string;
  textureAdvice?: string;
  redFlags: string[];
  relatedLinks?: RelatedLink[];
}

export interface ConditionNutrition {
  id: string;
  slug: string;
  title: string;
  icon: string;
  happening: string;
  strategies: string[];
  indianFoods: string[];
  dontForce: string[];
  callDoctor: string;
  relatedLinks?: RelatedLink[];
}

export interface DeviceCare {
  id: string;
  slug: string;
  title: string;
  icon: string;
  purpose: string;
  dailyCare: string[];
  infectionPrevention: string[];
  infectionSigns: string[];
  dos: string[];
  donts: string[];
  urgentHelp: string[];
  relatedLinks?: RelatedLink[];
}

export interface MythFact {
  id: string;
  slug: string;
  category: string;
  myth: string;
  fact: string;
  science: string;
  action: string;
  icon: string;
}

export interface HomeManagement {
  id: string;
  slug: string;
  title: string;
  icon: string;
  whyHappens: string;
  homeSteps: string[];
  nutritionAdjustments: string[];
  warningSigns: string[];
  relatedLinks?: RelatedLink[];
}

export interface SimpleDetail {
  id: string;
  slug: string;
  title: string;
  icon: string;
  description: string;
  sections: { heading: string; content: string[] | string }[];
  relatedLinks?: RelatedLink[];
}
