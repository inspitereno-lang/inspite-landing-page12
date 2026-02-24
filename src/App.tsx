import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './sections/Header';
import Hero from './sections/Hero';
import BioEnable from './sections/BioEnable';
import Stats from './sections/Stats';
import AIProductDevelopment from './sections/AIProductDevelopment';
import Services from './sections/Services';
import Industries from './sections/Industries';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import AIChatWidget from './components/AIChatWidget';
import SmoothScroll from './components/SmoothScroll';
import ServicePage from './pages/ServicePage';
import IndustryPage from './pages/IndustryPage';
import AIProductLabPage from './pages/AIProductLabPage';
import BioEnablePage from './pages/BioEnablePage';

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-infynix-blue text-white overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <Stats />
          <AIProductDevelopment />
          <BioEnable />
          <Services />
          <Industries />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <AIChatWidget />
      </div>
    </SmoothScroll>
  );
}

function App() {
  useEffect(() => {
    // Initialize smooth scroll behavior
    ScrollTrigger.defaults({
      markers: false,
    });

    // Refresh ScrollTrigger on window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/:slug" element={<ServicePage />} />
      <Route path="/industries/:slug" element={<IndustryPage />} />
      <Route path="/ai-product-lab" element={<AIProductLabPage />} />
      <Route path="/bioenable" element={<BioEnablePage />} />
    </Routes>
  );
}

export default App;
