import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "mk-dark-green": "#184623",
        "mk-green": "#4A8F5D",
        "mk-light-green": "#86C994",
        "mk-yellow": "#FFC919",
        "mk-ivory": "#F3EFCD",
        "mk-dark-blue": "#0033A1",
        "mk-blue": "#2F8DCC",
        "mk-light-blue": "#90C6EA",
      },
      fontFamily: {
        sans: ["Syne", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
