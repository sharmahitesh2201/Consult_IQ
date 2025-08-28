
import { GoogleGenAI, GenerateContentResponse, Chat, Content, Part, GroundingMetadata } from "@google/genai";
import { GEMINI_SYSTEM_PROMPT, GEMINI_API_KEY_MESSAGE } from '../constants';

const API_KEY = process.env.API_KEY;

let ai: GoogleGenAI | null = null;
if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
} else {
  console.warn(GEMINI_API_KEY_MESSAGE);
}

export const createChatSession = (): Chat | null => {
  if (!ai) {
    console.error("Gemini AI SDK not initialized. API_KEY might be missing.");
    return null;
  }
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash-preview-04-17',
      config: {
        systemInstruction: GEMINI_SYSTEM_PROMPT,
        // Add other configs like temperature if needed
      },
    });
    return chat;
  } catch (error) {
    console.error("Error creating chat session:", error);
    return null;
  }
};


export async function* streamChatResponse(
  chat: Chat,
  message: string,
  history?: Content[]
): AsyncGenerator<{textChunk: string, groundingMetadata?: GroundingMetadata}, void, undefined> {
  if (!ai) {
    yield { textChunk: "AI Service not available. API Key might be missing." };
    return;
  }

  try {
    // The sendMessageStream method can take history directly if needed,
    // but the Chat object itself maintains history.
    // If you want to explicitly pass history:
    // const stream = await chat.sendMessageStream({ message, history });
    const stream = await chat.sendMessageStream({ message });

    for await (const chunk of stream) { // chunk is GenerateContentResponse
      const textChunk = chunk.text;
      const groundingMetadata = chunk.candidates?.[0]?.groundingMetadata as GroundingMetadata | undefined;
      yield { textChunk, groundingMetadata };
    }
  } catch (error) {
    console.error("Error streaming chat response:", error);
    if (error instanceof Error) {
        yield { textChunk: `Error: ${error.message}` };
    } else {
        yield { textChunk: "An unknown error occurred while fetching the AI response." };
    }
  }
}

export const isGeminiAvailable = (): boolean => !!ai;

// Helper to parse text to JSON, removing markdown fences
export const parseJsonFromText = <T,>(text: string): T | null => {
  let jsonStr = text.trim();
  const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
  const match = jsonStr.match(fenceRegex);
  if (match && match[2]) {
    jsonStr = match[2].trim();
  }
  try {
    return JSON.parse(jsonStr) as T;
  } catch (e) {
    console.error("Failed to parse JSON response:", e, "Original text:", text);
    return null;
  }
};
