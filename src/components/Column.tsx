import React from 'react';

export default function Column({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col space-y-6">
      {children}
    </div>
  );
}

