import { useState } from "react"
import "./prediction.css"
import { getGeminiSuggestions } from "../apiCalls/gemini-call"
import { getPrediction } from "../apiCalls/prediction-call"

function Prediction() {
  const initialFormData = {
    BMI: "",
    HighBP: null,
    HighChol: null,
    Age: "",
    PhysActivity: "",
    HeartDiseaseorAttack: "",
    GenHlth: "",
    PhysHlth: "",
    DiffWalk: "",
  }

  const [formData, setFormData] = useState(initialFormData)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [suggestions, setSuggestions] = useState("")
  const [suggestionLoading, setSuggestionLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    for (const key in formData) {
      if (formData[key] === "") {
        alert(`Please fill the field: ${key}`)
        return
      }
    }

    setLoading(true)
    setSuggestionLoading(true)
    setSuggestions("") // Clear previous suggestions

    try {
      // Call the prediction API
      const predictionData = await getPrediction(formData)
      setResult(predictionData.data)

      // Gemini API call
      const suggestionText = await getGeminiSuggestions(predictionData.prediction)
      setSuggestions(suggestionText)

      // Reset form
      setFormData(initialFormData)
    } catch (err) {
      console.error("Error in handleSubmit:", err)
      setSuggestions("Unable to fetch suggestions.")
    } finally {
      setLoading(false)
      setSuggestionLoading(false)
    }
  }

  const handleRecheck = () => {
    window.location.reload() // Full page refresh
  }

  return (
    <div className="prediction">
      <div className="prediction-content">
        <form className="prediction-form" onSubmit={handleSubmit}>
          {/* Horizontal rows */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="BMI">BMI</label>
              <input
                type="number"
                name="BMI"
                id="BMI"
                value={formData.BMI}
                onChange={handleChange}
                placeholder="Enter BMI"
                required
                min="12"
                max="100"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Age">Age</label>
              <input
                type="number"
                name="Age"
                id="Age"
                value={formData.Age}
                onChange={handleChange}
                placeholder="Enter Age"
                required
                min="0"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>High Blood Pressure</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="HighBP"
                    value="0"
                    checked={formData.HighBP === 0}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        HighBP: Number(e.target.value),
                      })
                    }
                  />
                  No
                </label>
                <label>
                  <input
                    type="radio"
                    name="HighBP"
                    value="1"
                    checked={formData.HighBP === 1}
                    onChange={() => setFormData({ ...formData, HighBP: 1 })}
                  />
                  Yes
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>High Cholesterol</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="HighChol"
                    value="0"
                    checked={formData.HighChol === 0}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        HighChol: Number(e.target.value),
                      })
                    }
                  />
                  No
                </label>
                <label>
                  <input
                    type="radio"
                    name="HighChol"
                    value="1"
                    checked={formData.HighChol === 1}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        HighChol: Number(e.target.value),
                      })
                    }
                  />
                  Yes
                </label>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="PhysActivity">Physically Active (0/1)</label>
              <input
                type="number"
                name="PhysActivity"
                id="PhysActivity"
                value={formData.PhysActivity}
                onChange={handleChange}
                placeholder="0 or 1"
                required
                min="0"
                max="1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="HeartDiseaseorAttack">Heart Disease (0/1)</label>
              <input
                type="number"
                name="HeartDiseaseorAttack"
                id="HeartDiseaseorAttack"
                value={formData.HeartDiseaseorAttack}
                onChange={handleChange}
                placeholder="0 or 1"
                required
                min="0"
                max="1"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="GenHlth">General Health (1-5)</label>
              <input
                type="number"
                name="GenHlth"
                id="GenHlth"
                value={formData.GenHlth}
                onChange={handleChange}
                placeholder="1=Excellent, 5=Poor"
                required
                min="1"
                max="5"
              />
            </div>
            <div className="form-group">
              <label htmlFor="PhysHlth">Physical Health (0-30)</label>
              <input
                type="number"
                name="PhysHlth"
                id="PhysHlth"
                value={formData.PhysHlth}
                onChange={handleChange}
                placeholder="Unhealthy days"
                required
                min="0"
                max="30"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="DiffWalk">Difficulty Walking (0/1)</label>
            <input
              type="number"
              name="DiffWalk"
              id="DiffWalk"
              value={formData.DiffWalk}
              onChange={handleChange}
              placeholder="0 or 1"
              required
              min="0"
              max="1"
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Predicting..." : "Check Risk"}
          </button>

          <div className="instruction-box">
            <h4>Instructions:</h4>
            <p>
              Fill all fields accurately. Use 0 or 1 for yes/no questions. Enter
              numbers for health stats.
            </p>
          </div>
        </form>

        <div className="prediction-result">
          {result && (
            <div
              className={`result-card ${
                result.predication === 1 ? "positive" : "negative"
              }`}
            >
              <p>
                Prediction: {result.predication === 1 ? "Positive" : "Negative"}
              </p>
              <p>Probability: {(result.prob * 100).toFixed(2)}%</p>
            </div>
          )}

          <div className="suggestion-box">
            <h3>Suggestions / Recommendations</h3>
            {suggestionLoading ? (
              <div className="loader"></div>
            ) : (
              <div style={{ whiteSpace: "pre-line" }}>
                {suggestions.replace(/\*\*/g, "").replace(/\*/g, "•")} There are
                no suggestions for now.
              </div>
            )}
          </div>
          {result && (
            <button className="recheck-btn" onClick={handleRecheck}>
              Recheck
            </button>
          )}

          <div className="tips-card">
            <h3>Health Tips</h3>
            <ul>
              <li>Maintain a healthy diet and balanced nutrition.</li>
              <li>Exercise regularly to stay active.</li>
              <li>Monitor your blood pressure and cholesterol.</li>
              <li>Schedule routine check-ups with your doctor.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prediction
