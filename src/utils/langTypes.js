//Locales types
export const LocaleEn = 'en';
export const LocaleRu = 'ru';
export const LocalePl = 'pl';

export const SUPPORT_LOCALES = [LocaleEn, LocaleRu, LocalePl];

// Default
export const DEFAULT_LANG = LocaleEn;

//Predicates
export const isSupportLocaleType = (v) =>
  SUPPORT_LOCALES.includes(v);
