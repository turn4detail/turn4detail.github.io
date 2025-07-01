import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  image: string;
  to: string;
}

export default function Card({ title, image, to }: CardProps) {
  const isVideo = image.endsWith('.mp4');

  return (
    <Link to={to} className="block group relative overflow-hidden shadow-md h-64 cursor-pointer rounded-none">
      {isVideo ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={image} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay for darkening and hover effect */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />

      {/* Title near bottom */}
      <h3 className="absolute inset-x-0 bottom-0 z-10 text-white text-lg md:text-xl font-bold px-4 py-3 bg-gradient-to-t from-black/70 to-transparent">
        {title}
      </h3>
    </Link>
  );
}