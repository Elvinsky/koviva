import { useCreateLocalStorage } from '@/composables/useCreateLocalStorage';
import { isCatchHandlerError } from '@/utils/errorHandler';

import { DEFAULT_LANG, isSupportLocaleType} from '@/utils/langTypes';

export const LOCALE_STORAGE_KEY_LANG = 'lang';

const { get: getLocaleI18nStorage, set: setLocaleI18nStorage } =
  useCreateLocalStorage(LOCALE_STORAGE_KEY_LANG);

const getInitialLocale = () => {
  const lang = getLocaleI18nStorage();
  const browserLang = window.navigator.language;

  if (lang && !isCatchHandlerError(lang) && isSupportLocaleType(lang)) {
    return lang;
  }

  return isSupportLocaleType(browserLang) ? browserLang : DEFAULT_LANG;
};

export { getInitialLocale, setLocaleI18nStorage, getLocaleI18nStorage };
