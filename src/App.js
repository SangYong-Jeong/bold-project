import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HeaderCp from './components/common/HeaderCp';
import FooterCp from './components/common/FooterCp';
import TopButtonCp from './components/common/TopButtonCp';

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <HeaderCp />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <TopButtonCp />
      <FooterCp />
    </>
  );
}

export default App;
