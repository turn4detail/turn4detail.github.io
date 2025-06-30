import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  href?: string; 
}

export default function Button({
  children,
  onClick,
  type = 'button',
  className = '',
  href
}: ButtonProps) {
  const buttonElement = (
    <button
      type={type}
      onClick={onClick}
      className={`
        inline-flex
        items-center
        bg-blue-600
        border
        border-blue-400
        px-4
        py-2
        text-lg
        text-black
        font-bold
        uppercase
        shadow-sm
        transition
        hover:bg-blue-500
        hover:border-blue-300
        hover:text-zinc-100
        duration-300
        ${className}
      `}
    >
      {children}
    </button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonElement}
      </a>
    );
  }

  return buttonElement;
}
