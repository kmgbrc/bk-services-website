import { useTranslation } from "react-i18next";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceProcess from "../../components/services/ServiceProcess";
import PricingTable from "../../components/services/PricingTable";
import ServiceFAQ from "../../components/services/ServiceFAQ";

export default function WebService() {
  const { t } = useTranslation();

  const steps = [
    {
      title: t("services.details.web.steps.consultation.title"),
      description: t("services.details.web.steps.consultation.description"),
    },
    {
      title: t("services.details.web.steps.planning.title"),
      description: t("services.details.web.steps.planning.description"),
    },
    {
      title: t("services.details.web.steps.development.title"),
      description: t("services.details.web.steps.development.description"),
    },
    {
      title: t("services.details.web.steps.testing.title"),
      description: t("services.details.web.steps.testing.description"),
    },
    {
      title: t("services.details.web.steps.launch.title"),
      description: t("services.details.web.steps.launch.description"),
    },
  ];

  const plans = [
    {
      name: t("services.details.web.plans.starter.name"),
      originalName: 'starter',
      price: "€999",
      description: t("services.details.web.plans.starter.description"),
      features: t("services.details.web.plans.starter.features", {
        returnObjects: true,
      }) as string[],
      isPopular: true,
    },
    {
      name: t("services.details.web.plans.business.name"),
      originalName: 'business',
      price: "€1999",
      description: t("services.details.web.plans.business.description"),
      features: t("services.details.web.plans.business.features", {
        returnObjects: true,
      }) as string[],
    },
    {
      name: t("services.details.web.plans.enterprise.name"),
      originalName: 'enterprise',
      price: t("services.details.web.plans.enterprise.price"),
      description: t("services.details.web.plans.enterprise.description"),
      features: t("services.details.web.plans.enterprise.features", {
        returnObjects: true,
      }) as string[],
    },
  ];

  const faqs = [
    {
      question: t("services.details.web.faqs.time.question"),
      answer: t("services.details.web.faqs.time.answer"),
    },
    {
      question: t("services.details.web.faqs.hosting.question"),
      answer: t("services.details.web.faqs.hosting.answer"),
    },
    {
      question: t("services.details.web.faqs.selfUpdate.question"),
      answer: t("services.details.web.faqs.selfUpdate.answer"),
    },
    {
      question: t("services.details.web.faqs.seo.question"),
      answer: t("services.details.web.faqs.seo.answer"),
    },
  ];

  return (
    <div>
      <ServiceHero
        title={t("services.details.web.hero.title")}
        subtitle={t("services.details.web.hero.subtitle")}
        image="/src/assets/banner2.jpg"
      />

      <div className="py-16">
        <div className="container mx-auto px-4 text-justify">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-400 mb-8">
              {t("services.details.web.description.main")}
            </p>
            <p className="text-gray-400 mb-8">
              {t("services.details.web.description.equipment")}
            </p>
            <p className="text-gray-400">
              {t("services.details.web.description.process")}
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
      <PricingTable plans={plans} serviceName="web" />

      <h2 className="text-3xl font-bold mb-1 text-center">
        {t("services.subsubtitle.faq")}
      </h2>
      <ServiceFAQ faqs={faqs} />
    </div>
  );
}
