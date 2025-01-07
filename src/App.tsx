import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useThemeStore } from './store/themeStore';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Import service detail pages
import PhotographyService from './pages/services/PhotographyService';
import VideoService from './pages/services/VideoService';
import GraphicsService from './pages/services/GraphicsService';
import PrintService from './pages/services/PrintService';
import DroneService from './pages/services/DroneService';
import WebService from './pages/services/WebService';

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/photography" element={<PhotographyService />} />
            <Route path="/services/video" element={<VideoService />} />
            <Route path="/services/graphics" element={<GraphicsService />} />
            <Route path="/services/printing" element={<PrintService />} />
            <Route path="/services/drone" element={<DroneService />} />
            <Route path="/services/web" element={<WebService />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;