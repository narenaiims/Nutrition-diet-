
import { Content, TreatmentNutrition, ConditionNutrition, DeviceCare, MythFact, NavCard, HomeManagement, SimpleDetail, AssistantType } from './types';

export const DOCTOR_INFO = {
  name: "Dr. Narendra Rathore",
  title: "Senior Oncologist, Udaipur | Professor & Head",
  clinic: "D-30, Inside MB Hospital Campus, Near TB Clinic, Udaipur – 313001",
  phone: "7597207640",
  timing: "2 PM – 8 PM (Mon–Sat)",
  website: "https://www.drnroncologistudaipur.com",
  whatsapp: "https://wa.me/917597207640",
  maps: "https://maps.app.goo.gl/ydimH4svfzutq1Hu9?g_st=ic",
  social: {
    facebook: "https://www.facebook.com/drnroncologist/",
    linkedin: "https://www.linkedin.com/in/drnroncologist/",
    x: "https://x.com/drn_dr",
    youtube: "https://www.youtube.com/@drnroncologist"
  }
};

export const ASSISTANT_CONFIG: Record<AssistantType, { url: string; theme: string; title: string }> = {
  NUTRITION: {
    url: "https://assistant-of-dr-narendra-rathore.netlify.app/",
    theme: "emerald",
    title: "Nutrition & Symptom Assistant"
  },
  CAREGIVER: {
    url: "https://ai-assitant-of-dr-narendra-rathore.netlify.app/",
    theme: "purple",
    title: "Caregiver & Education Assistant"
  },
  HEALTH: {
    url: "https://digital-assistant-of-dr-nr.netlify.app/",
    theme: "slate",
    title: "Digital Health & Navigation Assistant"
  }
};

export const NAV_CARDS: Record<string, NavCard[]> = {
  EN: [
    { id: "nt", slug: "nutrition-by-treatment", title: "Nutrition by Treatment", description: "Dietary plans for Chemo, Radiation & Immunotherapy.", icon: "🧪", bgColor: "bg-blue-50", accentColor: "text-blue-600" },
    { id: "sn", slug: "symptom-based-nutrition", title: "Symptom Management", description: "Managing nausea, taste loss, and appetite challenges.", icon: "🤢", bgColor: "bg-emerald-50", accentColor: "text-emerald-600" },
    { id: "ct", slug: "nutrition-by-cancer-type", title: "Nutrition by Cancer Type", description: "Specific diet needs for Breast, Lung, GI, and Blood cancers.", icon: "🎗️", bgColor: "bg-rose-50", accentColor: "text-rose-600" },
    { id: "dc", slug: "device-and-line-care", title: "Device & Line Care", icon: "💉", description: "Safe management of PICC lines, Ports, and Ryle's tubes.", bgColor: "bg-purple-50", accentColor: "text-purple-600" },
    { id: "hm", slug: "home-management", title: "Home Management", icon: "🏠", description: "Supportive steps for families and caregivers at home.", bgColor: "bg-indigo-50", accentColor: "text-indigo-600" },
    { id: "mb", slug: "myth-busters", title: "Myth Busters", icon: "🛡️", description: "Evidence-based facts vs common cancer misconceptions.", bgColor: "bg-amber-50", accentColor: "text-amber-600" },
    { id: "fc", slug: "for-caregivers", title: "For Caregivers", icon: "🤝", description: "Emotional support and practical tips for family members.", bgColor: "bg-teal-50", accentColor: "text-teal-600" },
    { id: "at", slug: "after-treatment", title: "After Treatment", icon: "🌱", description: "Life after cancer: Survivorship nutrition and monitoring.", bgColor: "bg-green-50", accentColor: "text-green-600" },
    { id: "wc", slug: "when-to-call-doctor", title: "When to Call Doctor", icon: "🚨", description: "Identify red flags and emergency situations correctly.", bgColor: "bg-red-50", accentColor: "text-red-600" },
    { id: "cc", slug: "ai-nutrition-assistant", title: "AI Care Concierge", description: "Direct digital access to oncology assistance 24/7.", icon: "🤖", bgColor: "bg-slate-900", accentColor: "text-white" }
  ],
  HI: [
    { id: "nt", slug: "nutrition-by-treatment", title: "इलाज और खान-पान", description: "कीमो और रेडिएशन के दौरान सही डाइट चार्ट।", icon: "🧪", bgColor: "bg-blue-50", accentColor: "text-blue-600" },
    { id: "sn", slug: "symptom-based-nutrition", title: "तकलीफों का समाधान", description: "उल्टी, कमजोरी और स्वाद की कमी को कैसे सुधारें।", icon: "🤢", bgColor: "bg-emerald-50", accentColor: "text-emerald-600" },
    { id: "ct", slug: "nutrition-by-cancer-type", title: "कैंसर के प्रकार अनुसार", description: "ब्रेस्ट, लंग, और ब्लड कैंसर के लिए विशेष आहार।", icon: "🎗️", bgColor: "bg-rose-50", accentColor: "text-rose-600" },
    { id: "dc", slug: "device-and-line-care", title: "डिवाइस की देखभाल", description: "नली (रायल ट्यूब) और पोर्ट्स का सुरक्षित रखरखाव।", icon: "💉", bgColor: "bg-purple-50", accentColor: "text-purple-600" },
    { id: "hm", slug: "home-management", title: "घर पर देखभाल", description: "मरीज की देखभाल के लिए परिवारों के लिए जरूरी सलाह।", icon: "🏠", bgColor: "bg-indigo-50", accentColor: "text-indigo-600" },
    { id: "mb", slug: "myth-busters", title: "भ्रम और सच", description: "कैंसर से जुड़ी गलतफहमियों का वैज्ञानिक समाधान।", icon: "🛡️", bgColor: "bg-amber-50", accentColor: "text-amber-600" },
    { id: "fc", slug: "for-caregivers", title: "परिवारों के लिए", description: "देखभाल करने वालों के लिए भावनात्मक और व्यावहारिक सुझाव।", icon: "🤝", bgColor: "bg-teal-50", accentColor: "text-teal-600" },
    { id: "at", slug: "after-treatment", title: "इलाज के बाद", description: "कैंसर के बाद का जीवन: खान-पान और रिकवरी की निगरानी।", icon: "🌱", bgColor: "bg-green-50", accentColor: "text-green-600" },
    { id: "wc", slug: "when-to-call-doctor", title: "डॉक्टर को कब बुलाएं", description: "गंभीर लक्षणों और आपातकालीन स्थितियों को पहचानें।", icon: "🚨", bgColor: "bg-red-50", accentColor: "text-red-600" },
    { id: "cc", slug: "ai-nutrition-assistant", title: "AI केयर द्वार", description: "कैंसर पोषण और सहायता के लिए डिजिटल पहुंच।", icon: "🤖", bgColor: "bg-slate-900", accentColor: "text-white" }
  ]
};

