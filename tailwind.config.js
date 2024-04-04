/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Monos, monospace",
    },
    extend: {
      height: {
        dscreen: "100dvh",
      },
    },
  },
  plugins: [],
};
