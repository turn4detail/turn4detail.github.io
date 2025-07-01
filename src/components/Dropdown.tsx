import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface DropdownItem {
  label: string;
  to: string;
}

interface DropdownProps {
  title: string;
  items: DropdownItem[];
  variant?: 'expand' | 'overlay';
}

export default function Dropdown({
  title,
  items,
  variant = 'expand',
}: DropdownProps) {
  const isOverlay = variant === 'overlay';
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div
      className={`group ${isOverlay ? 'relative inline-block' : 'mb-2'}`}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Label + Chevron */}
      <div
        className="flex items-center gap-1 cursor-pointer text-white group-hover:text-blue-500 transition-colors"
        onClick={toggleDropdown}
      >
        <p className="mb-0 font-bold text-sm">{title}</p>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
            }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Dropdown Content */}
      {isOverlay ? (
        <div
          className={`absolute left-0 top-full w-40 bg-[#111111] text-white shadow-lg z-50 transition duration-200
            ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
            group-hover:opacity-100 group-hover:pointer-events-auto
          `}
        >
          <ul className="py-2 text-sm">
            {items.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block px-4 py-2 hover:opacity-80 transition-colors duration-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div
          className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-40' : 'max-h-0'
            }`}
        >
          <ul className="text-sm text-gray-400 space-y-2 mt-2">
            {items.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}




