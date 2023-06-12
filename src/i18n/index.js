import { createI18n } from "vue-i18n";
import { getCurrentLocale, getFallbackLocale } from "@/utils/getLocales";

import en from "@/locales/en.json";
import ka from "@/locales/ka.json";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getCurrentLocale(),
  fallbackLocale: getFallbackLocale(),
  messages: {
    en,
    ka,
  },
});

export default i18n;
