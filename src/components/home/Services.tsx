import React from 'react';
import { Monitor, Code, ShoppingCart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Monitor,
      title: 'Web & Mobile Design',
      description: 'Creating beautiful and functional interfaces for web and mobile applications.'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building robust and scalable web applications using modern technologies.'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Developing complete e-commerce solutions for your business needs.'
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16">My Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card p-8 rounded-lg">
              <service.icon className="w-12 h-12 text-[var(--accent)] mb-6" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}