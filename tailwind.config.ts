import type { Config } from "tailwindcss"
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#003087", "navy-dark": "#001A5C", "navy-bg": "#0A1628",
        orange: "#FF6B00", "orange-light": "#FF8533",
        gold: "#C9A84C", "off-white": "#F0EDE6", muted: "#A8B89A",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config
