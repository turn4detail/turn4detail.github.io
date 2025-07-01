import React from 'react';

export default function Column({ children }: { children: React.ReactNode }) {
  return (
    
    // Column component to stack children vertically with spacing
    <div className="w-full flex flex-col space-y-6">
      {children}
    </div>
  );
}

