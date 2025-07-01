import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  image: string;
  to: string;
}

export default function CardLink({ title, image, to }: CardProps) {
  return (
    <Link to={to} className="block group">
      
      {/* Card with image and title */}
      <div
        className="
          relative overflow-hidden shadow-md
          h-48 md:h-64 lg:h-72
          cursor-pointer
          transition transform hover:scale-105
          [clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0%_100%)]
          bg-gray-200
        "
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />
        <h3
          className="
            absolute inset-x-0 bottom-0
            z-10 text-white italic text-lg md:text-xl font-bold
            px-4 py-3
            bg-gradient-to-t from-black/70 to-transparent
          "
        >
          {title}
        </h3>
      </div>
    </Link>
  );
}