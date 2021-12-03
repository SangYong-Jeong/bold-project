import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HeaderCp from './components/common/HeaderCp';
import FooterCp from './components/common/FooterCp';
import TopButtonCp from './components/common/TopButtonCp';

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

import PortfolioCharacterPage from './pages/Portfolio/PortfolioCharacterPage';
import PortfolioGrahicPage from './pages/Portfolio/PortfolioGraphicPage';
import PortfolioIllustrationPage from './pages/Portfolio/PortfolioIllustrationPage';
import PortfolioPackagePage from './pages/Portfolio/PortfolioPackagePage';
import PortfolioItemPage from './pages/Portfolio/PortfolioItemPage';

function App() {
  return (
    <>
      <HeaderCp />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/package" element={<PortfolioPackagePage />} />
        <Route path="/portfolio/graphic" element={<PortfolioGrahicPage />} />
        <Route
          path="/portfolio/illustration"
          element={<PortfolioIllustrationPage />}
        />
        <Route
          path="/portfolio/character"
          element={<PortfolioCharacterPage />}
        />
        <Route path="/portfolio/character/1" element={<PortfolioItemPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <TopButtonCp />
      <FooterCp />
    </>
  );
}

export default App;
