import mainDict from "../dictionaries/en.json";

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "ms"],
} as const;

export type Dict = typeof mainDict;

export type Locale = (typeof i18n)["locales"][number];
