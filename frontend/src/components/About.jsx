import { useState, useEffect } from 'react';

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  const fadeIn = {
    opacity: 1,
    transform: "translateY(0)",
    transition: "all 0.7s cubic-bezier(0.4,0,0.2,1)"
  };
  const fadeOut = {
    opacity: 0,
    transform: "translateY(40px)"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#BDDDFC] via-[#e0e7ff] to-[#f3f4f6] pb-0">
      <div 
        className="max-w-6xl mx-auto px-8 pt-16 pb-20"
        style={show ? fadeIn : fadeOut}
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[#384959] mb-6 animate-fadeInUp">
            About Harbor
          </h1>
          <p className="text-xl text-[#384959]/80 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '0.1s', animationFillMode: 'both', animationName: 'fadeInUp'}}>
            A cutting-edge AI-powered stress prediction platform designed to help you understand and manage your mental well-being.
          </p>
        </div>

        {/* Main Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* What is Harbor */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-200 animate-fadeInUp" style={{animationDelay: '0.2s', animationFillMode: 'both', animationName: 'fadeInUp'}}>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="white"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#384959]">What is Harbor?</h2>
            </div>
            <p className="text-[#384959]/80 text-lg leading-relaxed mb-4">
              Harbor is an intelligent stress prediction system that uses advanced machine learning algorithms to analyze multiple lifestyle and psychological factors. Our platform provides personalized insights into your stress levels and offers AI-generated recommendations tailored to your unique situation.
            </p>
            <p className="text-[#384959]/80 text-lg leading-relaxed">
              By evaluating 20 different parameters including anxiety levels, sleep quality, academic performance, and social factors, Harbor creates a comprehensive picture of your mental well-being.
            </p>
          </div>

          {/* How it Works */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-200 animate-fadeInUp" style={{animationDelay: '0.3s', animationFillMode: 'both', animationName: 'fadeInUp'}}>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#384959]">How It Works</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#384959] mb-2">Data Collection</h3>
                  <p className="text-[#384959]/80">Input your lifestyle and psychological factors through our intuitive form.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#384959] mb-2">AI Analysis</h3>
                  <p className="text-[#384959]/80">Our trained machine learning model analyzes your data to predict stress levels.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#384959] mb-2">Personalized Recommendations</h3>
                  <p className="text-[#384959]/80">Receive AI-generated recommendations powered by Google's Gemini API.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#384959] text-center mb-12 animate-fadeInUp" style={{animationDelay: '0.4s', animationFillMode: 'both', animationName: 'fadeInUp'}}>
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-blue-200 animate-fadeInUp" style={{animationDelay: '0.5s', animationFillMode: 'both', animationName: 'fadeInUp'}}>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#384959] mb-3">20+ Parameters</h3>
              <p className="text-[#384959]/80">Comprehensive analysis of anxiety, sleep, academic performance, and social factors.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-blue-200 animate-fadeInUp" style={{animationDelay: '0.6s', animationFillMode: 'both', animationName: 'fadeInUp'}}>
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#384959] mb-3">AI-Powered Predictions</h3>
              <p className="text-[#384959]/80">Machine learning model trained on stress-related data for accurate predictions.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-blue-200 animate-fadeInUp" style={{animationDelay: '0.7s', animationFillMode: 'both', animationName: 'fadeInUp'}}>
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#384959] mb-3">Personalized Recommendations</h3>
              <p className="text-[#384959]/80">Get tailored advice powered by Google's Gemini AI based on your unique profile.</p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-200 mb-16 animate-fadeInUp" style={{animationDelay: '0.8s', animationFillMode: 'both', animationName: 'fadeInUp'}}>
          <h2 className="text-3xl font-bold text-[#384959] text-center mb-8">Built With Modern Technology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#384959] mb-4">Frontend</h3>
              <ul className="space-y-2 text-[#384959]/80">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>React 19 with modern hooks</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Tailwind CSS for styling</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>React Router for navigation</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Vite for fast development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#384959] mb-4">Backend</h3>
              <ul className="space-y-2 text-[#384959]/80">
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Python with FastAPI</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Scikit-learn for ML model</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Google Gemini API for recommendations</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Joblib for model serialization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-white animate-fadeInUp" style={{animationDelay: '0.9s', animationFillMode: 'both', animationName: 'fadeInUp'}}>
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            To democratize mental health awareness by providing accessible, AI-driven insights that help individuals understand their stress patterns and take proactive steps toward better well-being.
          </p>
        </div>
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

export default About;
