import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/LandingView.vue";
import { emailVerification } from "@/utils/emailVerification.js";
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
  ],
});

export default router;
