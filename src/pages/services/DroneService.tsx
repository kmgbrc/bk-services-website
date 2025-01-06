import { useTranslation } from 'react-i18next';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceProcess from '../../components/services/ServiceProcess';
import PricingTable from '../../components/services/PricingTable';
import ServiceFAQ from '../../components/services/ServiceFAQ';

export default function DroneService() {
  const { t } = useTranslation();

  const steps = [
      {
        title: t('services.details.drone.steps.consultation.title'),
        description: t('services.details.drone.steps.consultation.description')
      },
      {
        title: t('services.details.drone.steps.planning.title'),
        description: t('services.details.drone.steps.planning.description')
      },
      {
        title: t('services.details.drone.steps.session.title'),
        description: t('services.details.drone.steps.session.description')
      },
      {
        title: t('services.details.drone.steps.postProduction.title'),
        description: t('services.details.drone.steps.postProduction.description')
      },
      {
        title: t('services.details.drone.steps.delivery.title'),
        description: t('services.details.drone.steps.delivery.description')
      }
    ];
  
    const plans = [
      {
        name: t('services.details.drone.plans.basic.name'),
        originalName: 'basic',
        price: "€49",
        description: t('services.details.drone.plans.basic.description'),
        features: t('services.details.drone.plans.basic.features', { returnObjects: true }) as string[]
      },
      {
        name: t('services.details.drone.plans.professional.name'),
        originalName: 'professional',
        price: "€99",
        description: t('services.details.drone.plans.professional.description'),
        features: t('services.details.drone.plans.professional.features', { returnObjects: true }) as string[],
        isPopular: true
      },
      {
        name: t('services.details.drone.plans.premium.name'),
        originalName: 'premium',
        price: "€199",
        description: t('services.details.drone.plans.premium.description'),
        features: t('services.details.drone.plans.premium.features', { returnObjects: true }) as string[]
      }
    ];
  
    const faqs = [
      {
        question: t('services.details.drone.faqs.licence.question'),
        answer: t('services.details.drone.faqs.licence.answer')
      },
      {
        question: t('services.details.drone.faqs.weather.question'),
        answer: t('services.details.drone.faqs.weather.answer')
      },
      {
        question: t('services.details.drone.faqs.restricted.question'),
        answer: t('services.details.drone.faqs.restricted.answer')
      },
      {
        question: t('services.details.drone.faqs.turnaround.question'),
        answer: t('services.details.drone.faqs.turnaround.answer')
      }
    ];
  
    return (
      <div>
        <ServiceHero
          title={t('services.details.drone.hero.title')}
          subtitle={t('services.details.drone.hero.subtitle')}
          image="/src/assets/banner2.jpg"
        />
        
        <div className="py-16">
          <div className="container mx-auto px-4 text-justify">
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-400 mb-8">
                {t('services.details.drone.description.main')}
              </p>
              <p className="text-gray-400 mb-8">
                {t('services.details.drone.description.equipment')}
              </p>
              <p className="text-gray-400">
                {t('services.details.drone.description.process')}
              </p>
            </div>
          </div>
        </div>
  
        <h2 className="text-3xl font-bold mb-1 text-center">{t('services.subsubtitle.process')}</h2>
        <ServiceProcess steps={steps} />
  
        <h2 className="text-3xl font-bold mb-1 text-center">{t('services.subsubtitle.pricing')}</h2>
        <PricingTable plans={plans} serviceName="drone" />
  
        <h2 className="text-3xl font-bold mb-1 text-center">{t('services.subsubtitle.faq')}</h2>
        <ServiceFAQ faqs={faqs} />
      </div>
    );
  }