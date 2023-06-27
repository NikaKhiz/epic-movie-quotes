import { defineStore } from "pinia";
import { computed, ref } from "vue";
export const useEmailVerificationStore = defineStore(
  "emailVerificationStore",
  () => {
    const emailToVerify = ref("");
    const getEmailToVerify = computed(() => emailToVerify.value);

    return { emailToVerify, getEmailToVerify };
  }
);
