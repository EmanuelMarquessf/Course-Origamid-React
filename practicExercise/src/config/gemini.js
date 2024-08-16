
import { apiKey } from './config'
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(apiKey);

export const jsonModel = genAI.getGenerativeModel({model: "gemini-1.5-flash", generationConfig: {responseMimeType: "application/json"}})

export const textModel = genAI.getGenerativeModel({model: "gemini-pro"});
