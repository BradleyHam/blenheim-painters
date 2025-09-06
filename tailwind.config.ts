import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./app/page.tsx",
    "./app/layout.tsx",
    "./app/not-found.tsx",
    "./app/sitemap.ts",
    "./app/globals.css",
    "./app/api/**/*.{js,ts,jsx,tsx}",
    "./app/blog/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/contact/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/experimental-components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/exterior-painting-queenstown/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/interior-painting-queenstown/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/projects/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/roof-painting-queenstown/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/testimonials/page.jsx",
    "./app/testimonials/layout.jsx",
    "./app/test/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
      fontFamily: {
        figtree: ['var(--font-figtree)'],
      },
      colors: {
        cta: {
          DEFAULT: "#F6932C", // Gold from the logo
          foreground: "#FFFFFF",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        darkText: "#0F1A3A",
        primary: {
          DEFAULT: "#E6A817", // Gold from the logo
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#0F1A3A", // Navy blue from the logo
          foreground: "#FFFFFF",
        },
        navy: {
          DEFAULT: "#0F1A3A", // Navy blue from the logo
          light: "#1C2B54",
          dark: "#091228",
        },
        gold: {
          DEFAULT: "#E6A817", // Gold from the logo
          light: "#F5B93D",
          dark: "#C48C0F",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

