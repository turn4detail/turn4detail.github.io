import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  video: string;
  poster: string;
  to: string;
}

export default function Card({ title, video, poster, to }: CardProps) {
  return (
    <Link
      to={to}
      className="
        relative overflow-hidden shadow-mdAdd commentMore actions
          h-64 lg:h-72
          cursor-pointer
          transition transform hover:scale-105
          [clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0%_100%)]
          bg-gray-200"
    >
      {/* Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        src={video}
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-300"/>

      {/* Title */}
      <h3 className="absolute inset-x-0 bottom-0 z-10 text-white text-lg md:text-xl font-bold px-4 py-3 bg-gradient-to-t from-black/70 to-transparent">
        {title}
      </h3>
    </Link>
  );
}
