const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg_image: "url('../public/images/complacentmonkeyboathouse.jpeg')",
      },
      fontFamily: {
        kaushan: ["Kaushan Script", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-purple": "var(--clr-purple)",
        "brand-pink": "var(--clr-pink)",
        "brand-yellow": "var(--clr-yellow)",
        "brand-blue": "var(--clr-blue)",
        "brand-green": "var(--clr-green)",
        "brand-light": "var(--clr-light)",
        "brand-background": "var(--clr-background)",
      },
      animation: {
        "pulse-slow": "pulse 10s linear infinite",
      },
    },
  },
  plugins: [],
};
