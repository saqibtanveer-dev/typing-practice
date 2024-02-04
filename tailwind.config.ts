import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["mono", "outfit", "sans-serif"],
    },
    extend: {
      colors: {
        "bg-primary": "#00003F",
        "bg-secondary": "#0B0C48",
        "bg-third": "#000137",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        primary: "16px",
      },
      borderRadius: {
        primary: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
