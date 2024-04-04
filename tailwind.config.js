/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        log: "#DEDDDD",
        pri: "#FF8831",
        nav: "#575454",
        card: "#F9F5F5",
        sm: "#EECCB4",
      },
    },
  },
  plugins: [],
};
