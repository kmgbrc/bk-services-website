import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[var(--bgColorBlack)] text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              {import.meta.env.VITE_REACT_APP_TITLE}
            </h3>
            <p className="mb-6">{t("footer.description")}</p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-3">
              {["home", "services", "portfolio", "about", "contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={`/${link === "home" ? "" : link}`}
                      className="hover:text-[var(--accent)] transition-colors"
                    >
                      {t(`nav.${link}`)}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              {t("footer.services")}
            </h4>
            <ul className="space-y-3">
              {[
                "photography",
                "video",
                "drone",
                "web",
                "graphics",
                "printing",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to={`/services/${service}`}
                    className="hover:text-[var(--accent)] transition-colors"
                  >
                    {t(`services.${service}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              {t("footer.contact")}
            </h4>
            {[
              {
                Icon: Phone,
                text: import.meta.env.VITE_REACT_APP_PHONE,
              },
              {
                Icon: Mail,
                text: import.meta.env.VITE_REACT_APP_EMAIL,
              },
              { Icon: MapPin, text: t("contact.info.address.location") },
            ].map(({ Icon, text }, index) => (
              <div key={index} className="flex items-center gap-3 mb-4">
                <Icon className="w-5 h-5 text-[var(--accent)]" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} | <span style={{ color: "var(--accent)" }}>
              {import.meta.env.VITE_REACT_APP_TITLE}
            </span> | {t("footer.rights")}.
          </p>
        </div>
      </div>
    </footer>
  );
}
