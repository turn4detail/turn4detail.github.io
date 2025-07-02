import React from 'react';
import Button from './Button';

interface HeroProps {
  bg: string;
  heading: string;
  subheading: string;
  highlight: string;
}

const Hero: React.FC<HeroProps> = ({
  bg,
  heading,
  subheading,
  highlight,
}) => {
  return (
    <section className="relative h-screen max-h-[820px] flex items-center justify-start px-4 md:px-12 lg:px-24 py-20 md:py-32 overflow-hidden">
      
      {/* Background Image */}
      <img
        src={bg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text Overlay */}
      <div className="relative z-10 max-w-2xl text-left text-shadow-lg">
        <p className="text-white uppercase font-bold mb-2">
          {subheading}
        </p>
        <h1 className="text-white italic uppercase font-bold text-4xl md:text-6xl mb-4">
          {heading} <span className="text-blue-400">{highlight}</span>
        </h1>
        <Button href="https://app.urable.com/virtual-shop/hcAqmHnMarJx8MiAcQxF">
          Book Now
        </Button>
      </div>
    </section>
  );
};

export default Hero;
