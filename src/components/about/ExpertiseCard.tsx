import React from 'react';
import { aboutIcons } from '../icons';

interface ExpertiseCardProps {
  type: keyof typeof aboutIcons;
  title: string;
  items: string[];
}

export default function ExpertiseCard({ type, title, items }: ExpertiseCardProps) {
  const Icon = aboutIcons[type];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Icon className="w-8 h-8 text-blue-600 mb-4" />
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}