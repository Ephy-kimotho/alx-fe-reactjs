/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js, jsx, ts, tsx}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        red: "#e63946",
        gray: "#f1faee",
        cyan: "#a8dadc",
        blue: "#457b9d",
        darkBlue: "#1d3557",
      },
    },
  },
  plugins: [],
};
