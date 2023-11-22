/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        nav: "#053B50",
        page: "#ECF8F9",
        card: "#B7CADB",
        f: "#9EB8D9",
        s: "#102C57",
        "card-hover": "#164863",
        "default-text": "#BE4747",
        "blue-accent": "#7C93C3",
        "blue-accent-hover": "#265073",
      },
    },
  },
  plugins: [],
};
