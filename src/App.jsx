import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import StoryChapter1 from './components/StoryChapter1.jsx';
import StoryChapter2 from './components/StoryChapter2.jsx';
import StoryChapter3 from './components/StoryChapter3.jsx';
import HorizontalPortfolio from './components/HorizontalPortfolio.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [loading, setLoading] = useState(true);
  const [splashComplete, setSplashComplete] = useState(false);

  useEffect(() => {
    if (splashComplete) {
      const timer = window.setTimeout(() => setLoading(false), 500);
      return () => window.clearTimeout(timer);
    }
  }, [splashComplete]);

  const handleSplashComplete = () => {
    setSplashComplete(true);
  };

  return (
    <div className="min-h-screen bg-[#090807] text-[#f5efe8]">
      <AnimatePresence>
        {!splashComplete && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>

      <div className={`opacity-0 transition-opacity duration-1000 ${!loading ? 'opacity-100' : ''}`}>
        <Navbar />
        <main className="relative">
          <Hero />
          <About />
          <Services />
          <StoryChapter1 />
          <StoryChapter2 />
          <StoryChapter3 />
          <HorizontalPortfolio />
          <Testimonials />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
