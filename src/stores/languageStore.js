import { defineStore } from "pinia";
import { getCurrentLocale, getFallbackLocale } from "@/utils/getLocale";

export const useLanguageStore = defineStore("languageStore", {
  state: () => {
    return {
      locale: getCurrentLocale(),
      fallbackLocale: getFallbackLocale(),
    };
  },
  getters: {
    currentLocale: (state) => state.locale,
    fallBack: (state) => state.fallbackLocale,
  },
});
