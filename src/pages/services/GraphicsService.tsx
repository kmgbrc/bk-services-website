import { useTranslation } from "react-i18next";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceProcess from "../../components/services/ServiceProcess";
import PricingTable from "../../components/services/PricingTable";
import ServiceFAQ from "../../components/services/ServiceFAQ";

export default function GraphicsService() {
  const { t } = useTranslation();

  const steps = [
    {
      title: t("services.details.graphics.steps.discovery.title"),
      description: t("services.details.graphics.steps.discovery.description"),
    },
    {
      title: t("services.details.graphics.steps.concept.title"),
      description: t("services.details.graphics.steps.concept.description"),
    },
    {
      title: t("services.details.graphics.steps.design.title"),
      description: t("services.details.graphics.steps.design.description"),
    },
    {
      title: t("services.details.graphics.steps.refinement.title"),
      description: t("services.details.graphics.steps.refinement.description"),
    },
    {
      title: t("services.details.graphics.steps.delivery.title"),
      description: t("services.details.graphics.steps.delivery.description"),
    },
  ];

  const plans = [
    {
      name: t("services.details.graphics.plans.basic.name"),
      originalName: 'basic',
      price: "€119",
      description: t("services.details.graphics.plans.basic.description"),
      features: t("services.details.graphics.plans.basic.features", {
        returnObjects: true,
      }) as string[],
    },
    {
      name: t("services.details.graphics.plans.business.name"),
      originalName: 'business',
      price: "€249",
      description: t("services.details.graphics.plans.business.description"),
      features: t("services.details.graphics.plans.business.features", {
        returnObjects: true,
      }) as string[],
      isPopular: true,
    },
    {
      name: t("services.details.graphics.plans.premium.name"),
      originalName: 'premium',
      price: "€449",
      description: t("services.details.graphics.plans.premium.description"),
      features: t("services.details.graphics.plans.premium.features", {
        returnObjects: true,
      }) as string[],
    },
  ];

  const faqs = [
    {
      question: t("services.details.graphics.faqs.formats.question"),
      answer: t("services.details.graphics.faqs.formats.answer"),
    },
    {
      question: t("services.details.graphics.faqs.rush.question"),
      answer: t("services.details.graphics.faqs.rush.answer"),
    },
    {
      question: t("services.details.graphics.faqs.printing.question"),
      answer: t("services.details.graphics.faqs.printing.answer"),
    },
    {
      question: t("services.details.graphics.faqs.illustrations.question"),
      answer: t("services.details.graphics.faqs.illustrations.answer"),
    },
  ];

  return (
    <div>
      <ServiceHero
        title={t("services.details.graphics.hero.title")}
        subtitle={t("services.details.graphics.hero.subtitle")}
        image="/src/assets/banner2.jpg"
      />

      <div className="py-16">
        <div className="container mx-auto px-4 text-justify">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-400 mb-8">
              {t("services.details.graphics.description.main")}
            </p>
            <p className="text-gray-400 mb-8">
              {t("services.details.graphics.description.equipment")}
            </p>
            <p className="text-gray-400">
              {t("services.details.graphics.description.process")}
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
      <PricingTable plans={plans} serviceName="graphics" />

      <h2 className="text-3xl font-bold mb-1 text-center">
        {t("services.subsubtitle.faq")}
      </h2>
      <ServiceFAQ faqs={faqs} />
    </div>
  );
}
