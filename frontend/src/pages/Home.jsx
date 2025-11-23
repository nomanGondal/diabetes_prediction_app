import "./home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToPredict = () => {
    navigate("/predict");
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="title">Diabetes Prediction System</h1>
        <p className="subtitle">
          Early detection can help you take control of your health.  
          Use our advanced Deep learning model to check your diabetes risk instantly.
        </p>

        <button className="predict-btn" onClick={goToPredict}>
          Check Diabetes
        </button>
      </div>

      <div className="hero-image">
        {/* Add your own image or leave blank */}
      </div>
    </div>
  );
}

export default Home;
