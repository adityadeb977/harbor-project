# Harbor: Stress Level Prediction & AI Recommendations

Harbor is a web application that predicts your stress level based on input data and provides AI-powered recommendations using Google's Gemini API. The project consists of a React (Vite) frontend and a FastAPI backend with a machine learning model.

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

- **Frontend:** Deploy the `frontend` folder to Vercel or Netlify.
- **Backend:** Deploy the `backend` folder to a Python-friendly host (e.g., Railway, Render, Fly.io).

> **Note:** Vercel serverless functions may not support heavy ML dependencies. For best results, use a dedicated Python host for the backend.

---

## License

MIT

---

## Credits

- [FastAPI](https://fastapi.tiangolo.com/)
- [Vite](https://vitejs.dev/)
- [scikit-learn](https://scikit-learn.org/)
- [Google Gemini API](https
