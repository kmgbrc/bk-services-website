import { useTranslation } from 'react-i18next';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Header from '../components/layout/Header';

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      <Header
        bgImg="src\\assets\\droneMontains.jpg"
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <ContactForm />
          <div>
            <h3 className="text-xl font-semibold mb-8">{t('contact.info.title')}</h3>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}