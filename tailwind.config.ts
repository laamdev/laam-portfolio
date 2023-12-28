/** @type {import('tailwindcss').Config} */

import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  content: ["./src/**/*.{js,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      typography: ({ theme }) => ({
        primary: {
          css: {
            "--tw-prose-body": "var(--primary)",
            "--tw-prose-headings": "var(--primary)",
            "--tw-prose-lead": "var(--primary)",
            "--tw-prose-links": "var(--primary)",
            "--tw-prose-bold": "var(--primary)",
            "--tw-prose-counters": "var(--primary)",
            "--tw-prose-bullets": "var(--primary)",
            "--tw-prose-hr": "var(--primary)",
            "--tw-prose-quotes": "var(--primary)",
            "--tw-prose-quote-borders": "var(--primary)",
            // // "--tw-prose-body": "4b647c" theme("colors.primary[800]"),
            // // "--tw-prose-headings": theme("colors.primary[900]"),
            // // "--tw-prose-lead": theme("colors.primary[700]"),
            // // "--tw-prose-links": theme("colors.primary[900]"),
            // // "--tw-prose-bold": theme("colors.primary[900]"),
            // // "--tw-prose-counters": theme("colors.primary[600]"),
            // // "--tw-prose-bullets": theme("colors.primary[400]"),
            // // "--tw-prose-hr": theme("colors.primary[300]"),
            // // "--tw-prose-quotes": theme("colors.primary[900]"),
            // // "--tw-prose-quote-borders": theme("colors.primary[300]"),
            // // "--tw-prose-captions": theme("colors.primary[700]"),
            // // "--tw-prose-code": theme("colors.primary[900]"),
            // // "--tw-prose-pre-code": theme("colors.primary[100]"),
            // // "--tw-prose-pre-bg": theme("colors.primary[900]"),
            // // "--tw-prose-th-borders": theme("colors.primary[300]"),
            // // "--tw-prose-td-borders": theme("colors.primary[200]"),
            // // "--tw-prose-invert-body": theme("colors.primary[200]"),
            // // "--tw-prose-invert-headings": theme("colors.white"),
            // // "--tw-prose-invert-lead": theme("colors.primary[300]"),
            // // "--tw-prose-invert-links": theme("colors.white"),
            // // "--tw-prose-invert-bold": theme("colors.white"),
            // // "--tw-prose-invert-counters": theme("colors.primary[400]"),
            // // "--tw-prose-invert-bullets": theme("colors.primary[600]"),
            // // "--tw-prose-invert-hr": theme("colors.primary[700]"),
            // // "--tw-prose-invert-quotes": theme("colors.primary[100]"),
            // // "--tw-prose-invert-quote-borders": theme("colors.primary[700]"),
            // // "--tw-prose-invert-captions": theme("colors.primary[400]"),
            // // "--tw-prose-invert-code": theme("colors.white"),
            // // "--tw-prose-invert-pre-code": theme("colors.primary[300]"),
            // // "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            // // "--tw-prose-invert-th-borders": theme("colors.primary[600]"),
            // // "--tw-prose-invert-td-borders": theme("colors.primary[700]"),
          },
        },
      }),
      fontFamily: {
        sans: ["var(--font-lausanne)", ...fontFamily.sans],
        serif: ["var(--font-machina)", ...fontFamily.serif],
      },
      minHeight: {
        // @ts-expect-error
        screen: ["100dvh", "100vh"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "reverse-spin 120s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}

export default config
