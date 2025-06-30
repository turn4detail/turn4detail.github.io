import React from 'react';

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

  return (
    <div className={`group ${isOverlay ? 'relative inline-block' : 'mb-2'}`}>
      {/* Label + Chevron */}
      <div className="flex items-center gap-1 cursor-pointer text-white group-hover:text-blue-500 transition-colors">
        <p className="mb-0 font-bold text-sm">{title}</p>
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
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
        <div className="absolute left-0 top-full w-40 bg-[#111111] text-white shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition z-50 duration-200">
          <ul className="py-2 text-sm">
            {items.map((item) => (
              <li key={item.to}>
                <a href={item.to} className="block px-4 py-2 hover:opacity-80 transition-colors duration-500">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
          <ul className="text-sm text-gray-400 space-y-2 mt-2">
            {items.map((item) => (
              <li key={item.to}>
                <a href={item.to} className="text-gray-400 hover:text-white transition-colors">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


