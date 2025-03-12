
import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import Countdown from './Countdown';

const Events: React.FC = () => {
  // Next Holi date (example: March 25, 2025)
  const nextHoliDate = new Date(2025, 2, 25, 0, 0, 0);
  
  const events = [
    {
      title: "Holika Dahan Evening",
      date: "March 24, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Central Park, New York",
      attendees: 120,
      color: "bg-holi-pink/10",
      borderColor: "border-holi-pink/20"
    },
    {
      title: "Main Holi Celebration",
      date: "March 25, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Riverside Park, New York",
      attendees: 500,
      color: "bg-holi-yellow/10",
      borderColor: "border-holi-yellow/20"
    },
    {
      title: "Holi Cultural Program",
      date: "March 25, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Community Center, Brooklyn",
      attendees: 250,
      color: "bg-holi-blue/10",
      borderColor: "border-holi-blue/20"
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="section-container">
        <span className="inline-block px-4 py-1.5 text-sm font-medium bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-4 animate-fade-in">
          Upcoming Events
        </span>
        
        <h2 className="section-heading">
          Join Our <span className="text-gradient">Celebrations</span>
        </h2>
        
        <p className="section-subheading">
          Find upcoming Holi events near you and mark your calendar for these colorful celebrations.
        </p>
        
        <Countdown targetDate={nextHoliDate} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {events.map((event, index) => (
            <div 
              key={index}
              className={`${event.color} ${event.borderColor} p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg animate-fade-in-up`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <Calendar size={18} className="mr-2 text-gray-400" />
                  <span>{event.date}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Clock size={18} className="mr-2 text-gray-400" />
                  <span>{event.time}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <MapPin size={18} className="mr-2 text-gray-400" />
                  <span>{event.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Users size={18} className="mr-2 text-gray-400" />
                  <span>{event.attendees} attending</span>
                </div>
              </div>
              
              <button className="w-full button-primary">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
