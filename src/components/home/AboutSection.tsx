import { useTranslation } from "react-i18next";
import Button from "../common/Button";

export default function AboutSection() {
  const { t } = useTranslation();

  const skills = [
    { name: "DaVinci Resolve", progress: 80 },
    { name: "Adobe Premiere Pro / After Effects / Lightroom", progress: 90 },
    { name: "Angular / Spring Boot / React", progress: 85 },
    { name: "Java / Python / Php", progress: 80 },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-32 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              {/* {t("about.title")}
              <br /> */}
              <span>
                {t("about.subtitle")}
              </span>
            </h2>

            <p className="text-gray-400 mb-8 text-lg">
              {t("about.description")}
            </p>

            <Button variant="outline">{t("about.showreel")}</Button>
          </div>

          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span className="text-[var(--accent)]">
                    {skill.progress}%
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e"
              alt="Work in progress"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bgColorBlack)] to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
