import "server-only";
import { i18n, Locale } from "../../i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  ms: () => import("../dictionaries/ms.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  if (!i18n.locales.includes(locale)) {
    return dictionaries[i18n.defaultLocale]();
  }
  return dictionaries[locale]();
};
