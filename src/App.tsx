import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

// ScrollToTop component that handles scrolling on route change
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

// Update document title based on current route
const TitleUpdater = () => {
  const location = useLocation();
  
  useEffect(() => {
    const titles: { [key: string]: string } = {
      '/': 'OTC Services - Future-proof Digital Solutions',
      '/services': 'Our Services | OTC Services',
      '/about': 'About Us | OTC Services',
      '/contact': 'Contact Us | OTC Services',
      '/faq': 'FAQ | OTC Services'
    };
    
    document.title = titles[location.pathname] || 'OTC Services';
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <TitleUpdater />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;