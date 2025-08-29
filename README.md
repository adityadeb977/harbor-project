# Harbor: Stress Level Prediction & AI Recommendations

Harbor is a web application that predicts your stress level based on input data and provides AI-powered recommendations using Google's Gemini API. The project consists of a React (Vite) frontend and a FastAPI backend with a machine learning model.

## 🚀 Live Demo
- **Frontend:** (https://harbor-project.vercel.app)
- **Backend API:** (https://harbor-project.onrender.com)

---

## Features

- 🚦 **Stress Level Prediction:** Upload or enter your data to get instant stress level predictions (Low/Medium/High).
- 🤖 **AI Recommendations:** Get personalized suggestions powered by Gemini AI.
- 📊 **Modern UI:** Responsive, glassmorphism-inspired interface.
- ⚡ **FastAPI Backend:** Handles ML inference and AI integration.
- 🧠 **Machine Learning:** Uses scikit-learn for stress prediction.

---

## Project Structure

```
Harbor/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── .env
├── frontend/
│   ├── src/
│   ├── package.json
│   └── .env
└── README.md
```

---

## Getting Started (Local Development)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/Harbor.git
cd Harbor
```

### 2. Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # On Windows
source venv/bin/activate  # On Mac/Linux

pip install -r requirements.txt
```

- Create a `.env` file in `backend/` with your Gemini API key:
  ```
  GEMINI_API_KEY=your-gemini-api-key
  ```

- Start the backend server:
  ```bash
  uvicorn app:app --reload
  ```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

- Create a `.env` file in `frontend/`:
  ```
  VITE_API_BASE_URL=http://localhost:8000
  ```

- Start the frontend:
  ```bash
  npm run dev
  ```

- Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Deployment

This project is deployed using:
- **Frontend:** Vercel ([Live Demo](https://harbor-project.vercel.app))
- **Backend:** Render ([API Endpoint](https://harbor-project.onrender.com))

### Deploy Your Own

#### Frontend (Vercel)
1. Fork this repository
2. Connect your GitHub repo to Vercel
3. Set root directory to `frontend`
4. Add environment variable: `VITE_API_BASE_URL=your-backend-url`
5. Deploy

#### Backend (Render/Railway/Fly.io)
1. Create a new service on your preferred platform
2. Connect your GitHub repo
3. Set root directory to `backend`
4. Add environment variable: `GEMINI_API_KEY=your-api-key`
5. Deploy

---

## API Endpoints

- `GET /` - Health check
- `POST /predict` - Stress level prediction
- `POST /recommend` - AI recommendations

---

## Tech Stack

- **Frontend:** React, Vite, JavaScript
- **Backend:** FastAPI, Python
- **ML:** scikit-learn, joblib
- **AI:** Google Gemini API
- **Deployment:** Vercel (Frontend) + Render (Backend)

---

## License

MIT

---

## Credits

- [FastAPI](https://fastapi.tiangolo.com/)
- [Vite](https://vitejs.dev/)
- [scikit-learn](https://scikit-learn.org/)
- [Google Gemini API](https://ai.google.dev/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Vite](https://vitejs.dev/)
- [scikit-learn](https://scikit-learn.org/)
- [Google Gemini API](https
