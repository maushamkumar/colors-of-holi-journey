import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GalleryImage {
  src: string;
  alt: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const images: GalleryImage[] = [
    {
      src: "https://images.unsplash.com/photo-1615535260721-d87c109f7aa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "People celebrating Holi with colorful powder"
    },
    {
      src: "https://images.unsplash.com/photo-1576697935362-a40321a99ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Close-up of colorful Holi powder"
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Traditional Holi celebration"
    },
    {
      src: "https://images.unsplash.com/photo-1580394677967-0f6ef5df8c9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Friends enjoying Holi festival"
    },
    {
      src: "https://images.unsplash.com/photo-1560086653-807d9d2c7892?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Vibrant Holi colors on face"
    },
    {
      src: "https://images.unsplash.com/photo-1592593972669-3f2095cfce1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      alt: "Closeup of hands with Holi colors"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="section-container">
        <span className="inline-block px-4 py-1.5 text-sm font-medium bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-4 animate-fade-in">
          Photo Gallery
        </span>
        
        <h2 className="section-heading">
          Capturing the <span className="text-gradient">Colors</span>
        </h2>
        
        <p className="section-subheading">
          Experience the joy and vibrancy of Holi celebrations through our stunning photo gallery.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover object-center transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/gallery" className="button-secondary">
            View All Photos
          </Link>
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white bg-black/20 p-2 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
