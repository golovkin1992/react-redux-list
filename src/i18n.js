import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonDe from './translations/de/common.json';
import commonEn from './translations/en/common.json';
import commonRu from './translations/ru/common.json';

i18next
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    keySeparator: '.',
    lng: 'en',
    resources: {
      en: {
        common: commonEn,
      },
      de: {
        common: commonDe,
      },
      ru: {
        common: commonRu,
      },
    },
    ns: ['common'],
    defaultNS: 'common',
  });


export default i18next;
