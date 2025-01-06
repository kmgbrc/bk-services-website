import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function LatestWork() {
  const { t } = useTranslation();

  const works = [
    {
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
      category: 'photography',
      title: 'Product Photography'
    },
    {
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4',
      category: 'video',
      title: 'Corporate Video'
    },
    {
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
      category: 'graphics',
      title: 'Brand Identity'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">{t('portfolio.latestWork')}</h2>
            <p className="text-xl text-gray-600">{t('portfolio.latestWorkSubtitle')}</p>
          </div>
          <Link
            to="/portfolio"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>{t('portfolio.viewAll')}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-blue-400 text-sm uppercase">{work.category}</span>
                  <h3 className="text-white text-xl font-semibold mt-2">{work.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}