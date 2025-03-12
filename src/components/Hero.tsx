
import React, { useRef } from 'react';
import { createColorParticle } from '../utils/animations';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    if (heroRef.current) {
      createColorParticle(e, heroRef.current);
    }
  };

  return (
    <div 
      ref={heroRef} 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      onMouseMove={handleInteraction}
      onTouchMove={handleInteraction}
    >
      {/* Background Elements */}
      <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-holi-pink/10 filter blur-3xl animate-float-reverse"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-holi-blue/10 filter blur-3xl animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-holi-yellow/10 filter blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6 animate-fade-in">
            Celebrate the Festival of Colors
          </span>
          
          <h1 className="section-heading animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Experience the Joy of <span className="text-gradient">Holi</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Join us in celebrating the ancient festival of colors that marks the arrival of spring,
            the victory of good over evil, and a time to repair broken relationships.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="#events" className="button-primary w-full sm:w-auto">
              Explore Events
            </a>
            <a href="#about" className="button-secondary w-full sm:w-auto">
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating color elements */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-holi-pink animate-float opacity-70"></div>
      <div className="absolute bottom-1/4 right-1/3 w-6 h-6 rounded-full bg-holi-yellow animate-float-reverse opacity-70"></div>
      <div className="absolute top-1/3 right-1/4 w-10 h-10 rounded-full bg-holi-blue animate-float opacity-60"></div>
      <div className="absolute bottom-1/3 left-1/3 w-12 h-12 rounded-full bg-holi-purple animate-float-reverse opacity-60"></div>
      <div className="absolute top-2/3 right-1/3 w-5 h-5 rounded-full bg-holi-green animate-float opacity-80"></div>
    </div>
  );
};

export default Hero;
