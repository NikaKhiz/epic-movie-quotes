import { defineStore } from "pinia";
import { getCurrentLocale, getFallbackLocale } from "@/utils/getLocale";
import { computed, ref } from "vue";
export const useLanguageStore = defineStore("languageStore", () => {
  const locale = ref(getCurrentLocale());
  const fallbackLocale = ref(getFallbackLocale());

  const currentLocale = computed(() => locale.value);
  const fallBack = computed(() => fallbackLocale.value);

  return { locale, fallbackLocale, currentLocale, fallBack };
});
