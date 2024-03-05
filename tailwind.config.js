/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#00539C",
        textColor: "#212529",
        backGroundColor: "#ffd7be",
      },
    },
  },
  plugins: [],
};
