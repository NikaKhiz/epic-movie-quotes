<script setup>
import IconDropdown from "@/components/icons/IconDropdown.vue";
import { useLanguageStore } from "@/stores/languageStore";
import { ref } from "vue";
import { setLocale } from "@vee-validate/i18n";

const languageStore = useLanguageStore();

const changeLocale = (locale) => {
  languageStore.locale = locale;
  sessionStorage.setItem("locale", locale);
  showLanguageList();
};
const languageList = ref(false);
const showLanguageList = () => {
  languageList.value = !languageList.value;
};
</script>
<template>
  <div>
    <div class="hidden md:block relative">
      <div
        @click="showLanguageList"
        class="cursor-pointer text-neutralWhite hidden md:flex items-center gap-3 px-4 md:px-6 py-1 md:py-2 text-sm md:text-base rounded-md overlow-hidden"
      >
        <span class="capitalize">{{ languageStore.currentLocale }}</span
        ><IconDropdown />
      </div>
      <div class="top-10 left-0 absolute w-full text-white overflow-hidden">
        <transition
          appear
          enter-from-class="opacity-0 -translate-y-[110%]"
          enter-active-class="transition-[all] duration-[500ms]"
          enter-to-class="translate-y-0 opacity-100"
          leave-from-class="opacity-100 translate-y-0"
          leave-active-class="transition-[all] duration-[500ms]"
          leave-to-class="opacity-0 -translate-y-[110%]"
        >
          <ul
            v-if="languageList"
            class="flex flex-col gap-2 rounded-md border-1 border-neutralBlack border-opacity-80"
          >
            <li
              v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`"
              class="cursor-pointer capitalize text-sm px-4 py-1"
              @click="
                $i18n.locale = locale;
                setLocale(locale);
                changeLocale(locale);
              "
            >
              {{ locale }}
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </div>
</template>
