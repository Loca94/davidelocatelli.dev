import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import typographyStyles from "./typography";

const config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: ["selector"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        "2xs": ["0.75rem", { lineHeight: "1.25rem" }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "infinite-scroll":
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
    typography: typographyStyles,
  },
  plugins: [
    typographyPlugin,
    require("tailwindcss-animate"),
    function ({ addUtilities }: { addUtilities: Function }) {
      addUtilities(
        {
          ".stop-color-gray": {
            "stop-color": "#525252",
          },
          ".stop-color-emerald": {
            "stop-color": "#10B981",
          },
        },
        ["responsive", "hover"],
      );
    },
  ],
} satisfies Config;

export default config;