export const LAYOUT_CONTENT: Record<string, Content> = {
  EN: {
    nav: { home: "Home", nutrition: "Library", symptoms: "Symptoms", contact: "Contact" },
    footer: { rights: "All Rights Reserved", privacy: "Privacy Policy", terms: "Terms of Use", support: "Support", locationLabel: "Our Clinic" },
    common: { callSecretary: "Call Secretary", whatsapp: "WhatsApp", appointment: "Book Appointment", timing: "Calls: 2 PM – 8 PM (Mon-Sat)", disclaimer: "Disclaimer: Nutritional guidance only. Consult Dr. Rathore for medical treatment." }
  },
  HI: {
    nav: { home: "होम", nutrition: "लाइब्रेरी", symptoms: "लक्षण", contact: "संपर्क" },
    footer: { rights: "सर्वाधिकार सुरक्षित", privacy: "गोपनीयता", terms: "नियम", support: "सहायता", locationLabel: "हमारा क्लिनिक" },
    common: { callSecretary: "सचिव से बात करें", whatsapp: "व्हाट्सएप", appointment: "अपॉइंटमेंट लें", timing: "समय: दोपहर 2 - रात 8 (सोम-शनि)", disclaimer: "सलाह: यह केवल पोषण संबंधी जानकारी है। इलाज के लिए डॉ. राठौड़ से बात करें।" }
  }
};

