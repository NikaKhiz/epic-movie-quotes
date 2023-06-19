import { verifyEmail } from "@/services/api/auth.js";
import { useModalStore } from "@/stores/modalStore.js";
import { useEmailVerificationStore } from "@/stores/emailVerificationStore.js";
import { toggleModal } from "@/utils/toggleModal.js";

export const emailVerification = (to, from, next) => {
  const userVerificationLink = `/api${to.fullPath.split("?email=")[0]}`;
  const userEmail = to.fullPath.split("?email=")[1];
  verifyEmail(userVerificationLink)
    .then((response) => {
      if (response.status === 204) {
        toggleModal(useModalStore(), "accauntActivated");
      }
    })
    .catch(() => {
      useEmailVerificationStore().emailToVerify = userEmail;
      toggleModal(useModalStore(), "linkExpiration");
    });
  next({ name: "landing" });
};
