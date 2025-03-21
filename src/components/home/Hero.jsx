// src/components/home/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-center bg-cover"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80)',
          backgroundPosition: 'center' 
        }}
      >
        {/* Changed to black gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6">
            Support Local, Build Community
          </h1>
          <p className="text-xl text-white mb-12">
            Discover and shop from small businesses in your community
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/shop" 
              className="bg-earth-500 text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-earth-600 transition-colors"
            >
              Shop Now
            </Link>
            
            <Link 
              to="/directory" 
              className="border-2 border-white text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-white hover:bg-opacity-20 transition-colors"
            >
              Business Directory
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;