export const CONTENT: Record<string, any> = {
  EN: {
    title: "Oncology Nutrition & Supportive Care",
    subtitle: "Evidence-based nutritional guidance to support your journey during and after cancer treatment.",
    assistantName: "Onco-Nutrition Assistant",
    ctaContact: "Contact Support Team",
    ctaAppointment: "Book Appointment",
    nutritionTitle: "Nutritional Guidance",
    nutritionDesc: "Specific diet plans to manage side effects and improve recovery.",
    treatmentSectionTitle: "Nutrition by Treatment Type",
    treatmentSectionDesc: "Tailored dietary advice based on your specific therapy protocol.",
    symptomSectionTitle: "Managing Side Effects",
    symptomSectionDesc: "Practical strategies for common challenges like nausea, fatigue, and mouth sores.",
    deviceSectionTitle: "Patient Education: Device Care",
    deviceSectionDesc: "Essential guidance for managing tubes, ports, and catheters at home safely.",
    mythsSectionTitle: "Myths vs. Facts",
    mythsSectionDesc: "Clarifying common misconceptions about cancer with scientific evidence and empathy.",
    homeManagementTitle: "Home Management Support",
    homeManagementDesc: "Safe, supportive steps for managing treatment reactions at home.",
    disclaimer: "Disclaimer: This information is for education only. Always consult Dr. Narendra Rathore for medical treatment changes.",
    doctorName: "Dr. Narendra Rathore"
  },
  HI: {
    title: "कैंसर पोषण और सहायक देखभाल",
    subtitle: "कैंसर के इलाज के दौरान और बाद में आपकी सेहत को सुधारने के लिए सही खान-पान की जानकारी।",
    assistantName: "ऑन्को-पोषण सहायक",
    ctaContact: "सपोर्ट टीम से संपर्क करें",
    ctaAppointment: "अपॉइंटमेंट बुक करें",
    nutritionTitle: "पोषण संबंधी मार्गदर्शन",
    nutritionDesc: "साइड इफेक्ट्स को संभालने और रिकवरी के लिए विशेष डाइट प्लान।",
    treatmentSectionTitle: "इलाज के अनुसार पोषण",
    treatmentSectionDesc: "आपके इलाज (जैसे कीमो या रेडिएशन) के हिसाब से खाने की सलाह।",
    symptomSectionTitle: "दुष्प्रभावों का सामना",
    symptomSectionDesc: "उल्टी, कमजोरी और मुंह के छालों जैसी तकलीफों को कम करने के तरीके।",
    deviceSectionTitle: "डिवाइस की देखभाल",
    deviceSectionDesc: "नली और पोर्ट्स को घर पर सुरक्षित रखने के जरूरी नियम।",
    mythsSectionTitle: "भ्रम और सच",
    mythsSectionDesc: "कैंसर से जुड़ी गलत बातों और उनके पीछे के वैज्ञानिक सच को जानें।",
    homeManagementTitle: "घर पर मरीज की मदद",
    homeManagementDesc: "इलाज के बाद घर पर आने वाली दिक्कतों को सुलझाने के आसान कदम।",
    disclaimer: "चेतावनी: यह जानकारी केवल शिक्षा के लिए है। इलाज में बदलाव के लिए डॉ. नरेंद्र राठौड़ से सलाह लें।",
    doctorName: "डॉ. नरेंद्र राठौड़"
  }
};

export const TREATMENT_NUTRITION: Record<string, TreatmentNutrition[]> = {
  EN: [
    {
      id: "chemo",
      slug: "chemotherapy-nutrition",
      title: "Chemotherapy",
      icon: "🧪",
      explanation: "Chemotherapy drugs target rapidly dividing cells. This often includes the cells in your digestive tract, leading to taste changes, nausea, and reduced appetite.",
      goals: ["Prevent weight loss", "Manage CINV (Nausea)", "Maintain energy levels"],
      eat: ["Small, frequent meals", "Bland foods like curd-rice", "High-protein paneer or eggs", "Ginger-based drinks"],
      avoid: ["Raw/Unwashed salads", "Very spicy or oily food", "Unpasteurized milk products"],
      hydration: "Drink at least 2.5 liters of fluids daily. Use ORS or coconut water if vomiting occurs.",
      textureAdvice: "Soft or semi-liquid foods if chewing is difficult. Pureed khichdi is an excellent option.",
      redFlags: ["Fever over 101°F", "Severe diarrhea (4+ episodes)", "Inability to swallow water for 12 hours"],
      relatedLinks: [
        { label: "Managing Nausea", type: "symptom-detail", slug: "nausea-management" },
        { label: "Home Care Protocol", type: "category", slug: "home-management" }
      ]
    },
    {
      id: "rad",
      slug: "radiation-nutrition",
      title: "Radiation Therapy",
      icon: "☀️",
      explanation: "Radiation side effects are localized. For Head and Neck cancers, this leads to dry mouth and difficulty swallowing (Mucositis).",
      goals: ["Ensure adequate swallowing", "Prevent dehydration", "Protect mouth lining"],
      eat: ["Soft purees", "Mashed potatoes with ghee", "Lukewarm soups", "Milkshakes with protein powder"],
      avoid: ["Crunchy chips or toast", "Acidic lemons/tomatoes", "Very hot or iced beverages"],
      hydration: "Frequent small sips. Use a straw if mouth sores are painful.",
      textureAdvice: "Modified consistency (Level 4/5): Pureed or Minced & Moist foods only.",
      redFlags: ["Sudden weight drop", "Severe bleeding from mouth sores", "Coughing while swallowing"],
      relatedLinks: [
        { label: "Mouth Sore Care", type: "home-management-detail", slug: "mucositis" },
        { label: "Swallowing Safety", type: "simple-detail", slug: "head-neck-cancer" }
      ]
    }
  ],
  HI: [
    {
      id: "chemo",
      slug: "chemotherapy-nutrition",
      title: "कीमोथेरेपी",
      icon: "🧪",
      explanation: "कीमोथेरेपी दवाएं पाचन तंत्र को प्रभावित करती हैं, जिससे जी मिचलाना और स्वाद बदलना आम है।",
      goals: ["वजन बनाए रखें", "ताकत बढ़ाएं", "उल्टी कम करें"],
      eat: ["थोड़ा-थोड़ा बार-बार खाएं", "खिचड़ी, दही-चावल", "पनीर और अंडे", "अदरक वाला पानी"],
      avoid: ["तीखा और तेल वाला खाना", "कच्ची सलाद", "खुला दूध"],
      hydration: "नियमित पानी और नारियल पानी पिएं। कम से कम 2.5 लीटर तरल पदार्थ लें।",
      textureAdvice: "नरम और पिसा हुआ खाना आसान रहता है। यदि चबाने में कठिनाई हो तो दलिया लें।",
      redFlags: ["101°F से ज्यादा बुखार", "गंभीर कमजोरी (4+ बार दस्त)", "12 घंटे तक पानी भी न पच पाना"],
      relatedLinks: [
        { label: "उल्टी का प्रबंधन", type: "symptom-detail", slug: "nausea-management" },
        { label: "घर पर देखभाल", type: "category", slug: "home-management" }
      ]
    },
    {
      id: "rad",
      slug: "radiation-nutrition",
      title: "रेडिएशन थेरेपी",
      icon: "☀️",
      explanation: "रेडिएशन से मुंह सूखना और निगलने में कठिनाई हो सकती है। यह अक्सर 'मुकोसाइटिस' का कारण बनता है।",
      goals: ["आसानी से निगलना", "हाइड्रेशन", "छालों से बचाव"],
      eat: ["नरम पिसा हुआ भोजन", "घी और मसला हुआ आलू", "गुनगुना सूप", "प्रोटीन शेक"],
      avoid: ["कड़क और मसालेदार खाना", "खट्टे फल (नींबू/टमाटर)", "बहुत गर्म चाय या कॉफी"],
      hydration: "पानी के छोटे-छोटे घूंट लें। यदि छालों में दर्द हो तो स्ट्रॉ का उपयोग करें।",
      textureAdvice: "नरम और गीला भोजन ही लें। लेवल 4/5 की प्यूरी सबसे अच्छी है।",
      redFlags: ["वजन का तेजी से गिरना", "छालों से खून आना", "निगलते समय खांसी आना"],
      relatedLinks: [
        { label: "मुंह के छाले", type: "home-management-detail", slug: "mucositis" },
        { label: "गले का कैंसर", type: "simple-detail", slug: "head-neck-cancer" }
      ]
    }
  ]
};

