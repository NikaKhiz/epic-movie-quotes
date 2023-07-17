import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/LandingView.vue";
import MoviesView from "@/views/MoviesView.vue";
import MovieInspectView from "@/views/MovieInspectView.vue";
import ProfileView from "@/views/ProfileView.vue";
import { emailVerification } from "@/utils/emailVerification.js";
import { emailUpdate } from "@/utils/emailUpdate.js";
import { openResetPasswordForm } from "@/utils/openResetPasswordForm.js";
import { handleGoogleCallback } from "@/utils/googleAuthentication.js";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingView,
      meta: {
        needsAuth: false,
      },
    },
    {
      path: "/email/verify/:id/:hash(.*)",
      name: "verification-verify",
      beforeEnter: emailVerification,
      meta: {
        needsAuth: false,
      },
    },
    {
      path: "/email/update/:id/:hash(.*)",
      name: "email-update",

      meta: {
        needsAuth: false,
      },
    },
    {
      path: "/reset-password",
      name: "reset-password",
      beforeEnter: openResetPasswordForm,
      meta: {
        needsAuth: false,
      },
    },
    {
      path: "/auth/google/callback",
      name: "auth-google",
      beforeEnter: handleGoogleCallback,
      meta: {
        needsAuth: false,
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      meta: {
        needsAuth: true,
      },
    },
    {
      path: "/movies",
      name: "movies",
      component: MoviesView,
      meta: {
        needsAuth: true,
      },
    },
    {
      path: "/movies/:movieId",
      name: "movie-inspect",
      component: MovieInspectView,
      props: true,
      meta: {
        needsAuth: true,
      },
    },
    {
      path: "/news-feed",
      name: "news-feed",
      component: null,
      meta: {
        needsAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthed"));
  if (!isAuthenticated && to.meta.needsAuth) {
    next({ name: "landing" });
  } else if (isAuthenticated && !to.meta.needsAuth) {
    if (to.name === "email-update") {
      emailUpdate(to);
      next({ name: "profile" });
    } else {
      next({ name: "movies" });
    }
  } else {
    next();
  }
});

export default router;
