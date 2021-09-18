module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Red Hat Display"]
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
