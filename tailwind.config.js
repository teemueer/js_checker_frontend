/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/studentComponents/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        76: "18.75rem",
      },
    },
  },
  plugins: [],
};
