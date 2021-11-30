import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import PortfolioItemPage from './pages/PortfolioItemPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/portfolio/:id" element={<PortfolioItemPage />} />
    </Routes>
  );
}

export default App;
