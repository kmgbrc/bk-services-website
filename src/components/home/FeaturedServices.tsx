import { useTranslation } from 'react-i18next';
import { Camera, PlaneTakeoff, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

export default function FeaturedServices() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Camera,
      key: 'photography',
      link: '/services/photography'
    },
    {
      icon: PlaneTakeoff,
      key: 'drone',
      link: '/services/drone'
    },
    {
      icon: Globe,
      key: 'web',
      link: '/services/web'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-xl text-gray-400">{t('services.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, key, link }) => (
            <div key={key} className="service-card p-8 rounded-lg">
              <Icon className="w-12 h-12 text-[var(--accent)] mb-6" />
              <h3 className="text-xl font-semibold mb-4">{t(`services.${key}`)}</h3>
              <p className="text-gray-400 mb-8">{t(`services.${key}Description`)}</p>
              <Link to={link}>
                <Button variant="outline" className="w-full">
                  {t('services.learnMore')}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}