import { updateVerifiedEmail } from "@/services/api/updateProfile.js";
import { useUserStore } from "@/stores/userStore.js";

export const emailUpdate = (to) => {
  const userVerificationLink = `/api${to.fullPath.split("?email=")[0]}`;
  const userEmail = to.fullPath.split("?email=")[1];
  updateVerifiedEmail(userVerificationLink, userEmail).then(() => {
    useUserStore().userEmail = userEmail;
  });
};
