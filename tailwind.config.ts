import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#121412",
        pearl: "#f7f3ec",
        mist: "#e6dfd3",
        champagne: "#b89a67",
        graphite: "#2b2b28",
        hinoki: "#d8c9ad",
        jade: "#3c5b50"
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"]
      },
      boxShadow: {
        quiet: "0 24px 80px rgba(18, 20, 18, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
