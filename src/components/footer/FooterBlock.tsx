import React from 'react';

export default function FooterBlock({
    title,
    children
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <p className="mb-2 text-white font-bold text-md">{title}</p>
            {children}
        </div>
    );
}