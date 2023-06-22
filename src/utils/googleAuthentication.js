import { googleCallback } from "@/services/api/oauth.js";
import { googleRedirect } from "@/services/api/oauth";

export const authViaGoogle = () => {
  googleRedirect().then((response) => {
    if (response.data.url) {
      window.location.href = response.data.url;
    }
  });
};
export const handleGoogleCallback = (to, from, next) => {
  googleCallback().then(() => {
    // set user info
    next({ name: "news-feed" });
  });
};
