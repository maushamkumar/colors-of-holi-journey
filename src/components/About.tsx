
import React from 'react';

const About: React.FC = () => {
  const features = [
    {
      title: 'Cultural Significance',
      description: 'Learn about the ancient origins and mythology behind the festival of colors.',
      color: 'bg-holi-pink/10',
      borderColor: 'border-holi-pink/20',
      delay: 0
    },
    {
      title: 'Global Celebrations',
      description: 'Discover how Holi is celebrated around the world with unique regional traditions.',
      color: 'bg-holi-yellow/10',
      borderColor: 'border-holi-yellow/20',
      delay: 0.1
    },
    {
      title: 'Traditional Practices',
      description: 'Explore the various rituals, foods, and customs that make Holi special.',
      color: 'bg-holi-blue/10',
      borderColor: 'border-holi-blue/20',
      delay: 0.2
    },
    {
      title: 'Modern Interpretations',
      description: 'See how contemporary celebrations blend ancient traditions with modern festivities.',
      color: 'bg-holi-purple/10',
      borderColor: 'border-holi-purple/20',
      delay: 0.3
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <span className="inline-block px-4 py-1.5 text-sm font-medium bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-4 animate-fade-in">
          About the Festival
        </span>
        
        <h2 className="section-heading">
          The Spirit of <span className="text-gradient">Holi</span>
        </h2>
        
        <p className="section-subheading">
          Holi is an ancient Hindu festival that celebrates the triumph of good over evil,
          the arrival of spring, and a time to forgive, forget, and repair broken relationships.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`${feature.color} ${feature.borderColor} p-6 rounded-2xl border animate-fade-in-up`}
              style={{ animationDelay: `${feature.delay + 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 glass-panel animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-serif font-bold mb-4">The Story Behind Holi</h3>
              <p className="text-gray-600 mb-4">
                Holi's origins lie in Hindu mythology, particularly the story of Prahlad and Holika.
                Prahlad was a devotee of Lord Vishnu, whose devotion was tested when his aunt Holika
                took him into a fire. Protected by his devotion, Prahlad survived while Holika perished.
              </p>
              <p className="text-gray-600">
                This story symbolizes the victory of good over evil, and the night before Holi,
                bonfires known as Holika Dahan are lit to commemorate this triumph.
              </p>
            </div>
            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Holi celebration with colored powder"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