export const CONDITION_NUTRITION: Record<string, ConditionNutrition[]> = {
  EN: [
    {
      id: "nausea",
      slug: "nausea-management",
      title: "Nausea & Vomiting",
      icon: "🤢",
      happening: "Chemotherapy triggers the brain's vomit center and irritates the stomach lining.",
      strategies: ["Dry toast/biscuits first thing", "Cold foods have less smell", "Ginger tea sips"],
      indianFoods: ["Curd rice", "Roasted makhana", "Nimbu paani"],
      dontForce: ["Don't force food during peak nausea", "Avoid heavy fried items"],
      callDoctor: "Unable to drink liquids for 24 hours.",
      relatedLinks: [
        { label: "Chemo Nutrition", type: "treatment-detail", slug: "chemotherapy-nutrition" }
      ]
    },
    {
      id: "appetite",
      slug: "loss-of-appetite",
      title: "Loss of Appetite",
      icon: "🍽️",
      happening: "Cancer changes metabolism and hunger hormones.",
      strategies: ["6-8 small meals", "Set an alarm to eat", "Add ghee to everything"],
      indianFoods: ["Sattu drink", "Dry fruit kheer", "Moong dal chilla"],
      dontForce: ["Don't force a large plate", "Don't drink water just before meals"],
      callDoctor: "Refusing all food for more than 48 hours.",
      relatedLinks: [
        { label: "Weight Recovery", type: "simple-detail", slug: "weight-recovery" }
      ]
    }
  ],
  HI: [
    {
      id: "nausea",
      slug: "nausea-management",
      title: "जी मिचलाना",
      icon: "🤢",
      happening: "कीमो दवाएं पेट में जलन पैदा करती हैं और मस्तिष्क के उल्टी केंद्र को सक्रिय करती हैं।",
      strategies: ["सुबह उठते ही सूखा टोस्ट या बिस्कुट लें", "ठंडा खाना कम महकता है", "अदरक का पानी या चाय पिएं"],
      indianFoods: ["दही चावल", "भुना हुआ मखाना", "नींबू पानी"],
      dontForce: ["जबरदस्ती न खिलाएं", "भारी तेल वाला और तला हुआ खाना न दें"],
      callDoctor: "अगर 24 घंटे तक पानी भी न पचे या बार-बार उल्टी हो।",
      relatedLinks: [
        { label: "कीमो पोषण", type: "treatment-detail", slug: "chemotherapy-nutrition" }
      ]
    },
    {
      id: "appetite",
      slug: "loss-of-appetite",
      title: "भूख की कमी",
      icon: "🍽️",
      happening: "कैंसर शरीर की मेटाबॉलिज्म और भूख के संकेतों को बदल देता है।",
      strategies: ["दिन में 6-8 बार थोड़ा-थोड़ा खिलाएं", "खाने में घी और मक्खन बढ़ाएं", "समय पर खाने के लिए अलार्म लगाएं"],
      indianFoods: ["सत्तू शरबत", "सूखे मेवे की खीर", "मूंग दाल चिल्ला"],
      dontForce: ["एक साथ पूरी थाली न दें", "खाने के तुरंत पहले पानी न पिलाएं"],
      callDoctor: "अगर मरीज 2 दिन से कुछ भी न खाए या वजन तेजी से गिरे।",
      relatedLinks: [
        { label: "वजन बढ़ाना", type: "simple-detail", slug: "weight-recovery" }
      ]
    }
  ]
};

