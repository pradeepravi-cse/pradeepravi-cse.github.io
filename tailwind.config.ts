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
        "boston-blue": {
          50: "#f2f7f9",
          100: "#ddebf0",
          500: "#427998",
          800: "#314659",
          900: "#2C3D4D",
          950: "#192533",
        },
        "quarter-spanish-white": {
          50: "#F9F7F1",
        }
      },

    },
  },
  plugins: [],
};
export default config;
