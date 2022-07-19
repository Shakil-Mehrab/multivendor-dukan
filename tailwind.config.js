// tailwind.config.js
module.exports = {
  purge: [],
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "navy-200": "#353C53",
        "navy-300": "#1E2640",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
