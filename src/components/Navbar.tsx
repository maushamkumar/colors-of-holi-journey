
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/90 backdrop-blur-lg shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-gradient">
            Holi Festival
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#events" className="nav-link">Events</a>
            <a href="#contact" className="button-primary">Contact Us</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-white p-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4 py-2">
            <a 
              href="#about" 
              className="nav-link py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#gallery" 
              className="nav-link py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
            <a 
              href="#events" 
              className="nav-link py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </a>
            <a 
              href="#contact" 
              className="button-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
