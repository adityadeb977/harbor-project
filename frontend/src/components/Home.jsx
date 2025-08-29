import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const reduceMotion = useReducedMotion();
  const heading = "How it Works?";
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Smooth spring animations for scroll-based transforms
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), { stiffness: 100 });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), { stiffness: 100 });
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.8, 0.6]), { stiffness: 100 });

  const container = {
    hidden: {},
    show: { 
      transition: { 
        staggerChildren: 0.03,
        delayChildren: 0.2 
      } 
    },
  };

  const letter = {
    hidden: { 
      y: 50, 
      opacity: 0, 
      rotateX: -90,
      scale: 0.8 
    },
    show: { 
      y: 0, 
      opacity: 1, 
      rotateX: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 12,
        mass: 0.8 
      } 
    },
  };

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

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-[#BDDDFC] via-[#e0e7ff] to-[#f3f4f6] pb-0 relative overflow-hidden">
      
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
          style={{ y: y1 }}
          variants={pulseVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-2/3 left-1/3 w-3 h-3 bg-purple-500/50 rounded-full"
          style={{ y: y2 }}
          variants={pulseVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16 pb-20">
        
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center mb-20">
          <motion.div
            className="bg-white/95 backdrop-blur-lg shadow-2xl rounded-3xl px-16 py-20 border border-white/50 mb-8 relative overflow-hidden"
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              mass: 1,
              duration: 1.5 
            }}
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))",
                  "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                  "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))",
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.h1
              className='text-5xl md:text-6xl font-extrabold font-[Poppins,sans-serif] text-center bg-gradient-to-r from-[#384959] to-[#2563EB] bg-clip-text text-transparent relative z-10'
              initial={{ y: -50, opacity: 0, rotateX: -15 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 120,
                damping: 20,
                duration: 1.8,
                delay: 0.2 
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              Welcome to Harbor
            </motion.h1>
            
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 96, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 1,
                duration: 1.2 
              }}
            />
            
            {/* Floating particles around the hero */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>

          <motion.p 
            className="text-2xl md:text-3xl text-[#384959]/90 font-semibold text-center max-w-3xl"
            initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ 
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: 0.8,
              duration: 1.2 
            }}
            whileHover={{ 
              y: -2,
              transition: { duration: 0.2 }
            }}
          >
            An AI Powered Stress Management Platform
          </motion.p>

          <motion.div
            className="mt-16 w-full max-w-3xl mx-auto"
            initial={{ y: 100, opacity: 0, rotateY: -15 }}
            animate={{ y: 0, opacity: 1, rotateY: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 60,
              damping: 20,
              delay: 1.2,
              duration: 1.5 
            }}
            whileHover={{ 
              y: -5,
              rotateY: 2,
              transition: { duration: 0.3 }
            }}
          >
            {/* Modern wellness and mindfulness SVG illustration */}
            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-12 shadow-2xl overflow-hidden">
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-300/20 via-purple-300/20 to-pink-300/20 rounded-3xl"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.svg
                width="100%"
                height="300"
                viewBox="0 0 800 300"
                fill="none"
                className="drop-shadow-lg relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
              >
                {/* Enhanced background elements with animations */}
                <motion.circle 
                  cx="650" cy="80" r="40" fill="#E0E7FF" opacity="0.6"
                  animate={{ 
                    r: [35, 45, 35],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.circle 
                  cx="150" cy="220" r="30" fill="#DBEAFE" opacity="0.8"
                  animate={{ 
                    r: [25, 35, 25],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <motion.circle 
                  cx="700" cy="200" r="25" fill="#F3E8FF" opacity="0.7"
                  animate={{ 
                    r: [20, 30, 20],
                    opacity: [0.5, 0.9, 0.5]
                  }}
                  transition={{ 
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                
                {/* AI Brain and Analytics Visualization */}
                <motion.g 
                  transform="translate(400, 150)"
                  animate={{ 
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Central AI Brain */}
                  <motion.circle 
                    cx="0" cy="0" r="50" fill="#6366F1" opacity="0.9"
                    animate={{ 
                      r: [48, 52, 48]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Brain pattern overlay */}
                  <motion.path 
                    d="M -30 -20 Q -10 -35 10 -20 Q 30 -35 40 -10 Q 35 10 20 25 Q 0 30 -20 25 Q -35 10 -30 -20 Z" 
                    fill="none" 
                    stroke="#FBBF24" 
                    strokeWidth="3" 
                    opacity="0.8"
                    animate={{
                      pathLength: [0, 1, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Neural network connections */}
                  <motion.g opacity="0.7">
                    <motion.line x1="-25" y1="-15" x2="25" y2="15" stroke="#10B981" strokeWidth="2"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.line x1="25" y1="-15" x2="-25" y2="15" stroke="#F59E0B" strokeWidth="2"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                    <motion.line x1="0" y1="-30" x2="0" y2="30" stroke="#EF4444" strokeWidth="2"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                  </motion.g>
                  
                  {/* AI Core indicator */}
                  <motion.circle 
                    cx="0" cy="0" r="8" fill="#FBBF24"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Text label */}
                  <text x="0" y="5" textAnchor="middle" fill="#1F2937" fontSize="10" fontWeight="bold">AI</text>
                </motion.g>
                
                {/* Stress Data Nodes */}
                <motion.g transform="translate(250, 120)">
                  <motion.circle cx="0" cy="0" r="25" fill="#EC4899" opacity="0.8"
                    animate={{ 
                      r: [20, 30, 20],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <text x="0" y="-5" textAnchor="middle" fill="white" fontSize="8" fontWeight="600">STRESS</text>
                  <text x="0" y="5" textAnchor="middle" fill="white" fontSize="8" fontWeight="600">DATA</text>
                </motion.g>

                <motion.g transform="translate(550, 120)">
                  <motion.circle cx="0" cy="0" r="25" fill="#10B981" opacity="0.8"
                    animate={{ 
                      r: [20, 30, 20],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  <text x="0" y="-5" textAnchor="middle" fill="white" fontSize="8" fontWeight="600">AI</text>
                  <text x="0" y="5" textAnchor="middle" fill="white" fontSize="8" fontWeight="600">INSIGHTS</text>
                </motion.g>

                <motion.g transform="translate(320, 220)">
                  <motion.circle cx="0" cy="0" r="20" fill="#8B5CF6" opacity="0.8"
                    animate={{ 
                      r: [15, 25, 15],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  />
                  <text x="0" y="3" textAnchor="middle" fill="white" fontSize="7" fontWeight="600">PREDICT</text>
                </motion.g>

                <motion.g transform="translate(480, 220)">
                  <motion.circle cx="0" cy="0" r="20" fill="#F97316" opacity="0.8"
                    animate={{ 
                      r: [15, 25, 15],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                  />
                  <text x="0" y="3" textAnchor="middle" fill="white" fontSize="7" fontWeight="600">WELLNESS</text>
                </motion.g>

                {/* Data Connection Lines */}
                <motion.g stroke="#6366F1" strokeWidth="2" opacity="0.6" fill="none">
                  <motion.path d="M 275 120 Q 350 100 375 150"
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.path d="M 525 120 Q 450 100 425 150"
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  <motion.path d="M 380 180 Q 350 200 340 220"
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                  <motion.path d="M 420 180 Q 450 200 460 220"
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  />
                </motion.g>

                {/* Analytics Dashboard Representation */}
                <motion.g transform="translate(150, 50)">
                  <motion.rect x="0" y="0" width="60" height="40" rx="8" fill="#DBEAFE" opacity="0.9"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.rect x="5" y="8" width="15" height="3" fill="#6366F1"
                    animate={{ width: [10, 20, 15] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.rect x="5" y="15" width="25" height="3" fill="#10B981"
                    animate={{ width: [20, 30, 25] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                  <motion.rect x="5" y="22" width="18" height="3" fill="#F59E0B"
                    animate={{ width: [15, 25, 18] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  <text x="30" y="35" textAnchor="middle" fill="#6366F1" fontSize="6" fontWeight="600">DASHBOARD</text>
                </motion.g>

                {/* Recommendation Engine */}
                <motion.g transform="translate(590, 50)">
                  <motion.rect x="0" y="0" width="60" height="40" rx="8" fill="#F3E8FF" opacity="0.9"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  {/* Lightbulb icon for recommendations */}
                  <motion.circle cx="30" cy="15" r="8" fill="none" stroke="#8B5CF6" strokeWidth="2"
                    animate={{ r: [6, 10, 8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.path d="M 27 22 L 33 22 M 28 25 L 32 25" stroke="#8B5CF6" strokeWidth="1.5"/>
                  <text x="30" y="35" textAnchor="middle" fill="#8B5CF6" fontSize="6" fontWeight="600">GEMINI AI</text>
                </motion.g>
                
                {/* Enhanced floating meditation elements */}
                <g transform="translate(200, 50)">
                  <motion.circle 
                    cx="0" cy="0" r="8" fill="#10B981" opacity="0.8"
                    animate={{ 
                      cy: [-15, -35, -15],
                      opacity: [0.6, 1, 0.6],
                      r: [6, 10, 6]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.circle 
                    cx="20" cy="15" r="6" fill="#F59E0B" opacity="0.7"
                    animate={{ 
                      cy: [-5, -25, -5],
                      opacity: [0.5, 0.9, 0.5],
                      r: [4, 8, 4]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                  <motion.circle 
                    cx="-15" cy="10" r="5" fill="#EF4444" opacity="0.6"
                    animate={{ 
                      cy: [-10, -30, -10],
                      opacity: [0.4, 0.8, 0.4],
                      r: [3, 7, 3]
                    }}
                    transition={{ 
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                  />
                </g>
                
                <g transform="translate(500, 60)">
                  <motion.circle 
                    cx="0" cy="0" r="7" fill="#8B5CF6" opacity="0.8"
                    animate={{ 
                      cy: [-10, -25, -10],
                      opacity: [0.6, 1, 0.6],
                      r: [5, 9, 5]
                    }}
                    transition={{ 
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.circle 
                    cx="-18" cy="12" r="5" fill="#06B6D4" opacity="0.7"
                    animate={{ 
                      cy: [-8, -20, -8],
                      opacity: [0.5, 0.9, 0.5],
                      r: [3, 7, 3]
                    }}
                    transition={{ 
                      duration: 4.1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  />
                  <motion.circle 
                    cx="15" cy="8" r="6" fill="#F97316" opacity="0.6"
                    animate={{ 
                      cy: [-12, -24, -12],
                      opacity: [0.4, 0.8, 0.4],
                      r: [4, 8, 4]
                    }}
                    transition={{ 
                      duration: 3.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8
                    }}
                  />
                </g>
                
                {/* Enhanced wellness symbols */}
                <motion.g 
                  transform="translate(100, 150)"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <path d="M 0 10 C 0 5, 10 0, 15 10 C 20 0, 30 5, 30 10 C 25 20, 15 30, 15 30 C 15 30, 5 20, 0 10 Z" fill="#EF4444" opacity="0.7"/>
                </motion.g>
                
                <motion.g 
                  transform="translate(600, 140)"
                  animate={{ 
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <g>
                    <ellipse cx="0" cy="0" rx="20" ry="8" fill="#EC4899" opacity="0.8"/>
                    <ellipse cx="0" cy="0" rx="20" ry="8" fill="#F97316" opacity="0.7" transform="rotate(60)"/>
                    <ellipse cx="0" cy="0" rx="20" ry="8" fill="#10B981" opacity="0.6" transform="rotate(120)"/>
                    <circle cx="0" cy="0" r="8" fill="#FBBF24"/>
                  </g>
                </motion.g>
                
                {/* Animated peaceful waves */}
                <motion.path 
                  d="M 0 250 Q 200 230 400 250 T 800 250 L 800 300 L 0 300 Z" 
                  fill="#DBEAFE" opacity="0.6"
                  animate={{ 
                    d: [
                      "M 0 250 Q 200 230 400 250 T 800 250 L 800 300 L 0 300 Z",
                      "M 0 250 Q 200 240 400 250 T 800 245 L 800 300 L 0 300 Z",
                      "M 0 250 Q 200 230 400 250 T 800 250 L 800 300 L 0 300 Z"
                    ]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.path 
                  d="M 0 270 Q 150 255 300 270 T 600 270 Q 700 275 800 270 L 800 300 L 0 300 Z" 
                  fill="#BFDBFE" opacity="0.8"
                  animate={{ 
                    d: [
                      "M 0 270 Q 150 255 300 270 T 600 270 Q 700 275 800 270 L 800 300 L 0 300 Z",
                      "M 0 270 Q 150 265 300 270 T 600 265 Q 700 270 800 275 L 800 300 L 0 300 Z",
                      "M 0 270 Q 150 255 300 270 T 600 270 Q 700 275 800 270 L 800 300 L 0 300 Z"
                    ]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                {/* Animated inspirational text */}
                <motion.text 
                  x="400" y="280" textAnchor="middle" fill="#6366F1" fontSize="18" fontWeight="600" opacity="0.8"
                  animate={{ 
                    opacity: [0.6, 1, 0.6],
                    y: [280, 275, 280]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Find Your Inner Peace
                </motion.text>
              </motion.svg>
            </div>
          </motion.div>

          <motion.h2
            className="mt-16 text-3xl md:text-4xl text-[#384959] font-bold text-center"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8 
            }}
            viewport={{ once: true, amount: 0.6 }}
            whileHover={{ 
              scale: 1.02,
              y: -2,
              transition: { duration: 0.2 }
            }}
          >
            Find Your Balance, Find Your Calm
          </motion.h2>
        </div>

        {/* Feature Cards with enhanced animations */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              gradient: "from-blue-500 to-purple-600",
              icon: "M13 7l5 5-5 5M6 12h12",
              title: "Get Started Instantly",
              description: "Enter your stress details in the Predict Stress Now section to get personalized insights immediately!",
              delay: 0.1
            },
            {
              gradient: "from-green-500 to-teal-600",
              icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
              title: "AI-Powered Insights",
              description: "Our AI model is trained on a diverse dataset and provides effective stress management tips tailored to you.",
              delay: 0.2
            },
            {
              gradient: "from-purple-500 to-pink-600",
              icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
              title: "Track Your Progress",
              description: "Monitor your stress patterns over time with our intuitive dashboard and comprehensive history tracking.",
              delay: 0.3
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-white/95 backdrop-blur-lg border border-white/50 shadow-xl rounded-2xl p-8 text-center relative overflow-hidden group"
              initial={{ scale: 0, y: 50, opacity: 0, rotateY: -15 }}
              whileInView={{ scale: 1, y: 0, opacity: 1, rotateY: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8,
                delay: card.delay 
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                rotateY: 2,
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  duration: 0.3 
                }
              }}
            >
              {/* Animated background glow on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100"
                initial={false}
                animate={{ 
                  background: [
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))",
                    "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                    "linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))",
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <motion.div 
                className={`w-16 h-16 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
                animate={{
                  boxShadow: [
                    "0 4px 20px rgba(59, 130, 246, 0.3)",
                    "0 8px 30px rgba(147, 51, 234, 0.4)",
                    "0 4px 20px rgba(236, 72, 153, 0.3)",
                    "0 4px 20px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <path d={card.icon} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>

              <motion.h3 
                className="text-xl font-bold text-[#384959] mb-4 relative z-10"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {card.title}
              </motion.h3>
              <motion.p 
                className="text-[#384959]/80 leading-relaxed relative z-10"
                whileHover={{ 
                  y: -1,
                  transition: { duration: 0.2 }
                }}
              >
                {card.description}
              </motion.p>

              {/* Floating particles for each card */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    left: `${20 + i * 25}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0, 1, 0],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* How it Works Section */}
        <div className="mb-20">
          {!reduceMotion ? (
            <div className="text-center mb-12">
              <motion.h2
                className="text-4xl md:text-5xl text-[#384959] font-bold"
                initial="hidden"
                whileInView="show"
                variants={container}
                viewport={{ once: true, amount: 0.6 }}
              >
                {heading.split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    variants={letter}
                    className={ch === " " ? "mx-1 inline-block" : "inline-block"}
                    aria-hidden={false}
                  >
                    {ch}
                  </motion.span>
                ))}
              </motion.h2>
            </div>
          ) : (
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl text-[#384959] font-bold">
                {heading}
              </h2>
            </div>
          )}

          <motion.div
            className="bg-white/90 backdrop-blur-lg border border-white/50 shadow-2xl rounded-3xl p-12 max-w-5xl mx-auto"
            initial={!reduceMotion ? { y: 20, opacity: 0 } : {}}
            whileInView={!reduceMotion ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#384959]">How the AI Predictor Works</h3>
            </div>

            <div className="space-y-6 text-lg text-[#384959]/90 leading-relaxed">
              <p>
                Harbor uses advanced machine learning technology to analyze your unique stress profile across 20+ key factors including sleep quality, anxiety levels, academic performance, social relationships, and lifestyle habits. Our intelligent system processes this data through a sophisticated AI model trained on extensive stress research data.
              </p>

              <p>
                Once your stress level is predicted, Harbor's integration with Google's Gemini AI generates completely personalized recommendations tailored specifically to your situation. Unlike generic advice, these AI-powered suggestions consider your individual stress patterns, lifestyle factors, and current circumstances to provide actionable, relevant guidance.
              </p>

              <p>
                Your privacy is our priority — all data processing happens securely, and your personal information is only used to generate your prediction and personalized recommendations. Experience the power of AI-driven stress management and discover insights that can transform your well-being journey.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Section with enhanced animations */}
        <motion.div
          className="text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden"
          {...(!reduceMotion
            ? {
                initial: { y: 100, opacity: 0, scale: 0.8, rotateX: -15 },
                whileInView: { y: 0, opacity: 1, scale: 1, rotateX: 0 },
                transition: { 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 1,
                },
                viewport: { once: true, amount: 0.5 },
              }
            : {})}
          whileHover={!reduceMotion ? { 
            y: -5,
            scale: 1.02,
            transition: { duration: 0.3 }
          } : {}}
        >
          {/* Animated gradient background overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600/50 via-pink-500/50 to-blue-600/50 rounded-3xl"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(147, 51, 234, 0.5), rgba(236, 72, 153, 0.5), rgba(59, 130, 246, 0.5))",
                "linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.5), rgba(236, 72, 153, 0.5))",
                "linear-gradient(45deg, rgba(236, 72, 153, 0.5), rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.5))",
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Floating particles in CTA */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${10 + i * 10}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}

          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-6 relative z-10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Journey?
          </motion.h3>
          
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90 relative z-10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Take the first step towards better stress management with our AI-powered platform.
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <Link
              to="/predict"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-2xl shadow-lg text-xl font-bold relative overflow-hidden group"
              aria-label="Start Predicting Stress"
            >
              {/* Animated button background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.svg 
                width="24" height="24" fill="none" viewBox="0 0 24 24" 
                className="relative z-10"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path d="M13 7l5 5-5 5M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
              <span className="relative z-10">Start Predicting Stress</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;