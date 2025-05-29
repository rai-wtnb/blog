import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme: {
          primary: "#3e4747", // Dark gray-tinted teal
          text: "#000000", // Black
          accent: {
            pink: "#c8a6a0", // Muted pink
            beige: "#d9cfc1", // Sand beige
            gold: "#bfae70", // Antique gold
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};

export default config; 