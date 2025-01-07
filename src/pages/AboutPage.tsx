import { useTranslation } from "react-i18next";
import Header from "../components/layout/Header";
import AboutSection from "../components/home/AboutSection";
import Testimonials from "../components/home/Testimonials";
import { Award, Briefcase, GraduationCap } from "lucide-react";

export default function AboutPage() {
  const { t } = useTranslation();

  const experiences = Array.from({ length: 5 }, (_, index) => ({
    year: t(`about.experience.positions.${index + 1}.period`),
    title: t(`about.experience.positions.${index + 1}.title`),
    company: t(`about.experience.positions.${index + 1}.company`),
    description: t(`about.experience.positions.${index + 1}.description`),
  }));
  

  const certifications = Array.from({ length: 3 }, (_, index) => ({
    title: t(`about.certifications.items.${index + 1}.title`),
    organization: t(`about.certifications.items.${index + 1}.organization`),
    year: t(`about.certifications.items.${index + 1}.year`),
  }));
  

  const education = Array.from({ length: 3 }, (_, index) => ({
    title: t(`about.education.items.${index + 1}.title`),
    institution: t(`about.education.items.${index + 1}.institution`),
    year: t(`about.education.items.${index + 1}.period`),
  }));
  

  return (
    <div className="pt-20">
      <Header
        bgImg="src\\assets\\droneMontains.jpg"
        title={t("aboutPage.title")}
        subtitle={t("aboutPage.subtitle")}
      />

      <AboutSection />

      <Testimonials />

      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">
            {t("about.experience.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[var(--accent)]" />
                {t("about.experience.workExperience")}
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-[var(--accent)]"
                  >
                    <div className="absolute -left-2.5 top-0">
                      <div className="w-5 h-5 rounded-full bg-[var(--accent)]" />
                    </div>
                    <div className="mb-2 text-[var(--accent)]">{exp.year}</div>
                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                    <p className="text-gray-400 mb-2">{exp.company}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
                <Award className="w-5 h-5 text-[var(--accent)]" />
                {t("about.certifications.title")}
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="service-card p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                    <p className="text-gray-400">{cert.organization}</p>
                    <p className="text-[var(--accent)] text-sm mt-2">
                      {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-[var(--bgColorSoft)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-[var(--accent)]" />
            {t("about.education.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="service-card p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{edu.title}</h3>
                <p className="text-gray-400">{edu.institution}</p>
                <p className="text-[var(--accent)] mt-4">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
