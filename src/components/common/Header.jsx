// src/components/common/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-mocha-700 py-2 shadow-md' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-3xl font-bold text-white">MOKAJE</Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-white hover:text-earth-200">Home</Link></li>
            <li><Link to="/directory" className="text-white hover:text-earth-200">Directory</Link></li>
            <li><Link to="/shop" className="text-white hover:text-earth-200">Shop</Link></li>
            <li><Link to="/community" className="text-white hover:text-earth-200">Community</Link></li>
            <li><Link to="/about" className="text-white hover:text-earth-200">About Us</Link></li>
          </ul>
        </nav>
        
        <button className="bg-azure-200 text-mocha-800 px-4 py-1 rounded-full font-medium hover:bg-azure-300 transition-colors">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;