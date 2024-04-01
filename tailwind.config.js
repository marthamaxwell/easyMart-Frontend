/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        log: "#DEDDDD",
        pri: "#FF8831",
        nav: "#575454",
      },
    },
  },
  plugins: [],
};
