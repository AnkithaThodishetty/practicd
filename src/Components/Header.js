import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close the menu after navigation
  };

  return (
    <header className="sticky top-0 bg-black text-white py-4 px-6 flex justify-between items-center shadow-md z-50">
      {/* Logo */}
      <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('/')}>
        <h1 className="text-red-500 font-bold text-2xl">GYM</h1>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Navbar Links */}
      <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent`}>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
          <Link to="/about" className="hover:underline" onClick={() => handleNavigation('/about')}>About Us</Link>
          <Link to="/program" className="hover:underline" onClick={() => handleNavigation('/program')}>Program</Link>
          <Link to="/training" className="hover:underline" onClick={() => handleNavigation('/training')}>Training</Link>
          <Link to="/pricing" className="hover:underline" onClick={() => handleNavigation('/pricing')}>Pricing</Link>
          <button
            onClick={() => handleNavigation('/register')}
            className="bg-red-500 px-4 py-2 rounded-full hover:bg-red-600 md:hidden"
          >
            Join Us
          </button>
        </div>
      </nav>

      {/* Join Us Button for Larger Screens */}
      <div className="hidden md:block">
        <button
          onClick={() => handleNavigation('/register')}
          className="bg-red-500 px-4 py-2 rounded-full hover:bg-red-600"
        >
          Join Us
        </button>
      </div>
    </header>
  );
};

export default Header;
