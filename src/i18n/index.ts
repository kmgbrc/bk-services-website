import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import it from './locales/it.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      de: { translation: de },
      it: { translation: it }
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;