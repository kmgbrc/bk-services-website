import { useTranslation } from "react-i18next";
import Header from "../components/layout/Header";
import AboutSection from "../components/home/AboutSection";
import Testimonials from "../components/home/Testimonials";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      <Header
        bgImg="src\\assets\\droneMontains.jpg"
        title={t("aboutPage.title")}
        subtitle={t("aboutPage.subtitle")}
      />

      <AboutSection />

      <Testimonials />

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">
              {t("aboutPage.experience.title")}
            </h2>
            <div className="space-y-8">
              {["2020", "2018", "2016"].map((year) => (
                <div
                  key={year}
                  className="relative pl-8 border-l-2 border-[var(--accent)]"
                >
                  <div className="absolute -left-2.5 top-0">
                    <div className="w-5 h-5 rounded-full bg-[var(--accent)]" />
                  </div>
                  <div className="mb-2 text-[var(--accent)]">{year}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t(`aboutPage.experience.positions.${year}.title`)}
                  </h3>
                  <p className="text-gray-400">
                    {t(`aboutPage.experience.positions.${year}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">
              {t("aboutPage.education.title")}
            </h2>
            <div className="space-y-8">
              {["masters", "uxCert", "webDev"].map((item) => (
                <div key={item} className="service-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    {t(`aboutPage.education.items.${item}.title`)}
                  </h3>
                  <p className="text-gray-400">
                    {t(`aboutPage.education.items.${item}.institution`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
