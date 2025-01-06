import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Timeline() {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      {[1, 2, 3].map((index) => (
        <div key={index} className="relative pl-8 border-l-2 border-blue-600">
          <div className="absolute -left-2.5 top-0">
            <div className="w-5 h-5 rounded-full bg-blue-600" />
          </div>
          <div className="mb-1 text-sm text-blue-600 font-semibold">
            {t(`about.timeline.${index}.year`)}
          </div>
          <h3 className="text-lg font-semibold">
            {t(`about.timeline.${index}.title`)}
          </h3>
          <p className="text-gray-600">
            {t(`about.timeline.${index}.description`)}
          </p>
        </div>
      ))}
    </div>
  );
}