
import { GoogleGenAI } from "@google/genai";

export const askGemini = async (prompt: string, history: { role: string, content: string }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const formattedHistory = history.map(h => ({
      role: h.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: h.content }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...formattedHistory,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: `You are the AI Assistant for a top-tier Senior React Engineer. 
        Your goal is to explain the projects in this portfolio (Nexus Hub, Aether CRM, Prueba M2 Evolved).
        Be professional, technically savvy, and slightly futuristic. 
        Keep responses concise and helpful. 
        If asked about the creator, emphasize their expertise in React, TypeScript, and high-end UI design.`,
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      }
    });

    return response.text || "I'm sorry, I couldn't process that. My neural links are briefly interrupted.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The uplink is unstable. Please check your connection or API key.";
  }
};
