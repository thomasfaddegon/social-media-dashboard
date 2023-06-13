/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#FFFFFF",
      green: "#1EB589",
      red: "#DC414C",
      grey: {
        light: "#63687D",
        dark: "#8C98C6",
      },
      background: {
        light: "#F7F9FF",
        dark: "#20222F",
      },
      widgetBackground: {
        light: "#F1F3FA",
        dark: "#252B42",
        lightHover: "#E1E4EF",
        darkHover: "#333A55",
      },
      mainText: {
        light: "#1D1F29",
        dark: "#FFFFFF",
      },
    },
    screens: {
      xs: "575px",
      sm: "640px",
      md: "768px",
      lg: "1150px", // custom break here
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
};
