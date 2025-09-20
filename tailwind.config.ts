import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        card: "var(--card)",
        muted: "var(--muted)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
      },
      boxShadow: {
        glow: "0 0 60px rgba(34,211,238,0.12)"
      }
    },
  },
  plugins: [],
} satisfies Config
