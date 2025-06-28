import React from 'react';

export default function BookNowButton({ children = 'Book Now' }) {
  return (
    <button
      className="
        inline-flex
        items-center
        rounded-md
        border
        border-white
        bg-transparent
        px-5
        py-2.5
        text-sm
        font-medium
        text-white
        shadow-sm
        transition
        hover:bg-white
        hover:text-black
      "
    >
      {children}
    </button>
  );
}
