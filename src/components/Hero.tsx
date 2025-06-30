// src/components/Hero.tsx

import React from 'react';
import Button from './Button';

interface HeroProps {
  backgroundImage: string;
  heading: string;
  subheading: string;
  highlight: string;
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  heading,
  subheading,
  highlight,
}) => {
  return (
    <section className="relative h-screen flex py-70 px-60 overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text Overlay */}
      <div className="relative z-10 text-left px-4">
        <p className="text-white uppercase font-bold
        ">
          {subheading}
        </p>
        <h1 className="text-white italic uppercase font-bold mb-2">
          {heading} <span className="text-blue-400">{highlight}</span>
        </h1>
        <Button>Book Now</Button>
      </div>
    </section>
  );
};

export default Hero;