export const DEVICE_CARE: Record<string, DeviceCare[]> = {
  EN: [
    {
      id: "ryles",
      slug: "ryles-tube",
      title: "Ryle's Tube Care",
      icon: "👃",
      purpose: "Delivery of nutrition directly to stomach when swallowing is difficult.",
      dailyCare: ["Clean nostrils daily", "Check tube position mark", "Flush after every feed"],
      infectionPrevention: ["Wash hands before feed", "Use lukewarm water for flushing"],
      infectionSigns: ["Redness at nose", "Foul smell", "Choking during feed"],
      dos: ["Keep patient sitting at 45 degrees", "Flush with 50ml water"],
      donts: ["Don't force feed if coughing", "Don't ignore displacements"],
      urgentHelp: ["Tube pulls out", "Breathlessness"],
      relatedLinks: [
        { label: "Swallowing Safety", type: "simple-detail", slug: "head-neck-cancer" }
      ]
    }
  ],
  HI: [
    {
      id: "ryles",
      slug: "ryles-tube",
      title: "नली (ट्यूब) की देखभाल",
      icon: "👃",
      purpose: "सीधे पेट तक पोषण पहुँचाने के लिए जब मरीज निगल न पाए।",
      dailyCare: ["नाक के पास सफाई रखें", "नली पर लगा निशान चेक करें", "हर फीड के बाद गुनगुने पानी से साफ करें"],
      infectionPrevention: ["हाथ अच्छी तरह धोकर फीड दें", "पानी को उबालकर ठंडा करके उपयोग करें"],
      infectionSigns: ["नाक के पास लाली या सूजन", "नली से गंदी बदबू", "फीड के दौरान खांसी"],
      dos: ["मरीज को 45 डिग्री पर बैठाकर खिलाएं", "हर फीड के बाद 50ml पानी से नली साफ करें"],
      donts: ["खांसी होने पर फीड न दें", "नली हिलने पर उसे खुद सही न करें"],
      urgentHelp: ["नली बाहर निकलना", "अचानक सांस फूलना", "बेहोशी"],
      relatedLinks: [
        { label: "निगलने की सुरक्षा", type: "simple-detail", slug: "head-neck-cancer" }
      ]
    }
  ]
};

export const HOME_MANAGEMENT: Record<string, HomeManagement[]> = {
  EN: [
    {
      id: "mucositis",
      slug: "mucositis",
      title: "Mouth Sores",
      icon: "👄",
      whyHappens: "Damage to the mouth lining from chemo/radiation.",
      homeSteps: ["Salt-soda rinse 4 times daily", "Use soft toothbrush", "Keep lips moist"],
      nutritionAdjustments: ["Pureed cold foods", "Avoid spices and acids", "High protein shakes"],
      warningSigns: ["Unable to drink water", "Severe bleeding", "Fever"],
      relatedLinks: [
        { label: "Radiation Care", type: "treatment-detail", slug: "radiation-nutrition" }
      ]
    }
  ],
  HI: [
    {
      id: "mucositis",
      slug: "mucositis",
      title: "मुंह के छाले",
      icon: "👄",
      whyHappens: "कीमो या रेडिएशन के कारण मुंह की नाजुक परत को नुकसान।",
      homeSteps: ["नमक-सोडा के पानी से कुल्ले करें", "अल्ट्रा-सॉफ्ट ब्रश उपयोग करें", "होंठों पर घी या जेली लगाएं"],
      nutritionAdjustments: ["नरम, पिसा हुआ और ठंडा भोजन", "मिर्च, मसाले और खटास से बचें", "ठंडे प्रोटीन शेक लें"],
      warningSigns: ["पानी भी न निगल पाना", "भारी मात्रा में खून आना", "तेज बुखार"],
      relatedLinks: [
        { label: "रेडिएशन देखभाल", type: "treatment-detail", slug: "radiation-nutrition" }
      ]
    }
  ]
};

