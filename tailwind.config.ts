import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFDF7",
          100: "#FFF9E9",
          200: "#FFF2D1",
          300: "#FCE8B4",
        },
        honey: {
          100: "#FFE9A8",
          200: "#FFDD7A",
          300: "#FFCF4D",
          400: "#FDC02E",
          500: "#F4AE16",
          600: "#DB9A0E",
          700: "#B87E0B",
        },
        gold: {
          400: "#E3B04B",
          500: "#C9932E",
          600: "#A9761F",
        },
        blush: {
          100: "#FFE7DA",
          200: "#FFD6C2",
        },
        ink: {
          700: "#5C4326",
          800: "#463217",
          900: "#332309",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        script: ["var(--font-dancing)", "cursive"],
        sans: ["var(--font-quicksand)", "sans-serif"],
      },
      keyframes: {
        fall: {
          "0%": { transform: "translateY(-10vh) translateX(0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(110vh) translateX(var(--drift, 40px)) rotate(360deg)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 214, 102, 0.4)" },
          "50%": { boxShadow: "0 0 45px rgba(255, 214, 102, 0.75)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        fall: "fall linear infinite",
        float: "float 5s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      backgroundImage: {
        "warm-radial": "radial-gradient(circle at 50% 0%, #FFF6DC 0%, #FFEBB0 45%, #FFDD86 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
