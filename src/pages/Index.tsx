
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Events from '../components/Events';
import Footer from '../components/Footer';
import AudioPlayer from '../components/AudioPlayer';

const Index: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Holi Festival - Celebrate the Colors of Joy';
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <AudioPlayer />
      <About />
      <Gallery />
      <Events />
      <Footer />
    </div>
  );
};

export default Index;
