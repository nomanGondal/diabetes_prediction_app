# Diabetes Prediction App

A full-stack web application that helps users estimate their risk of diabetes using health indicators and an AI-assisted recommendation layer. The app combines a React frontend, an Express backend, and a prediction service that communicates with a Flask-based model endpoint.

## Overview

This project is designed for quick and user-friendly risk screening. Users enter common health metrics such as BMI, age, cholesterol status, general health, and physical activity levels. The application sends those inputs to the backend, which forwards them to the prediction service, and then displays the result along with personalized health guidance.

The system is particularly useful for:

- Individuals who want a quick self-assessment
- Health-tech demos and educational projects
- Internal prototypes for predictive healthcare tools
- Experiments combining ML predictions with AI-generated health tips

## Features

- Responsive React user interface
- Diabetes risk prediction form
- Real-time health score evaluation
- AI-generated wellness suggestions using Gemini
- Backend API for processing prediction requests
- Separation of frontend, API logic, and prediction service

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Axios

### Backend
- Node.js
- Express
- CORS
- Morgan

### Prediction Layer
- Flask-based prediction service (expected at http://localhost:5000)
- External model inference endpoint

## Project Structure

```bash
diabetespredict/
├── backend/
│   ├── controller/
│   ├── router/
│   ├── services/
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── package-lock.json
└── README.md
```

## How It Works

1. The user fills in the form on the React frontend.
2. The frontend sends the data to the Express backend API at `/prediction/get-form-data`.
3. The backend prepares the feature vector and forwards it to the Flask prediction service.
4. The prediction service evaluates the input and returns a result.
5. The frontend displays the prediction and requests supplementary suggestions from the Gemini API.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (recommended v18 or newer)
- npm
- A running Flask prediction service on port 5000
- Access to the Gemini API key if you want suggestions enabled

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/nomanGondal/diabetes_prediction_app.git
cd diabetes_prediction_app
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

```bash
cd ../backend
npm install
```

## Running the Application

### Start the backend

```bash
cd backend
npm start
```

The backend runs on:

```bash
http://localhost:3000
```

### Start the frontend

```bash
cd frontend
npm run dev
```

The frontend typically runs on:

```bash
http://localhost:5173
```

### Start the prediction service

This application expects a Flask API to be available at:

```bash
http://localhost:5000/predict
```

If you are using a custom Python model service, make sure it accepts a JSON payload in the format expected by the backend.

## API Endpoint

### Prediction endpoint

```http
POST http://localhost:3000/prediction/get-form-data
```

Request body example:

```json
{
  "BMI": 28.5,
  "HighBP": 1,
  "HighChol": 1,
  "Age": 45,
  "PhysActivity": 0,
  "HeartDiseaseorAttack": 0,
  "GenHlth": 3,
  "PhysHlth": 5,
  "DiffWalk": 0
}
```

## Usage

1. Open the frontend in your browser.
2. Click the "Check Diabetes" button.
3. Enter the required health details.
4. Submit the form.
5. Review the prediction result and the suggested health recommendations.

## Notes

- The project uses a hardcoded Gemini API key in the current frontend implementation; for production use, move this to a secure environment variable.
- The prediction pipeline depends on the Flask service being active before sending requests.
- This app is intended for demonstration and educational use and should not be treated as a medical diagnostic tool.

## License

This project is available for educational and personal use. Please check repository licensing requirements before deploying in a production or commercial environment.

## Contributing

Contributions are welcome. If you would like to improve the project, you can:

- Improve the prediction model integration
- Enhance the UI/UX
- Add validation and error handling
- Secure API configuration
- Expand health recommendation logic

