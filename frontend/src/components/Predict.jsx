import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const fields = [
  "anxiety_level",
  "self_esteem",
  "mental_health_history",
  "depression",
  "headache",
  "blood_pressure",
  "sleep_quality",
  "breathing_problem",
  "noise_level",
  "living_conditions",
  "safety",
  "basic_needs",
  "academic_performance",
  "study_load",
  "teacher_student_relationship",
  "future_career_concerns",
  "social_support",
  "peer_pressure",
  "extracurricular_activities",
  "bullying",
];

const maxValues = {
  anxiety_level: 21,
  self_esteem: 30,
  mental_health_history: 1,
  depression: 27,
  headache: 5,
  blood_pressure: 3,
  sleep_quality: 5,
  breathing_problem: 5,
  noise_level: 5,
  living_conditions: 5,
  safety: 5,
  basic_needs: 5,
  academic_performance: 5,
  study_load: 5,
  teacher_student_relationship: 5,
  future_career_concerns: 5,
  social_support: 3,
  peer_pressure: 5,
  extracurricular_activities: 5,
  bullying: 5,
};

const initial = fields.reduce((acc, k) => ({ ...acc, [k]: 0 }), {});

const Predict = () => {
  const [formData, setFormData] = useState(initial);
  const [result, setResult] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const reduceMotion = useReducedMotion();

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  const fadeIn = {
    opacity: 1,
    transform: "translateY(0)",
    transition: "all 0.7s cubic-bezier(0.4,0,0.2,1)",
  };
  const fadeOut = {
    opacity: 0,
    transform: "translateY(40px)",
  };

  const handleChange = (name, value) => {
    setFormData((s) => ({ ...s, [name]: Number(value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";
      const res = await fetch(`${apiUrl}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setResult(data);
      // Store in localStorage
      const history = JSON.parse(localStorage.getItem("stress_history") || "[]");
      history.unshift({
        inputs: { ...formData },
        result: data.stress_level,
        date: new Date().toLocaleString(),
      });
      localStorage.setItem("stress_history", JSON.stringify(history.slice(0, 50)));
    } catch (err) {
      console.error("Error:", err);
      setResult({ error: "Error fetching prediction" });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData(initial);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#BDDDFC] via-[#e0e7ff] to-[#f3f4f6] pb-0 relative overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-pink-400/15 to-yellow-400/15 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400/25 to-blue-400/25 rounded-full blur-lg"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        
        {/* Parallax background elements */}
        <motion.div 
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-500/60 rounded-full"
          variants={pulseVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-2/3 left-1/3 w-3 h-3 bg-purple-500/50 rounded-full"
          variants={pulseVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        />
      </div>
      
      <div
        className="max-w-7xl mx-auto px-6 pt-8 pb-20 relative z-10"
        style={show ? fadeIn : fadeOut}
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl mb-6 animate-fadeInUp">
            <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#384959] mb-4 animate-fadeInUp" style={{animationDelay: '0.1s', animationFillMode: 'both', animationName: 'fadeInUp'}}>
            Predict Your Stress Level
          </h1>
          <p className="text-lg text-[#384959]/80 max-w-2xl mx-auto animate-fadeInUp" style={{animationDelay: '0.2s', animationFillMode: 'both', animationName: 'fadeInUp'}}>
            Answer a few questions about your current lifestyle and mental state to get personalized stress insights and AI-powered recommendations.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 p-8 mb-8 animate-fadeInUp" style={{animationDelay: '0.3s', animationFillMode: 'both', animationName: 'fadeInUp'}}>
          
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-sm text-[#384959]/60 mb-2">
              <span>Progress</span>
              <span>{Object.values(formData).filter(v => v > 0).length}/{fields.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(Object.values(formData).filter(v => v > 0).length / fields.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Form Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
              {fields.map((field, i) => (
                <div
                  key={field}
                  className="group animate-fadeInUp"
                  style={{
                    animationDelay: `${0.05 * i + 0.4}s`,
                    animationFillMode: "both",
                    animationName: "fadeInUp",
                  }}
                >
                  <label className="block text-[#384959] font-semibold mb-2 text-sm">
                    {field
                      .replaceAll("_", " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </label>
                  <div className="relative">
                    <select
                      name={field}
                      value={formData[field]}
                      onChange={(e) => handleChange(field, e.target.value)}
                      required
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm bg-white shadow-sm focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 hover:border-blue-300 transition-all duration-200 group-hover:shadow-md"
                    >
                      {Array.from({ length: maxValues[field] + 1 }, (_, i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                    <div className="absolute top-0 right-0 mt-1 mr-1">
                      <span className="inline-block text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                        max: {maxValues[field]}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-8 rounded-2xl shadow-lg text-lg font-semibold tracking-wide transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed min-w-[200px]"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <path d="M13 7l5 5-5 5M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Predict Stress Level
                  </>
                )}
              </button>
              
              <button
                type="button"
                onClick={resetForm}
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#384959] py-4 px-6 rounded-2xl shadow-md text-lg font-medium transition-all duration-200"
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path d="M3 12a9 9 0 019-9 9.75 9.75 0 016.74 2.74L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 3v5h-5M21 12a9 9 0 01-9 9 9.75 9.75 0 01-6.74-2.74L3 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 16l-3 3-5-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Reset Form
              </button>
            </div>
          </form>
        </div>

        {/* Results Section */}
        {result && (
          <div className="animate-fadeInUp">
            {result.error ? (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-800 mb-2">Prediction Error</h3>
                <p className="text-red-600">{result.error}</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Stress Level Result */}
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50 p-8 text-center">
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
                      result.stress_level === 0 ? 'bg-green-100' : 
                      result.stress_level === 1 ? 'bg-yellow-100' : 'bg-red-100'
                    }`}>
                      {result.stress_level === 0 && (
                        <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {result.stress_level === 1 && (
                        <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {result.stress_level === 2 && (
                        <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                          <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <h2 className="text-3xl font-bold text-[#384959] mb-2">
                      Predicted Stress Level
                    </h2>
                    <p className={`text-2xl font-bold ${
                      result.stress_level === 0 ? 'text-green-600' : 
                      result.stress_level === 1 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {result.stress_level === 0 ? "Low" : result.stress_level === 1 ? "Medium" : "High"}
                    </p>
                  </div>
                </div>

                {/* AI Recommendations */}
                {result.ai_recommendations && (
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-[#384959]">
                        AI-Powered Recommendations
                      </h3>
                    </div>
                    <div className="prose prose-lg text-[#384959] whitespace-pre-line leading-relaxed">
                      {result.ai_recommendations}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </div>
  );
};

export default Predict;
