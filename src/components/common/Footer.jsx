// src/components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-mocha-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg mb-3">About Mokaje</h3>
            <ul>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-white">Our Mission</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg mb-3">For Businesses</h3>
            <ul>
              <li><Link to="/join" className="text-sm text-gray-300 hover:text-white">Join Our Platform</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg mb-3">Help & Support</h3>
            <ul>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg mb-3">Legal</h3>
            <ul>
              <li><Link to="/privacy" className="text-sm text-gray-300 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-right">
          <p className="text-sm">© 2025 Mokaje, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;