import { defineStore } from "pinia";
import { ref } from "vue";

export const useBackErrorsStore = defineStore("backErrorsStore", () => {
  const errors = ref({});
  function $reset() {
    errors.value = {};
  }

  return { errors, $reset };
});
