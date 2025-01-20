import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"
import typography from "@tailwindcss/typography"
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
  plugins: [tailwindcssAnimate, typography],
}

export default config
