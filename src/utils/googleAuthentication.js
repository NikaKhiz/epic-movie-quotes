import { googleCallback } from "@/services/api/oauth.js";

export const authViaGoogle = (to, from, next) => {
  googleCallback().then(() => {
    // set user info
    next({ name: "news-feed" });
  });
};
