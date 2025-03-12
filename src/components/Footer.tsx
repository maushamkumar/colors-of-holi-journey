
import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold mb-4 text-gradient">Holi Festival</h3>
            <p className="text-gray-400 mb-6">
              Celebrating the ancient festival of colors that marks the arrival of spring and the triumph of good over evil.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Holi</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-white transition-colors">Events</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Shop</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-gray-400 mt-1" />
                <span className="text-gray-400">
                  123 Festival Street, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-gray-400" />
                <a href="mailto:info@holifestival.com" className="text-gray-400 hover:text-white transition-colors">
                  info@holifestival.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-gray-400" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Join our newsletter to receive updates about upcoming Holi events and celebrations.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-holi-pink/50"
              />
              <button type="submit" className="w-full button-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Holi Festival. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
