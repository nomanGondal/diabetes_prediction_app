import axios from "axios"

export const getGeminiSuggestions = async (prediction) => {
  try {
    const text =
      prediction === 1
        ? "The user has a positive diabetes risk. Suggest lifestyle improvements and health tips in short points."
        : "The user has a negative diabetes risk. Suggest recommendations to maintain good health in short points."

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        contents: [
          {
            parts: [
              {
                text,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": "AIzaSyCKnUKO3A_8JGgVUBDxxfC-26Xvwu1Tm5U", // replace with your key
        },
      }
    )

    // Correct access path
    const suggestion =
      response?.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No suggestions found."

    console.log("Gemini suggestion:", response)
    return suggestion
  } catch (err) {
    console.error("Gemini API error:", err)
    return "Unable to fetch suggestions."
  }
}
