import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import HobbyPage from './pages/HobbyPage';
import ContactPage from './pages/ContactPage';
import ThankYouPage from './pages/ThankYouPage';
import Sports from './components/Sports';
import Cooking from './components/Cooking';
import Books from './components/Books';
import Travel from './components/Travel';
import Music from './components/Music';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

// Instant scroll-to-top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-100/70 font-sans text-slate-800 antialiased selection:bg-[#f9004d]/20 selection:text-[#f9004d]">
        {/* Global Header */}
        <Header />

        {/* Mobile Navigation Drawer */}
        <MobileMenu />

        {/* Dynamic Route View */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            
            {/* Hobbies Nested Routes */}
            <Route path="/hobby" element={<HobbyPage />}>
              <Route index element={<Navigate to="sports" replace />} />
              <Route path="sports" element={<Sports />} />
              <Route path="cooking" element={<Cooking />} />
              <Route path="books" element={<Books />} />
              <Route path="travel" element={<Travel />} />
              <Route path="music" element={<Music />} />
            </Route>

            <Route path="/contact" element={<ContactPage />} />
            <Route path="/thankyou" element={<ThankYouPage />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Floating Back to Top Button */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="floating-action-btn"
            aria-label="Scroll to top of page"
            title="Back to Top"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        )}

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}
