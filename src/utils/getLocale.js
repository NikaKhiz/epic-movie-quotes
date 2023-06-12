export const getCurrentLocale = () => {
  return (
    sessionStorage.getItem("locale") ?? import.meta.env.VITE_APP_I18N_LOCALE
  );
};

export const getFallbackLocale = () => {
  return import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE;
};
