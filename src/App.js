// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import other pages when they're created

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes as you build additional pages */}
        <Route path="*" element={<HomePage />} /> {/* Fallback */}
      </Routes>
    </Router>
  );
}

export default App;
