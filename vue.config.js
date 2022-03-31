module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/sailling" : "/",
  // publicPath: process.env.NODE_ENV === "//",

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false,
    },
  },
};
