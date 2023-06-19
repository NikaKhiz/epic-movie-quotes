import { useModalStore } from "@/stores/modalStore.js";
import { usePasswordResetStore } from "@/stores/passwordResetStore.js";
import { toggleModal } from "@/utils/toggleModal.js";

export const openResetPasswordForm = (_, _2, next) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  usePasswordResetStore().token = urlParams.get("token");
  usePasswordResetStore().email = urlParams.get("email");
  next({ name: "landing" });
  toggleModal(useModalStore(), "passwordReset");
};
