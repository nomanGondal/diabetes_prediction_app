import { useState } from "react"
import "./prediction.css"
import axios from "axios"
import { API_URL } from "../constants"

function Prediction() {
  const [formData, setFormData] = useState({
    BMI: "",
    HighBP: "",
    HighChol: "",
    Age: "",
    PhysActivity: "",
    HeartDiseaseorAttack: "",
    GenHlth: "",
    PhysHlth: "",
    DiffWalk: "",
  })

  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    for (const key in formData) {
      if (!formData[key]) {
        alert(`Please fill the field: ${key}`)
        return
      }
    }

    setLoading(true)
    try {
      const response = await axios.post(API_URL, formData)
      setResult(response.data.data)
    } catch (err) {
      console.error(err)
      alert("Error connecting to server. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="prediction-container">
      <h1 className="prediction-title">Diabetes Risk Prediction</h1>
      <p className="prediction-subtitle">
        Fill in your health information below to check your diabetes risk.
      </p>

      <div className="prediction-content">
        <form className="prediction-form" onSubmit={handleSubmit}>
          {/* BMI */}
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

          {/* HighBP */}
          <div className="form-group">
            <label>High Blood Pressure</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="HighBP"
                  value="0"
                  checked={formData.HighBP === 0}
                  onChange={() => setFormData({ ...formData, HighBP: 0 })}
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

          {/* Highchol */}
          <div className="form-group">
            <label>High Cholesterol level</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="HighChol"
                  value="0"
                  checked={formData.HighChol === 0}
                  onChange={() => setFormData({ ...formData, HighChol: 0 })}
                />
                No
              </label>

              <label>
                <input
                  type="radio"
                  name="HighChol"
                  value="1"
                  checked={formData.HighChol === 1}
                  onChange={() => setFormData({ ...formData, HighChol: 1 })}
                />
                Yes
              </label>
            </div>
          </div>

          {/* Age */}
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

          {/* PhysActivity */}
          <div className="form-group">
            <label htmlFor="PhysActivity">
              Physically Active (Yes=1 / No=0)
            </label>
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

          {/* HeartDiseaseorAttack */}
          <div className="form-group">
            <label htmlFor="HeartDiseaseorAttack">
              Heart Disease or Attack (Yes=1 / No=0)
            </label>
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

          {/* GenHlth */}
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

          {/* PhysHlth */}
          <div className="form-group">
            <label htmlFor="PhysHlth">Physical Health (0-30 days)</label>
            <input
              type="number"
              name="PhysHlth"
              id="PhysHlth"
              value={formData.PhysHlth}
              onChange={handleChange}
              placeholder="Enter number of unhealthy days"
              required
              min="0"
              max="30"
            />
          </div>

          <div className="form-group">
            <label htmlFor="DiffWalk">Difficulty Walking (Yes=1 / No=0)</label>
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
        </form>

        <div className="prediction-result">
          {result && (
            <div className={`result-card ${result.toLowerCase()}`}>
              <h2>Prediction Result</h2>
              <p>
                {result === "Positive"
                  ? "High risk of diabetes"
                  : "Low risk of diabetes"}
              </p>
            </div>
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
