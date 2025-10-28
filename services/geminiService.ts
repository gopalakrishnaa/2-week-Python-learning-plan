
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available, but handle it gracefully if not.
const apiKey = process.env.API_KEY;
if (!apiKey) {
    console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}
const ai = new GoogleGenAI({ apiKey: apiKey || '' });

export const getProjectInspiration = async (projectTitle: string, projectDescription: string): Promise<string> => {
    if (!apiKey) {
        return Promise.resolve("Error: Gemini API key is not configured. Please set the API_KEY environment variable.");
    }
    try {
        const prompt = `
You are an expert programming mentor providing inspiration for a Python portfolio project.
The user is working on a project titled: "${projectTitle}".
The brief description is: "${projectDescription}".

Please provide the following in well-structured Markdown format:

### 🚀 Project Deep Dive
Briefly expand on the project idea. What are the core features?

### 🛠️ Key Steps & Technologies
Outline a clear, step-by-step plan to build this project. Suggest specific Python libraries (like BeautifulSoup, Flask, Pandas, etc.) that would be useful.

### ✨ Alternative Ideas
Suggest 2-3 creative variations or alternative project ideas related to the original concept. For example, if the project is a web scraper for job listings, suggest scraping e-commerce sites or social media trends.

### 🏆 Pro Tip
Give one valuable tip for making this project stand out in a portfolio.

Keep the tone encouraging and practical. Use markdown for formatting, including headers, bold text, and lists.
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        
        return response.text;
    } catch (error) {
        console.error("Error fetching project inspiration:", error);
        return "Sorry, I couldn't fetch any ideas right now. Please check your API key configuration and network connection, then try again.";
    }
};
