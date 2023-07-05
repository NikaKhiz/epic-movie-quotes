import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/LandingView.vue";
import MoviesView from "@/views/MoviesView.vue";
import MovieInspectView from "@/views/MovieInspectView.vue";
import { emailVerification } from "@/utils/emailVerification.js";
import { openResetPasswordForm } from "@/utils/openResetPasswordForm.js";
import { handleGoogleCallback } from "@/utils/googleAuthentication.js";
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
      beforeEnter: handleGoogleCallback,
    },
    {
      path: "/profile",
      name: "profile",
      component: null,
    },
    {
      path: "/movies",
      name: "movies",
      component: MoviesView,
    },
    {
      path: "/movies/:movieId",
      name: "movie-inspect",
      component: MovieInspectView,
      props: true,
    },
    {
      path: "/news-feed",
      name: "news-feed",
      component: null,
    },
  ],
});

export default router;
