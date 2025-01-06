import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Camera, Video, Palette, Printer, PlaneTakeoff, Globe } from 'lucide-react';
import Header from '../components/layout/Header';

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = [
    { 
      icon: Camera, 
      key: 'photography', 
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
      path: '/services/photography',
      features: ['feature1', 'feature2', 'feature3']
    },
    { 
      icon: Video, 
      key: 'video', 
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4',
      path: '/services/video',
      features: ['feature1', 'feature2', 'feature3']
    },
    { 
      icon: PlaneTakeoff, 
      key: 'drone', 
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f',
      path: '/services/drone',
      features: ['feature1', 'feature2', 'feature3']
    },
    { 
      icon: Globe, 
      key: 'web', 
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      path: '/services/web',
      features: ['feature1', 'feature2', 'feature3']
    },
    { 
      icon: Palette, 
      key: 'graphics', 
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
      path: '/services/graphics',
      features: ['feature1', 'feature2', 'feature3']
    },
    { 
      icon: Printer, 
      key: 'production', 
      image: 'https://images.unsplash.com/photo-1504270997636-07ddfbd48945',
      path: '/services/production',
      features: ['feature1', 'feature2', 'feature3']
    },
  ];

  return (
    <div className="pt-20">
      <Header
        bgImg="src\\assets\\droneMontains.jpg"
        title={t("services.title")}
        subtitle={t("services.subtitle")}
      />

<div className="container mx-auto px-4 py-20">
        <div className="grid gap-16">
          {services.map(({ icon: Icon, key, image, path, features }) => (
            <Link 
              key={key} 
              to={path}
              className="group grid md:grid-cols-2 gap-12 items-center service-card p-8 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="order-2 md:order-1">
                <Icon className="w-16 h-16 text-[var(--accent)] mb-6" />
                <h2 className="text-3xl font-bold mb-4">{t(`services.${key}`)}</h2>
                <p className="text-gray-400 mb-6">{t(`services.${key}Description`)}</p>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                      <span className="text-gray-400">
                        {t(`services.${key}Features.${feature}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={image}
                  alt={t(`services.${key}`)}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
