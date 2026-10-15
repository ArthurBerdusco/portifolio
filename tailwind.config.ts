import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        boxwood: { DEFAULT: "#10281F", 800: "#163328", 700: "#1D3F31", 600: "#2A5844" },
        leaf: "#2F6B4F",
        brass: { DEFAULT: "#C9A24B", dark: "#7F5E14" },
        ink: { DEFAULT: "#14213A", soft: "#44506A" },
        paper: { DEFAULT: "#F6F7F3", 2: "#ECEFE8" },
        line: "#D5DBCF",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "72rem" },
    },
  },
  plugins: [],
} satisfies Config;
