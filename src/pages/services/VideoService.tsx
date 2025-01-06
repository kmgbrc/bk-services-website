import { useTranslation } from "react-i18next";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceProcess from "../../components/services/ServiceProcess";
import PricingTable from "../../components/services/PricingTable";
import ServiceFAQ from "../../components/services/ServiceFAQ";

export default function VideoService() {
  const { t } = useTranslation();

  const steps = [
    {
      title: t("services.details.video.steps.preProduction.title"),
      description: t("services.details.video.steps.preProduction.description"),
    },
    {
      title: t("services.details.video.steps.setup.title"),
      description: t("services.details.video.steps.setup.description"),
    },
    {
      title: t("services.details.video.steps.filming.title"),
      description: t("services.details.video.steps.filming.description"),
    },
    {
      title: t("services.details.video.steps.postProduction.title"),
      description: t("services.details.video.steps.postProduction.description"),
    },
    {
      title: t("services.details.video.steps.delivery.title"),
      description: t("services.details.video.steps.delivery.description"),
    },
  ];

  const plans = [
    {
      name: t("services.details.video.plans.basic.name"),
      originalName: 'basic',
      price: "€249",
      description: t("services.details.video.plans.basic.description"),
      features: t("services.details.video.plans.basic.features", {
        returnObjects: true,
      }) as string[],
    },
    {
      name: t("services.details.video.plans.professional.name"),
      originalName: 'professional',
      price: "€399",
      description: t("services.details.video.plans.professional.description"),
      features: t("services.details.video.plans.professional.features", {
        returnObjects: true,
      }) as string[],
      isPopular: true,
    },
    {
      name: t("services.details.video.plans.premium.name"),
      originalName: 'premium',
      price: "€599",
      description: t("services.details.video.plans.premium.description"),
      features: t("services.details.video.plans.premium.features", {
        returnObjects: true,
      }) as string[],
    },
  ];

  const faqs = [
    {
      question: t("services.details.video.faqs.specialization.question"),
      answer: t("services.details.video.faqs.specialization.answer"),
    },
    {
      question: t("services.details.video.faqs.delivery.question"),
      answer: t("services.details.video.faqs.delivery.answer"),
    },
    {
      question: t("services.details.video.faqs.scriptWriting.question"),
      answer: t("services.details.video.faqs.scriptWriting.answer"),
    },
    {
      question: t("services.details.video.faqs.subtitles.question"),
      answer: t("services.details.video.faqs.subtitles.answer"),
    },
  ];

  return (
    <div>
      <ServiceHero
        title={t("services.details.video.hero.title")}
        subtitle={t("services.details.video.hero.subtitle")}
        image="/src/assets/banner2.jpg"
      />

      <div className="py-16">
        <div className="container mx-auto px-4 text-justify">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-400 mb-8">
              {t("services.details.video.description.main")}
            </p>
            <p className="text-gray-400 mb-8">
              {t("services.details.video.description.equipment")}
            </p>
            <p className="text-gray-400">
              {t("services.details.video.description.process")}
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-1 text-center">
        {t("services.subsubtitle.process")}
      </h2>
      <ServiceProcess steps={steps} />

      <h2 className="text-3xl font-bold mb-1 text-center">
        {t("services.subsubtitle.pricing")}
      </h2>
      <PricingTable plans={plans} serviceName="video"/>

      <h2 className="text-3xl font-bold mb-1 text-center">
        {t("services.subsubtitle.faq")}
      </h2>
      <ServiceFAQ faqs={faqs} />
    </div>
  );
}
