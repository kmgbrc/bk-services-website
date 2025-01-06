import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({ title, subtitle, align = 'left' }: SectionTitleProps) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
    </div>
  );
}