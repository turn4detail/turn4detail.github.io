import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  bgColor?: string;
  className?: string;
}

export default function Section({
  children,
  bgColor = '',
  className = '',
}: SectionProps) {
  return (
    
    // Section component to wrap content with optional background color and padding
    <section className={`w-full ${bgColor} ${className}`}> 
      <div className="w-full max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}