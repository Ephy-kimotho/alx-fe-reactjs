/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#e0e1dd",
        blue: "#00b4d8",
        darkBlue: "#0b2545",
        teal: "#80ed99",
        black: "#343a40",
        red: "#e63946",
      },
    },
  },
  plugins: [],
};
