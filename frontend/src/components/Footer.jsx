import React from 'react';
import { Link } from 'react-router-dom';
import github_icon from '../assets/github.svg';
import linkedin_icon from '../assets/linkedin.svg';
import signature_cion from '../assets/signature.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Predict Stress', path: '/predict' },
    { name: 'History', path: '/history' },
    { name: 'About', path: '/about' }
  ];

  return (
    <footer className="bg-gradient-to-r from-[#384959] to-[#2563EB] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Harbor</h3>
                <p className="text-white/80 text-sm">AI-Powered Stress Management</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed max-w-md mb-6">
              Harbor helps you understand and manage your stress levels with the power of artificial intelligence. 
              Get personalized insights and recommendations tailored to your unique situation.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Your privacy and data security are our top priorities
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <path d="M13 7l5 5-5 5M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect</h4>
            <p className="text-white/80 mb-4 text-sm">Made with ❤️ by</p>
            <p className="text-white font-semibold mb-6">Aditya Deb</p>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/adityadeb977" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                title="GitHub Profile"
              >
                <img src={github_icon} alt="GitHub" className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
              
              <a 
                href="https://adityaportfolio-one.vercel.app/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                title="Personal Portfolio"
              >
                <img src={signature_cion} alt="Portfolio" className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/aditya-deb-673b2528a" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                title="LinkedIn Profile"
              >
                <img src={linkedin_icon} alt="LinkedIn" className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/80">
              <p>© {currentYear} Harbor. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <span className="text-white/60">•</span>
                <span>Powered by AI & Machine Learning</span>
                <span className="text-white/60">•</span>
                <span>Built with React & FastAPI</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-white/70">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>System Status: Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}