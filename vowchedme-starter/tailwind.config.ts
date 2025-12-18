import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vowch: {
          500: "#3b89ca",
          600: "#2f74b0",
          700: "#255f93",
        },
        ink: {
          950: "#050A14",
          900: "#0B1220",
        },
      },
      boxShadow: {
        glow: "0 0 28px rgba(59,137,202,.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
