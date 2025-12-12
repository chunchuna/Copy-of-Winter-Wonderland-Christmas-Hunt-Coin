import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Safely initialize, but allow app to run even if key is missing (fallback mode)
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const judgeMiniGame = async (context: string): Promise<string> => {
   if (!ai) return "Merry Christmas!";
   try {
     const response = await ai.models.generateContent({
       model: 'gemini-2.5-flash',
       contents: `Give a short, 1-sentence festive congratulation for: ${context}`,
     });
     return response.text || "Merry Christmas!";
   } catch (e) {
     return "Merry Christmas!";
   }
}