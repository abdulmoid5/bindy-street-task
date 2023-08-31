import i18n from 'i18n-js';
import en from '../default/en.json';

i18n.fallbacks = true;
i18n.locales.no = ['en'];

i18n.locale = 'en-US';

i18n.translations = {
  en,
};

export const i18nt = (key: string) => {
  if (!key) {
    return key;
  }
  return i18n.t(key);
};

export default i18n;
