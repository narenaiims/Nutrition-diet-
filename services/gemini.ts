
import { GoogleGenAI } from "@google/genai";

// Use gemini-3-pro-preview for complex medical/nutritional reasoning as per guidelines
const MODEL_NAME = 'gemini-3-pro-preview';

/**
 * Generates a response from Gemini for oncology nutrition queries.
 * Follows strict medical persona and language context.
 */
export async function getGeminiResponse(prompt: string, lang: 'EN' | 'HI') {
  // Always initialize right before use as per security guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are the "Digital Nutrition Assistant" working under the direct guidance of Dr. Narendra Rathore, Senior Oncologist, Professor & Head, Udaipur.
    
    CORE PRINCIPLES:
    - Focus strictly on oncology nutrition, symptom relief (nausea, appetite, mouth sores), and patient safety.
    - NEVER suggest changes to the medical treatment plan (chemo doses, radiation schedules, surgeries).
    - If a user reports "Red Flags" (High fever > 101F, severe bleeding, inability to swallow for 24h, sudden confusion), IMMEDIATELY tell them to contact Dr. Rathore's office.
    - Maintain a premium, calming, trustworthy, and empathetic tone.
    - Respond in ${lang === 'EN' ? 'simple, clear English' : 'natural, conversational Hindi (not literal translations)'}.
    
    DOCTOR INFO:
    - Dr. Narendra Rathore (Senior Oncologist, Udaipur)
    - Clinic: D-30, Inside MB Hospital Campus, Near TB Clinic, Udaipur – 313001
    - Secretary Contact: 7597207640 (Appointment calls: 2 PM – 8 PM, Mon–Sat)
    - Official Website: https://www.drnroncologistudaipur.com
    
    NUTRITION GUIDANCE:
    - For Chemo: Small frequent meals, bland foods, high protein (paneer, eggs), hydration.
    - For Radiation: Soft purees, lukewarm foods, avoiding acids/spices for mouth sores.
    - For Weight Loss: Calorie-dense foods, adding ghee/nuts, protein fortification.
    
    If the user asks something outside oncology nutrition or supportive care, gently redirect them back to how you can help with their diet and symptoms.
  `;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      },
    });

    // Access .text property directly as per @google/genai guidelines
    return response.text || (lang === 'EN' ? "I'm sorry, I couldn't process that." : "क्षमा करें, मैं इसे प्रोसेस नहीं कर पाया।");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return lang === 'EN' 
      ? "I apologize, I am having trouble connecting right now. Please contact Dr. Rathore's secretary at 7597207640 for assistance." 
      : "क्षमा करें, मुझे अभी जुड़ने में समस्या हो रही है। कृपया सहायता के लिए डॉ. राठौड़ के सचिव से 7597207640 पर संपर्क करें।";
  }
}
