import en from './en.json';
import de from './de.json';

const translations = {
  en,
  de
};

export type Language = keyof typeof translations;

export function getTranslations(lang: Language) {
  return translations[lang] || translations.en;
}

export function t(key: string, lang: Language, params?: Record<string, string | number>): string {
  const translation = getTranslations(lang);
  const keys = key.split('.');
  
  let value: any = translation;
  for (const k of keys) {
    value = value?.[k];
  }
  
  if (typeof value !== 'string') {
    console.warn(`Translation key "${key}" not found for language "${lang}"`);
    return key;
  }
  
  // Simple parameter substitution
  if (params) {
    return value.replace(/\{\{(\w+)\}\}/g, (match: string, paramKey: string) => {
      return params[paramKey]?.toString() || match;
    });
  }
  
  return value;
}

export function getLanguageFromUrl(url: URL): Language {
  const pathname = url.pathname;
  if (pathname.startsWith('/de')) {
    return 'de';
  }
  return 'en';
}

export function localizeUrl(url: string, lang: Language): string {
  if (lang === 'en') {
    return url;
  }
  return `/${lang}${url === '/' ? '' : url}`;
}