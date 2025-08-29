from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np
import google.generativeai as genai
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Configure Gemini API
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    print("Warning: GEMINI_API_KEY not found in environment variables!")
    print("Please check your .env file")
else:
    print(f"✅ Gemini API Key loaded successfully (length: {len(GEMINI_API_KEY)})")

genai.configure(api_key=GEMINI_API_KEY)

# Load models
model = joblib.load("stress_model.pkl")
gemini_model = genai.GenerativeModel("gemini-1.5-flash")

app = FastAPI()

# ✅ CORS Fix - Updated for deployment
cors_origins = [
    "http://localhost:5173",  # Local development
    "http://localhost:3000",  # Alternative local port
    "http://127.0.0.1:5173",  # Alternative local host
]

# Add production frontend URL if available
frontend_url = os.getenv("FRONTEND_URL")
if frontend_url:
    cors_origins.append(frontend_url)

app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class StressInput(BaseModel):
    anxiety_level: int
    self_esteem: int
    mental_health_history: int
    depression: int
    headache: int
    blood_pressure: int
    sleep_quality: int
    breathing_problem: int
    noise_level: int
    living_conditions: int
    safety: int
    basic_needs: int
    academic_performance: int
    study_load: int
    teacher_student_relationship: int
    future_career_concerns: int
    social_support: int
    peer_pressure: int
    extracurricular_activities: int
    bullying: int
@app.get("/")
def read_root():
    return {"status": "healthy"}

@app.post("/predict")
def predict_stress(data: StressInput):
    # Original model prediction
    input_data = np.array([[getattr(data, col) for col in data.model_dump().keys()]])
    prediction = model.predict(input_data)[0]
    stress_level = int(prediction)
    
    stress_label = "Low" if stress_level == 0 else "Medium" if stress_level == 1 else "High"

    # Generate AI recommendations with Gemini
    try:
        prompt = f"""
        A user has a predicted stress level of '{stress_label}'. 
        Based on their assessment data below, provide 5-7 detailed, practical, and encouraging recommendations.
        
        Important formatting requirements:
        - Use simple bullet points (•) at the start of each recommendation
        - Make each recommendation 2-3 sentences long with specific, actionable advice
        - Include practical implementation steps and explain why each recommendation helps
        - Keep the tone supportive and encouraging
        - Do NOT use any markdown formatting like **bold** or headers
        - Format as plain text with bullet points only

        Focus on these key areas based on their stress level:
        - Stress management techniques and coping strategies  
        - Physical wellness and lifestyle improvements
        - Mental health support and emotional regulation
        - Social support and relationship building
        - Academic/work-life balance and productivity
        - Sleep, nutrition, and daily routine optimization

        User Assessment Data:
        {data.model_dump_json(indent=2)}
        
        Provide comprehensive yet easy-to-follow recommendations that address their specific stress factors.
        """
        response = gemini_model.generate_content(prompt)
        ai_recommendations = response.text.strip()
    except Exception as e:
        print(f"❌ Gemini API error: {type(e).__name__}: {e}")
        print(f"API Key present: {'Yes' if GEMINI_API_KEY else 'No'}")
        print(f"API Key length: {len(GEMINI_API_KEY) if GEMINI_API_KEY else 0}")
        ai_recommendations = f"Could not generate AI recommendations at this time. Error: {str(e)}"

    return {"stress_level": stress_level, "ai_recommendations": ai_recommendations}
