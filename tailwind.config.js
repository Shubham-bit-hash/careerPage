/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Custom breakpoint for extra small screens
      },
      boxShadow:{

        "custom":"0 10px 20px 0 rgba(0, 0, 0, 0.3)"
      }
    },
  },
  plugins: [],
};
