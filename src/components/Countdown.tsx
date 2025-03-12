
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="glass-panel p-8 max-w-4xl mx-auto">
      <h3 className="text-xl sm:text-2xl font-medium mb-6 text-center">
        Countdown to Holi Festival
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {timeUnits.map((unit, index) => (
          <div 
            key={unit.label} 
            className={`flex flex-col items-center p-4 rounded-lg 
                       ${index % 4 === 0 ? 'bg-holi-pink/10' : 
                         index % 4 === 1 ? 'bg-holi-yellow/10' : 
                         index % 4 === 2 ? 'bg-holi-blue/10' : 
                         'bg-holi-purple/10'}`}
          >
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              {unit.value.toString().padStart(2, '0')}
            </span>
            <span className="text-sm sm:text-base text-gray-600 mt-1">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
