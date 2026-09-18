import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#030712",
        foreground: "#f9fafb",
        card: "#0b0f19",
        border: "rgba(255, 255, 255, 0.08)",
        brand: {
          50: "#f0f7ff",
          100: "#e0effe",
          400: "#38bdf8",
          500: "#0284c7",
          600: "#0265d6",
          "purple-400": "#a855f7",
          "purple-500": "#8b5cf6",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "spotlight": "spotlight 2s ease .5s 1 forwards",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern": "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
