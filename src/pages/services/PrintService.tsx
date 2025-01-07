import { useTranslation } from "react-i18next";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceProcess from "../../components/services/ServiceProcess";
import PricingTable from "../../components/services/PricingTable";
import ServiceFAQ from "../../components/services/ServiceFAQ";

export default function PrintService() {
  const { t } = useTranslation();

  const steps = [
    {
      title: t("services.details.printing.steps.consultation.title"),
      description: t("services.details.printing.steps.consultation.description"),
    },
    {
      title: t("services.details.printing.steps.filePreparation.title"),
      description: t("services.details.printing.steps.filePreparation.description"),
    },
    {
      title: t("services.details.printing.steps.proofReview.title"),
      description: t("services.details.printing.steps.proofReview.description"),
    },
    {
      title: t("services.details.printing.steps.production.title"),
      description: t("services.details.printing.steps.production.description"),
    },
    {
      title: t("services.details.printing.steps.finishingDelivery.title"),
      description: t("services.details.printing.steps.finishingDelivery.description"),
    },
  ];

  const plans = [
    {
      name: t("services.details.printing.plans.basic.name"),
      originalName: 'basic',
      price: "€149",
      description: t("services.details.printing.plans.basic.description"),
      features: t("services.details.printing.plans.basic.features", {
        returnObjects: true,
      }) as string[],
    },
    {
      name: t("services.details.printing.plans.professional.name"),
      originalName: 'professional',
      price: "€399",
      description: t("services.details.printing.plans.professional.description"),
      features: t("services.details.printing.plans.professional.features", {
        returnObjects: true,
      }) as string[],
      isPopular: true,
    },
    {
      name: t("services.details.printing.plans.premium.name"),
      originalName: 'premium',
      price: "€749",
      description: t("services.details.printing.plans.premium.description"),
      features: t("services.details.printing.plans.premium.features", {
        returnObjects: true,
      }) as string[],
    },
  ];

  const faqs = [
    {
      question: t("services.details.printing.faqs.methods.question"),
      answer: t("services.details.printing.faqs.methods.answer"),
    },
    {
      question: t("services.details.printing.faqs.paperOptions.question"),
      answer: t("services.details.printing.faqs.paperOptions.answer"),
    },
    {
      question: t("services.details.printing.faqs.rushPrinting.question"),
      answer: t("services.details.printing.faqs.rushPrinting.answer"),
    },
    {
      question: t("services.details.printing.faqs.largeQuantities.question"),
      answer: t("services.details.printing.faqs.largeQuantities.answer"),
    },
  ];

  return (
    <div>
      <ServiceHero
        title={t("services.details.printing.hero.title")}
        subtitle={t("services.details.printing.hero.subtitle")}
        image="/src/assets/banner2.jpg"
      />

      <div className="py-16">
        <div className="container mx-auto px-4 text-justify">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-400 mb-8">
              {t("services.details.printing.description.main")}
            </p>
            <p className="text-gray-400 mb-8">
              {t("services.details.printing.description.equipment")}
            </p>
            <p className="text-gray-400">
              {t("services.details.printing.description.process")}
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
      <PricingTable plans={plans} serviceName="printing" />

      <h2 className="text-3xl font-bold mb-1 text-center">
        {t("services.subsubtitle.faq")}
      </h2>
      <ServiceFAQ faqs={faqs} />
    </div>
  );
}
