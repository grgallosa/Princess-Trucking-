
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getFleetRecommendation = async (requirementDescription: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User has a project or transport requirement: "${requirementDescription}". 
      Available fleet types: 
      - 12 Wheeler Wing Van (25 ton, high volume, general cargo distribution)
      - Dump Truck (20 cubic yard, construction aggregates, earthmoving, mining)
      - Tractor Head (45 ton, heavy haulage, long distance logistics)
      - Concrete Mixer (8 cubic meter, ready-mix concrete for construction)
      - Water Tanker (10k liters, water supply, dust control, irrigation)
      - Boom Truck (Lifting + transport of materials)
      - Excavator (Earthmoving, digging, site preparation)
      - Self Loader (Heavy equipment hauling/recovery)
      - Bulldozer (Site clearing, leveling, road work)
      - Loader (Material handling, loading aggregates)
      - Road Roller (Compaction for infrastructure)
      - Crane Truck (Precision lifting for industrial installs)
      
      Recommend the best vehicle or equipment for their specific operational need and explain why briefly. Return in JSON format.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendation: { type: Type.STRING },
            reasoning: { type: Type.STRING },
            suitableTruckType: { type: Type.STRING }
          },
          required: ["recommendation", "reasoning", "suitableTruckType"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};
