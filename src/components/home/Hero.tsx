import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import Button from "../common/Button";

export default function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[90vh] bg-[#1a1418]">
      <div className="absolute inset-0">
        <img
          src="src/assets/banner.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#13161D] via-[#13161D]/90 to-[#13161D]/70" />
      </div>

      <div className="relative container mx-auto px-4 min-h-[90vh] flex items-center">
        <div className="max-w-5xl">
          <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold mb-6">
            {t("hero.welcome")}
          </h1>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-[var(--accent)]">{t("hero.subtitle")}</span>
          </h1>

          <p className="text-gray-400 mb-8 text-xl max-w-2xl">
            {t("hero.description")}
          </p>

          <Button
            variant="outline"
            className="text-lg px-8 py-4"
            onClick={() => navigate('/services')}
          >
            {t("hero.cta")}
          </Button>
        </div>
      </div>
    </div>
  );
}
