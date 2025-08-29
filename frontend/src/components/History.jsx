import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

const fadeIn = {
  opacity: 1,
  transform: "translateY(0)",
  transition: "all 0.6s cubic-bezier(0.4,0,0.2,1)"
};
const fadeOut = {
  opacity: 0,
  transform: "translateY(40px)"
};

const getResultColor = (result) => {
  if (result === 0) return {
    bg: "bg-gradient-to-br from-green-50 to-emerald-100",
    border: "border-green-200",
    text: "text-green-800",
    badge: "bg-green-500"
  };
  if (result === 1) return {
    bg: "bg-gradient-to-br from-yellow-50 to-amber-100", 
    border: "border-yellow-200",
    text: "text-yellow-800",
    badge: "bg-yellow-500"
  };
  if (result === 2) return {
    bg: "bg-gradient-to-br from-red-50 to-rose-100",
    border: "border-red-200", 
    text: "text-red-800",
    badge: "bg-red-500"
  };
  return {
    bg: "bg-gradient-to-br from-gray-50 to-slate-100",
    border: "border-gray-200",
    text: "text-gray-800", 
    badge: "bg-gray-500"
  };
};

const History = () => {
  const [history, setHistory] = useState([]);
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLevel, setFilterLevel] = useState("all");
  
  const reduceMotion = useReducedMotion();
  const navigate = useNavigate();

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
    const stored = localStorage.getItem("stress_history");
    if (stored) setHistory(JSON.parse(stored));
    setTimeout(() => setShow(true), 100); // trigger fade-in
  }, []);

  const handleDelete = (idx) => {
    const newHistory = history.filter((_, i) => i !== idx);
    setHistory(newHistory);
    localStorage.setItem("stress_history", JSON.stringify(newHistory));
  };

  const clearAllHistory = () => {
    if (window.confirm("Are you sure you want to clear all history?")) {
      setHistory([]);
      localStorage.removeItem("stress_history");
    }
  };

  const filteredHistory = history.filter(item => {
    const matchesSearch = searchTerm === "" || 
      item.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      Object.keys(item.inputs).some(key => 
        key.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    const matchesFilter = filterLevel === "all" || 
      (filterLevel === "low" && item.result === 0) ||
      (filterLevel === "medium" && item.result === 1) ||
      (filterLevel === "high" && item.result === 2);

    return matchesSearch && matchesFilter;
  });

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
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#384959] mb-4 animate-fadeInUp" style={{animationDelay: '0.1s', animationFillMode: 'both', animationName: 'fadeInUp'}}>
            Prediction History
          </h1>
          <p className="text-lg text-[#384959]/80 max-w-2xl mx-auto animate-fadeInUp" style={{animationDelay: '0.2s', animationFillMode: 'both', animationName: 'fadeInUp'}}>
            Track your stress prediction journey and see how your patterns evolve over time.
          </p>
        </div>

        {history.length === 0 ? (
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 p-16 text-center animate-fadeInUp" style={{animationDelay: '0.3s', animationFillMode: 'both', animationName: 'fadeInUp'}}>
            <button
              onClick={() => navigate('/predict')}
              className="mb-8 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-110 transition-all duration-300 shadow-xl animate-fadeInUp"
              title="Predict Stress Now"
            >
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
                <path d="M12 4v16m8-8H4" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-[#384959] mb-4">No Predictions Yet</h3>
            <p className="text-lg text-[#384959]/60 mb-8">Start your stress tracking journey by making your first prediction.</p>
            <button
              onClick={() => navigate('/predict')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-8 rounded-xl shadow-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path d="M13 7l5 5-5 5M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Get Started
            </button>
          </div>
        ) : (
          <>
            {/* Controls Section */}
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50 p-6 mb-8 animate-fadeInUp" style={{animationDelay: '0.3s', animationFillMode: 'both', animationName: 'fadeInUp'}}>
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input
                      type="text"
                      placeholder="Search by date..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 min-w-[250px]"
                    />
                  </div>
                  
                  <select
                    value={filterLevel}
                    onChange={(e) => setFilterLevel(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  >
                    <option value="all">All Levels</option>
                    <option value="low">Low Stress</option>
                    <option value="medium">Medium Stress</option>
                    <option value="high">High Stress</option>
                  </select>
                </div>

                {/* Stats and Actions */}
                <div className="flex items-center gap-4">
                  <div className="text-sm text-[#384959]/70">
                    <span className="font-semibold">{filteredHistory.length}</span> of <span className="font-semibold">{history.length}</span> predictions
                  </div>
                  <button
                    onClick={clearAllHistory}
                    className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-lg transition-all duration-200"
                    title="Clear all history"
                  >
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Clear All
                  </button>
                </div>
              </div>
            </div>

            {/* History Grid */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredHistory.map((item, idx) => {
                const colors = getResultColor(item.result);
                return (
                  <div
                    key={idx}
                    className={`${colors.bg} ${colors.border} border-2 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp`}
                    style={{ animationDelay: `${0.05 * idx + 0.4}s`, animationFillMode: 'both', animationName: 'fadeInUp' }}
                  >
                    {/* Card Header */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 ${colors.badge} rounded-full`}></div>
                          <span className={`font-bold text-xl ${colors.text}`}>
                            {item.result === 0 ? "Low" : item.result === 1 ? "Medium" : item.result === 2 ? "High" : item.result}
                          </span>
                        </div>
                        <span className="text-sm font-mono text-gray-500 bg-white/50 px-3 py-1 rounded-full">
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                      </div>

                      {/* Input Summary */}
                      <div className="bg-white/70 rounded-xl p-4 mb-4">
                        <h4 className="font-semibold text-gray-800 mb-3 text-sm">Input Summary</h4>
                        <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto text-xs">
                          {Object.entries(item.inputs).slice(0, 8).map(([k, v]) => (
                            <div key={k} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-b-0">
                              <span className="font-medium text-gray-600 truncate pr-2">
                                {k.replaceAll("_"," ").replace(/\b\w/g, c => c.toUpperCase())}
                              </span>
                              <span className="font-semibold text-gray-800 bg-gray-100 px-2 py-0.5 rounded-md">
                                {v}
                              </span>
                            </div>
                          ))}
                          {Object.keys(item.inputs).length > 8 && (
                            <div className="col-span-2 text-center text-gray-500 text-xs py-1">
                              +{Object.keys(item.inputs).length - 8} more parameters
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-gray-600">Prediction</span>
                          <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold bg-white/60 border border-blue-200 text-blue-700">
                            #{idx + 1}
                          </span>
                        </div>
                        <button
                          onClick={() => handleDelete(idx)}
                          className="flex items-center gap-1 text-red-600 hover:text-red-700 hover:bg-red-100 px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200"
                          title="Delete this entry"
                        >
                          <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredHistory.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">No Results Found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </>
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

export default History;
