import axios from "axios"
import { API_URL } from "../constants"

export const getPrediction = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    return response.data
  } catch (error) {
    console.error("Error fetching prediction:", error)
    throw error
  }
}