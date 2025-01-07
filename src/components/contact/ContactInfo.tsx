import { useTranslation } from "react-i18next";
import { contactIcons, socialIcons } from "../icons";

export default function ContactInfo() {
  const { t } = useTranslation();

  const contactDetails = [
    {
      icon: contactIcons.phone,
      name: t("contact.info.phone.name"),
      value: import.meta.env.VITE_REACT_APP_PHONE,
      href: "tel:" + `${import.meta.env.VITE_REACT_APP_PHONE}`,
    },
    {
      icon: contactIcons.email,
      name: t("contact.info.mail.name"),
      value: import.meta.env.VITE_REACT_APP_EMAIL,
      href: "mailto:" + `${import.meta.env.VITE_REACT_APP_EMAIL}`,
    },
    {
      icon: contactIcons.clock,
      name: t("contact.info.hour.name"),
      value: t("contact.info.hour.value"),
    },
    {
      icon: contactIcons.location,
      name: t("contact.info.address.name"),
      value: t("contact.info.address.location"),
      href: "https://www.google.com/maps/place/Ferrara,+Province+of+Ferrara/@44.8362929,11.5652464,13z/data=!3m1!4b1!4m6!3m5!1s0x477e4e0bde2b11dd:0x3c3b79ae53712b2e!8m2!3d44.83925!4d11.6175537!16zL20vMGNmZmQ?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: contactIcons.globe,
      name: t("contact.info.globe.name"),
      value: t("contact.info.globe.value"),
    },
  ];

  const socialLinks = [
    {
      icon: socialIcons.instagram,
      href: "https://instagram.com/bk_services",
      platform: "instagram",
    },
    {
      icon: socialIcons.facebook,
      href: "https://facebook.com/bk_services",
      platform: "facebook",
    },
    {
      icon: socialIcons.linkedin,
      href: "https://linkedin.com/in/bk_services",
      platform: "linkedin",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {contactDetails.map(({ icon: Icon, value, name, href }) => (
          <div
            key={name}
            className="service-card p-6 rounded-lg flex items-start gap-4 transition-transform hover:scale-105"
          >
            <Icon className="w-15 h-15 mt-5" />
            <div>
              <h3 className="text-lg font-semibold mb-1">{name}</h3>
              {href ? (
                <a
                  href={href}
                  className="text-gray-400 hover:text-[var(--accent)] transition-colors"
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                >
                  <span>{value}</span>
                </a>
              ) : (
                <p className="text-gray-400">{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-start items-center gap-7">
        {socialLinks.map(({ icon: Icon, href, platform }) => (
          <a
            key={platform}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="pr-2 text-gray-600 hover:text-blue-600"
          >
            <Icon className="w-15 h-15" />
          </a>
        ))}
      </div>
    </div>
  );
}
