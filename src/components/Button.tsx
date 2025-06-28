import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  className = ''
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        inline-flex
        items-center
        rounded-md
        border
        border-zinc-700
        bg-zinc-900
        px-4
        py-2
        text-sm
        font-medium
        text-white
        shadow-sm
        transition
        hover:opacity-80
        ${className}
      `}
    >
      {children}
    </button>
  );
}