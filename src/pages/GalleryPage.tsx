
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { X, ArrowLeft, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  uploadedAt?: string;
}

const GalleryPage: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    // Update page title
    document.title = 'Holi Festival - Photo Gallery';
    
    // For now, let's use placeholder data
    // In a real implementation, this would fetch from Supabase
    const fetchGalleryImages = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // This is where you would fetch from Supabase
        // const { data, error } = await supabase
        //   .from('holi_gallery')
        //   .select('*')
        //   .order('created_at', { ascending: false });
        
        // if (error) throw new Error(error.message);
        
        // Mock data for now
        const mockImages: GalleryImage[] = [
          {
            id: '1',
            src: "https://images.unsplash.com/photo-1615535260721-d87c109f7aa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            alt: "People celebrating Holi with colorful powder",
            uploadedAt: "2023-03-15"
          },
          {
            id: '2',
            src: "https://images.unsplash.com/photo-1576697935362-a40321a99ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            alt: "Close-up of colorful Holi powder",
            uploadedAt: "2023-02-28"
          },
          // Add more images to simulate a larger gallery
          {
            id: '3',
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            alt: "Traditional Holi celebration",
            uploadedAt: "2023-02-20"
          },
          {
            id: '4',
            src: "https://images.unsplash.com/photo-1580394677967-0f6ef5df8c9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            alt: "Friends enjoying Holi festival",
            uploadedAt: "2023-03-01"
          },
          {
            id: '5',
            src: "https://images.unsplash.com/photo-1560086653-807d9d2c7892?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            alt: "Vibrant Holi colors on face",
            uploadedAt: "2023-03-02"
          },
          {
            id: '6',
            src: "https://images.unsplash.com/photo-1592593972669-3f2095cfce1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            alt: "Closeup of hands with Holi colors",
            uploadedAt: "2023-03-05"
          },
          {
            id: '7',
            src: "https://images.unsplash.com/photo-1562874732-7c4ec2329c77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            alt: "Holi celebration in a temple",
            uploadedAt: "2023-02-15"
          },
          {
            id: '8',
            src: "https://images.unsplash.com/photo-1551269958-1c7119055f5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            alt: "Gulal powder in various colors",
            uploadedAt: "2023-01-25"
          },
          {
            id: '9',
            src: "https://images.unsplash.com/photo-1619171208124-ce43ee0b9339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            alt: "Group of friends at Holi festival",
            uploadedAt: "2023-02-10"
          },
          {
            id: '10',
            src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            alt: "Colored powder in the air",
            uploadedAt: "2023-01-30"
          },
          {
            id: '11',
            src: "https://images.unsplash.com/photo-1581285407386-1ad294a8c67d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            alt: "Kids playing with colors",
            uploadedAt: "2023-02-28"
          },
          {
            id: '12',
            src: "https://images.unsplash.com/photo-1578501249698-5738abd24c6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
            alt: "Holi celebration at sunset",
            uploadedAt: "2023-03-10"
          }
        ];
        
        setImages(mockImages);
      } catch (err) {
        console.error('Error fetching gallery images:', err);
        setError('Failed to load gallery images. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchGalleryImages();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4">
              <ArrowLeft size={18} />
              <span>Back to Home</span>
            </Link>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
              Holi Festival <span className="text-gradient">Photo Gallery</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-3xl">
              Browse our complete collection of vibrant moments from Holi celebrations around the world.
            </p>
          </div>
          
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 size={40} className="animate-spin text-holi-purple mb-4" />
              <p className="text-gray-600">Loading gallery...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
              {error}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((image) => (
                <div 
                  key={image.id} 
                  className="overflow-hidden rounded-xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
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
          )}
          
          <div className="mt-16 flex justify-center">
            <p className="text-gray-500 text-center max-w-xl">
              Want to contribute to our gallery? Connect with us on social media and tag your photos with #HoliFestival to be featured.
            </p>
          </div>
        </div>
      </main>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white bg-black/20 p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={24} />
          </button>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] mx-auto object-contain rounded-lg animate-scale-in"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white backdrop-blur-sm rounded-b-lg">
              <p className="font-medium">{selectedImage.alt}</p>
              {selectedImage.uploadedAt && (
                <p className="text-sm text-gray-300">Uploaded: {selectedImage.uploadedAt}</p>
              )}
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default GalleryPage;
