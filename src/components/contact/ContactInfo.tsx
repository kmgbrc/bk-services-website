import { useTranslation } from 'react-i18next';
import { contactIcons, socialIcons } from '../icons';

export default function ContactInfo() {
  const { t } = useTranslation();

  const contactDetails = [
    { icon: contactIcons.phone, text: import.meta.env.VITE_REACT_APP_PHONE, href: import.meta.env.VITE_REACT_APP_PHONE },
    { icon: contactIcons.email, text: import.meta.env.VITE_REACT_APP_EMAIL, href: import.meta.env.VITE_REACT_APP_EMAIL },
    { icon: contactIcons.location, text: t('contact.location'), href: 'https://maps.google.com' }
  ];

  const socialLinks = [
    { icon: socialIcons.instagram, href: 'https://instagram.com/bk_services', platform: 'instagram' },
    { icon: socialIcons.facebook, href: 'https://facebook.com/bk_services', platform: 'facebook' },
    { icon: socialIcons.linkedin, href: 'https://linkedin.com/in/bk_services', platform: 'linkedin' }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {contactDetails.map(({ icon: Icon, text, href }) => (
          <a
            key={href}
            href={href}
            className="flex items-center space-x-3 text-gray-600 hover:text-blue-600"
          >
            <Icon className="w-5 h-5" />
            <span>{text}</span>
          </a>
        ))}
      </div>
      
      <div className="flex space-x-4">
        {socialLinks.map(({ icon: Icon, href, platform }) => (
          <a
            key={platform}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-blue-600"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
}