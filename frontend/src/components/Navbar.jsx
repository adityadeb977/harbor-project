import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const navItems = [
        { path: '/', label: 'Home', icon: (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )},
        { path: '/predict', label: 'Predict Stress', icon: (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )},
        { path: '/history', label: 'History', icon: (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )},
        { path: '/about', label: 'About', icon: (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )}
    ];

    return (
        <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    
                    {/* Logo/Brand */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-[#384959] group-hover:text-blue-600 transition-colors duration-200">Harbor</span>
                            <span className="text-xs text-[#384959]/70 -mt-1">Stress Management</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 ${
                                    isActive(item.path)
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                                        : 'text-[#384959] hover:bg-blue-50 hover:text-blue-600 hover:shadow-md'
                                }`}
                            >
                                {item.icon}
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex">
                        <Link
                            to="/predict"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                        >
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                                <path d="M13 7l5 5-5 5M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-xl text-[#384959] hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMobileMenuOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-200">
                        <div className="px-2 pt-4 pb-6 space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                                        isActive(item.path)
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                            : 'text-[#384959] hover:bg-blue-50 hover:text-blue-600'
                                    }`}
                                >
                                    {item.icon}
                                    {item.label}
                                </Link>
                            ))}
                            
                            {/* Mobile CTA */}
                            <Link
                                to="/predict"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-2 mt-4 bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
                            >
                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                                    <path d="M13 7l5 5-5 5M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;