export const MYTHS_FACTS: Record<string, MythFact[]> = {
  EN: [
    {
      id: "biopsy",
      slug: "biopsy-myths",
      icon: "🔬",
      category: "Diagnostics",
      myth: "Biopsy spreads cancer.",
      fact: "Biopsy is safe and necessary for diagnosis.",
      science: "Coaxial needles prevent cell seeding.",
      action: "Get the biopsy done immediately for correct staging."
    }
  ],
  HI: [
    {
      id: "biopsy",
      slug: "biopsy-myths",
      icon: "🔬",
      category: "जांच",
      myth: "बायोप्सी से कैंसर शरीर में फैलता है।",
      fact: "बायोप्सी पूरी तरह सुरक्षित और इलाज के लिए जरूरी है।",
      science: "आधुनिक सुइयां (Coaxial) कैंसर कोशिकाओं को फैलने से रोकती हैं।",
      action: "बिना डरे समय पर बायोप्सी करवाएं ताकि सही इलाज शुरू हो सके।"
    }
  ]
};

export const SIMPLE_DETAILS: Record<string, SimpleDetail[]> = {
  EN: [
    {
      id: "breast",
      slug: "breast-cancer",
      title: "Breast Cancer Nutrition",
      icon: "🎗️",
      description: "Managing weight and metabolic health during therapy.",
      sections: [
        { heading: "Key Focus", content: ["Weight management", "High fiber diet", "Low processed sugars"] },
        { heading: "Indian Diet", content: ["Oats/Bajra", "Curd", "Dal/Paneer", "Seeds/Nuts"] },
        { heading: "Red Flags", content: ["Rapid weight gain", "Arm swelling (Lymphedema)"] }
      ],
      relatedLinks: [
        { label: "Chemotherapy Care", type: "treatment-detail", slug: "chemotherapy-nutrition" }
      ]
    },
    {
      id: "head-neck",
      slug: "head-neck-cancer",
      title: "Head & Neck Cancer",
      icon: "👄",
      description: "Swallowing safety and calorie preservation.",
      sections: [
        { heading: "Priorities", content: ["Pureed textures", "High calorie liquids", "Sattu/Milkshakes"] },
        { heading: "Swallowing Tips", content: ["Chin-tuck position", "Thickened liquids", "Small sips"] },
        { heading: "Red Flags", content: ["Coughing while eating", "Complete inability to swallow"] }
      ],
      relatedLinks: [
        { label: "Ryle's Tube Care", type: "device-detail", slug: "ryles-tube" }
      ]
    },
    {
      id: "gi",
      slug: "gi-cancer",
      title: "GI Cancer Nutrition",
      icon: "🍱",
      description: "Optimizing absorption and digestion.",
      sections: [
        { heading: "Priorities", content: ["Small frequent meals", "Low residue diet during diarrhea", "Cooked vegetables only"] },
        { heading: "Avoid", content: ["Raw greens", "Heavy oily gravies", "Spicy pickles"] }
      ],
      relatedLinks: [
        { label: "Nausea Management", type: "symptom-detail", slug: "nausea-management" }
      ]
    },
    {
      id: "lung",
      slug: "lung-cancer",
      title: "Lung Cancer Nutrition",
      icon: "🫁",
      description: "Managing fatigue and breathlessness during meals.",
      sections: [
        { heading: "Priorities", content: ["Rest before eating", "Energy-dense small portions", "High protein intake"] },
        { heading: "Red Flags", content: ["Severe breathlessness during meals", "Difficulty coughing up phlegm"] }
      ]
    },
    {
      id: "gynaec",
      slug: "gynaec-cancer",
      title: "Gynaec Cancer Nutrition",
      icon: "🌸",
      description: "Support for abdominal comfort and recovery.",
      sections: [
        { heading: "Priorities", content: ["Hydration", "Light easily digestible meals", "Iron-rich foods"] },
        { heading: "Managing Bloating", content: ["Small portions", "Chew slowly", "Avoid carbonated drinks"] }
      ]
    },
    {
      id: "caregivers-support",
      slug: "supporting-nutrition",
      title: "Supporting Nutrition",
      icon: "🤝",
      description: "Practical ways to help your loved one eat better.",
      sections: [
        { heading: "Action Checklist", content: [
          "Offer small portions frequently (every 2 hours)",
          "Keep high-protein snacks visible and reachable",
          "Experiment with seasonings (if no sores)",
          "Mealtime should be peaceful, not a battlefield"
        ]},
        { heading: "Communication", content: ["Don't comment on how 'little' they are eating", "Focus on progress"] }
      ]
    },
    {
      id: "caregivers-compassion",
      slug: "feeding-with-compassion",
      title: "Feeding with Compassion",
      icon: "🍲",
      description: "Nurturing the patient beyond just calories.",
      sections: [
        { heading: "The Approach", content: ["Respect food aversions", "Socialize during meals", "Validate their struggle"] }
      ]
    },
    {
      id: "caregivers-burnout",
      slug: "emotional-burnout",
      title: "Preventing Burnout",
      icon: "🕯️",
      description: "Caring for the caregiver.",
      sections: [
        { heading: "Self-Care", content: ["Take 20 mins for yourself daily", "Ask family for help", "Talk to friends"] }
      ]
    },
    {
      id: "recovery-weight",
      slug: "weight-recovery",
      title: "Weight Recovery",
      icon: "⚖️",
      description: "Regaining strength after treatment.",
      sections: [
        { heading: "Nutrition Goals", content: ["Focus on healthy fats (ghee, nuts)", "Strength training exercises", "Protein fortification"] }
      ],
      relatedLinks: [
        { label: "Long-term Diet", type: "simple-detail", slug: "long-term-diet" }
      ]
    },
    {
      id: "recovery-gut",
      slug: "gut-healing",
      title: "Gut Healing",
      icon: "🧘",
      description: "Restoring digestion balance.",
      sections: [
        { heading: "Steps", content: ["Gradual fiber introduction", "Probiotics (Curd/Buttermilk)", "Hydration"] }
      ]
    },
    {
      id: "recovery-diet",
      slug: "long-term-diet",
      title: "Long-term Diet",
      icon: "🥗",
      description: "Healthy habits for survivors.",
      sections: [
        { heading: "Survivor Plate", content: ["2/3rd plant-based", "1/3rd lean protein", "Limit processed sugar"] }
      ]
    },
    {
      id: "recovery-normal",
      slug: "returning-to-normal-food",
      title: "Return to Normal Food",
      icon: "🥘",
      description: "Transitioning back safely.",
      sections: [
        { heading: "Steps", content: ["Introduce spices slowly", "Monitor body reactions", "Celebrate progress"] }
      ]
    },
    {
      id: "emergency",
      slug: "when-to-call-doctor",
      title: "When to Call Doctor",
      icon: "🚨",
      description: "Red flags to watch out for.",
      sections: [
        { heading: "Emergency Signs", content: ["Fever > 101F", "Severe bleeding", "Inability to drink water for 24h", "Sudden confusion"] },
        { heading: "Clinic Info", content: ["Secretary: 7597207640", "Time: 2 PM - 8 PM"] }
      ]
    }
  ],
  HI: [
    {
      id: "breast",
      slug: "breast-cancer",
      title: "ब्रेस्ट कैंसर पोषण",
      icon: "🎗️",
      description: "वजन और मेटाबॉलिज्म का प्रबंधन।",
      sections: [
        { heading: "मुख्य ध्यान", content: ["वजन नियंत्रण", "फाइबर युक्त आहार", "चीनी कम करें"] },
        { heading: "भारतीय डाइट", content: ["ओट्स/बाजरा", "दही", "दाल/पनीर", "मेवे और बीज"] },
        { heading: "खतरे के संकेत", content: ["वजन का तेजी से बढ़ना", "हाथों में सूजन (Lymphedema)"] }
      ],
      relatedLinks: [
        { label: "कीमोथेरेपी देखभाल", type: "treatment-detail", slug: "chemotherapy-nutrition" }
      ]
    },
    {
      id: "head-neck",
      slug: "head-neck-cancer",
      title: "सिर और गर्दन का कैंसर",
      icon: "👄",
      description: "निगलने की सुरक्षा और कैलोरी बचाना।",
      sections: [
        { heading: "प्राथमिकताएं", content: ["पिसा हुआ (Pureed) भोजन", "उच्च कैलोरी शेक", "सत्तू का शरबत"] },
        { heading: "निगलने की सलाह", content: ["गर्दन झुकाकर (Chin-tuck) निगलें", "गाढ़ा भोजन लें", "छोटे घूंट लें"] },
        { heading: "खतरे के संकेत", content: ["खाते समय खांसी आना", "पूरी तरह निगल न पाना"] }
      ],
      relatedLinks: [
        { label: "नली की देखभाल", type: "device-detail", slug: "ryles-tube" }
      ]
    },
    {
      id: "gi",
      slug: "gi-cancer",
      title: "पाचन तंत्र कैंसर",
      icon: "🍱",
      description: "पोषण के अवशोषण को बढ़ाएं।",
      sections: [
        { heading: "प्राथमिकताएं", content: ["थोड़ा-थोड़ा बार-बार खाएं", "दस्त के दौरान हल्का भोजन", "केवल पकी हुई सब्जियां"] },
        { heading: "इनसे बचें", content: ["कच्ची सलाद", "भारी मसालेदार ग्रेवी", "तीखा अचार"] }
      ],
      relatedLinks: [
        { label: "उल्टी का प्रबंधन", type: "symptom-detail", slug: "nausea-management" }
      ]
    },
    {
      id: "lung",
      slug: "lung-cancer",
      title: "फेफड़ों का कैंसर",
      icon: "🫁",
      description: "थकान और सांस की तकलीफ का प्रबंधन।",
      sections: [
        { heading: "प्राथमिकताएं", content: ["खाने से पहले आराम करें", "उच्च प्रोटीन आहार", "ताकत बढ़ाने वाला भोजन"] },
        { heading: "खतरे के संकेत", content: ["खाते समय सांस फूलना", "कफ निकालने में कठिनाई"] }
      ]
    },
    {
      id: "gynaec",
      slug: "gynaec-cancer",
      title: "गाइनेक कैंसर पोषण",
      icon: "🌸",
      description: "पेट के आराम और रिकवरी में सहायता।",
      sections: [
        { heading: "प्राथमिकताएं", content: ["हाइड्रेशन", "हल्का और सुपाच्य भोजन", "आयरन युक्त खाना"] },
        { heading: "पेट फूलना कम करें", content: ["धीरे चबाएं", "कोल्ड ड्रिंक से बचें"] }
      ]
    },
    {
      id: "caregivers-support",
      slug: "supporting-nutrition",
      title: "पोषण में सहायता",
      icon: "🤝",
      description: "मरीज को बेहतर खिलाने के तरीके।",
      sections: [
        { heading: "चेकलिस्ट", content: [
          "हर 2 घंटे में थोड़ा खिलाएं",
          "प्रोटीन वाली चीजें सामने रखें",
          "स्वाद बदलने के लिए प्रयोग करें",
          "खाने का माहौल शांत रखें"
        ]},
        { heading: "बातचीत", content: ["मरीज के कम खाने पर टोकें नहीं", "उनके सुधार पर ध्यान दें"] }
      ]
    },
    {
      id: "caregivers-compassion",
      slug: "feeding-with-compassion",
      title: "ममता के साथ खिलाएं",
      icon: "🍲",
      description: "मरीज को केवल कैलोरी ही नहीं, प्यार भी दें।",
      sections: [
        { heading: "दृष्टिकोण", content: ["मरीज की पसंद का सम्मान करें", "खाने के समय उनके साथ बैठें", "उनके संघर्ष को समझें"] }
      ]
    },
    {
      id: "caregivers-burnout",
      slug: "emotional-burnout",
      title: "खुद का ख्याल",
      icon: "🕯️",
      description: "देखभाल करने वालों के लिए सलाह।",
      sections: [
        { heading: "स्व-देखभाल", content: ["20 मिनट खुद के लिए निकालें", "परिवार की मदद लें", "दोस्तों से बात करें"] }
      ]
    },
    {
      id: "recovery-weight",
      slug: "weight-recovery",
      title: "वजन और ताकत",
      icon: "⚖️",
      description: "इलाज के बाद शरीर को फिर से मजबूत बनाना।",
      sections: [
        { heading: "पोषण के लक्ष्य", content: [
          "स्वस्थ वसा का उपयोग करें (घी, सूखे मेवे)",
          "प्रोटीन बढ़ाएं (दाल, अंडा, पनीर)",
          "हल्का व्यायाम और योग करें"
        ]}
      ],
      relatedLinks: [
        { label: "दीर्घकालिक आहार", type: "simple-detail", slug: "long-term-diet" }
      ]
    },
    {
      id: "recovery-gut",
      slug: "gut-healing",
      title: "पेट का स्वास्थ्य",
      icon: "🧘",
      description: "पाचन क्रिया को फिर से संतुलित करें।",
      sections: [
        { heading: "कदम", content: ["दही और छाछ (प्रोबायोटिक्स)", "फाइबर धीरे बढ़ाएं", "पर्याप्त पानी पिएं"] }
      ]
    },
    {
      id: "recovery-diet",
      slug: "long-term-diet",
      title: "दीर्घकालिक आहार",
      icon: "🥗",
      description: "इलाज के बाद की स्वस्थ आदतें।",
      sections: [
        { heading: "स्वस्थ थाली", content: ["ज्यादा सब्जियां और फल", "हल्का प्रोटीन", "मीठा कम करें"] }
      ]
    },
    {
      id: "recovery-normal",
      slug: "returning-to-normal-food",
      title: "सामान्य भोजन पर वापसी",
      icon: "🥘",
      description: "धीरे-धीरे सामान्य खाने पर वापस आएं।",
      sections: [
        { heading: "कदम", content: ["मसाले धीरे शुरू करें", "शरीर की प्रतिक्रिया देखें", "धैर्य रखें"] }
      ]
    },
    {
      id: "emergency",
      slug: "when-to-call-doctor",
      title: "डॉक्टर को कब बुलाएं",
      icon: "🚨",
      description: "खतरे के संकेतों की पहचान।",
      sections: [
        { heading: "आपातकालीन संकेत", content: ["101F से ज्यादा बुखार", "भारी खून बहना", "पानी भी न निगल पाना", "अचानक उलझन होना"] },
        { heading: "संपर्क जानकारी", content: ["सचिव: 7597207640", "समय: दोपहर 2 से रात 8"] }
      ]
    }
  ]
};
