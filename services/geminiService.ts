import { GoogleGenAI, Type } from "@google/genai";
import { Book, GeminiModel } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Sends a user query to Gemini and requests a structured JSON response
 * containing book recommendations.
 */
export const getBookRecommendations = async (userQuery: string): Promise<{ text: string, books: Book[] }> => {
  try {
    const model = GeminiModel.FLASH;
    
    // Define the schema for structured output
    const responseSchema = {
      type: Type.OBJECT,
      properties: {
        message: {
          type: Type.STRING,
          description: "A warm, personal message from the bookseller explaining the selection.",
        },
        recommendations: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              author: { type: Type.STRING },
              description: { type: Type.STRING, description: "A one-sentence pitch for why this book fits the user's request." },
              category: { type: Type.STRING },
            },
            required: ["title", "author", "description", "category"],
          },
        },
      },
      required: ["message", "recommendations"],
    };

    const systemInstruction = `
      You are an expert bookseller at Parnassus Books in Nashville. 
      Your tone is warm, literate, and helpful. You love independent bookstores.
      The user will ask for a book recommendation.
      Provide a friendly conversational response and 2-3 specific book recommendations.
      Assume the user wants physical books.
      For the coverUrl, you don't need to provide it in the JSON, the frontend will handle a placeholder.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: userQuery,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.7,
      },
    });

    const jsonText = response.text;
    if (!jsonText) {
      throw new Error("No response from Gemini");
    }

    const data = JSON.parse(jsonText);
    
    // Map the raw JSON to our Book type, adding mock IDs and placeholders
    const books: Book[] = data.recommendations.map((rec: any, index: number) => ({
      id: `rec-${Date.now()}-${index}`,
      title: rec.title,
      author: rec.author,
      description: rec.description,
      category: rec.category,
      price: 25.00, // Default price
      coverUrl: `https://picsum.photos/seed/${encodeURIComponent(rec.title)}/300/450`, // Deterministic placeholder
      isStaffPick: false
    }));

    return {
      text: data.message,
      books: books
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "I'm having a little trouble checking the shelves right now. Could you ask me again in a moment?",
      books: []
    };
  }
};
