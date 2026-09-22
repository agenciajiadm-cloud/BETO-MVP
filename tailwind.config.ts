import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        petroleo: "#165A6B",
        fundo: "#071920",
        preto: "#0A0A0A",
        branco: "#FFFFFF",
        cinza: "#EDEBE7",
        mute: "#4E6A72",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
