import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/LandingView.vue";
import { emailVerification } from "@/utils/emailVerification.js";
import { openResetPasswordForm } from "@/utils/openResetPasswordForm.js";
import { authViaGoogle } from "@/utils/googleAuthentication.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingView,
    },
    {
      path: "/email/verify/:id/:hash(.*)",
      name: "verification-verify",
      beforeEnter: emailVerification,
    },
    {
      path: "/reset-password",
      name: "reset-password",
      beforeEnter: openResetPasswordForm,
    },
    {
      path: "/auth/google/callback",
      name: "auth-google",
      beforeEnter: authViaGoogle,
    },
  ],
});

export default router;
