import { useLocation } from "react-router-dom"

function Report() {
  const location = useLocation()
  const { prediction } = location.state || {}

  return (
    <div>
      <h1>Prediction Report</h1>
      {prediction ? (
        <pre>{JSON.stringify(prediction, null, 2)}</pre>
      ) : (
        <p>No prediction data found.</p>
      )}
    </div>
  )
}

export default Report
