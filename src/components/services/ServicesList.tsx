import React from 'react';
import { useTranslation } from 'react-i18next';
import { serviceIcons } from '../icons';
import ServiceCard from './ServiceCard';

export default function ServicesList() {
  const { t } = useTranslation();

  const services = [
    { key: 'photography' },
    { key: 'video' },
    { key: 'graphics' },
    { key: 'production' },
    { key: 'drone' },
    { key: 'web' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map(({ key }) => (
        <ServiceCard
          key={key}
          icon={serviceIcons[key]}
          title={t(`services.${key}`)}
          description={t(`services.${key}Description`)}
        />
      ))}
    </div>
  );
}