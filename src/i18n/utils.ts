import { ui, defaultLang } from './ui';
import type { Lang, TranslationKey } from './ui';

export function getLang(locale: string | undefined): Lang {
  if (locale && locale in ui) return locale as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return (ui[lang]?.[key] ?? ui[defaultLang][key]) as string;
  };
}
