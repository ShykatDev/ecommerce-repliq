/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        title: "#171717",
        text: "#52525b",
        borderColor: "#d4d4d4",
        brandLight: "#f7fee7",
        brand: "#65a30d",
        brandHover: "#4d7c0f",
      },
    },
  },
  plugins: [],
};
