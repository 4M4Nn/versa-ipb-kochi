import type { Config } from "tailwindcss"

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#003087",
        "navy-dark": "#001A5C",
        "navy-bg": "#0A1628",
        orange: "#FF6B00",
        "orange-light": "#FFF3EC",
        gold: "#C9A84C",
        light: "#F8F9FA",
        muted: "#6B7280",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config
