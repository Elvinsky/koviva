
import { isRef } from 'vue';
import { createI18n } from 'vue-i18n';

import ru from './locales/ru.json'
import en from './locales/en.json'
import pl from './locales/pl.json'

import { getInitialLocale, LOCALE_STORAGE_KEY_LANG, setLocaleI18nStorage } from '@/i18n/helpers';
import { DEFAULT_LANG, isSupportLocaleType, } from '@/utils/langTypes';

const options = {
  legacy: false,
  fallbackLocale: DEFAULT_LANG,
  messages : Object.assign({
    'ru':ru,
    'en':en,
    'pl':pl,
}),
};

const createLocales = () => {
  const initialLocale = getInitialLocale();

  const i18Instance = createI18n({
    ...options,
    locale: initialLocale,
  });

  const changeI18Language = (i18n) => (locale) => {
    if (!isSupportLocaleType(locale)) {
      console.error('changeI18Language:[function] unsupported locale type');

      return void 0;
    }

    if (isRef(i18n.global.locale)) {
      i18n.global.locale.value = locale;
    } else {
      i18n.global.locale = locale;
    }

    const node = document.querySelector('html');
    if (node) {
      node.setAttribute(LOCALE_STORAGE_KEY_LANG, locale);
    }

    setLocaleI18nStorage(locale);
  };

  return {
    i18Instance,
    changeI18Language: changeI18Language(i18Instance),
    initialLocale,
  };
};

export const { changeI18Language, i18Instance, initialLocale } = createLocales();
