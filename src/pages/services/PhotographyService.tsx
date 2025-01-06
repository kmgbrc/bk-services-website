import { useTranslation } from 'react-i18next';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceProcess from '../../components/services/ServiceProcess';
import PricingTable from '../../components/services/PricingTable';
import ServiceFAQ from '../../components/services/ServiceFAQ';

export default function PhotographyService() {
  const { t } = useTranslation();

  const steps = [
    {
      title: t('services.details.photography.steps.consultation.title'),
      description: t('services.details.photography.steps.consultation.description')
    },
    {
      title: t('services.details.photography.steps.planning.title'),
      description: t('services.details.photography.steps.planning.description')
    },
    {
      title: t('services.details.photography.steps.session.title'),
      description: t('services.details.photography.steps.session.description')
    },
    {
      title: t('services.details.photography.steps.postProduction.title'),
      description: t('services.details.photography.steps.postProduction.description')
    },
    {
      title: t('services.details.photography.steps.delivery.title'),
      description: t('services.details.photography.steps.delivery.description')
    }
  ];

  const plans = [
    {
      name: t('services.details.photography.plans.basic.name'),
      originalName: 'basic',
      price: "€99",
      description: t('services.details.photography.plans.basic.description'),
      features: t('services.details.photography.plans.basic.features', { returnObjects: true }) as string[]
    },
    {
      name: t('services.details.photography.plans.professional.name'),
      originalName: 'professional', 
      price: "€249",
      description: t('services.details.photography.plans.professional.description'),
      features: t('services.details.photography.plans.professional.features', { returnObjects: true }) as string[]
    },
    {
      name: t('services.details.photography.plans.premium.name'),
      originalName: 'premium',
      price: "€499",
      description: t('services.details.photography.plans.premium.description'),
      features: t('services.details.photography.plans.premium.features', { returnObjects: true }) as string[],
      isPopular: true
    }
  ];
  

  const faqs = [
    {
      question: t('services.details.photography.faqs.specialization.question'),
      answer: t('services.details.photography.faqs.specialization.answer')
    },
    {
      question: t('services.details.photography.faqs.delivery.question'),
      answer: t('services.details.photography.faqs.delivery.answer')
    },
    {
      question: t('services.details.photography.faqs.raw.question'),
      answer: t('services.details.photography.faqs.raw.answer')
    },
    {
      question: t('services.details.photography.faqs.weather.question'),
      answer: t('services.details.photography.faqs.weather.answer')
    }
  ];

  return (
    <div>
      <ServiceHero
        title={t('services.details.photography.hero.title')}
        subtitle={t('services.details.photography.hero.subtitle')}
        image="/src/assets/banner2.jpg"
      />
      
      <div className="py-16">
        <div className="container mx-auto px-4 text-justify">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-400 mb-8">
              {t('services.details.photography.description.main')}
            </p>
            <p className="text-gray-400 mb-8">
              {t('services.details.photography.description.equipment')}
            </p>
            <p className="text-gray-400">
              {t('services.details.photography.description.process')}
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-1 text-center">{t('services.subsubtitle.process')}</h2>
      <ServiceProcess steps={steps} />

      <h2 className="text-3xl font-bold mb-1 text-center">{t('services.subsubtitle.pricing')}</h2>
      <PricingTable plans={plans} serviceName="photography" />

      <h2 className="text-3xl font-bold mb-1 text-center">{t('services.subsubtitle.faq')}</h2>
      <ServiceFAQ faqs={faqs} />
    </div>
  );
}