import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        companyPink: "#A42E68",
        companyPinkHover: "#942A5E",
        defaultGray: "#333333",
      }

    },
  },
  plugins: [],
};
export default config;
