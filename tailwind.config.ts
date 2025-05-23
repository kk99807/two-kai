import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'parchment': '#F5F2E8',
        'navy': '#1B365D',
        'royal-purple': '#4B0082',
        'muted-gold': '#C5B358',
      },
      fontFamily: {
        serif: ['var(--font-merriweather)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        twokai: {
          "primary": "#1B365D",
          "secondary": "#4B0082",
          "accent": "#C5B358",
          "neutral": "#2a323c",
          "base-100": "#F5F2E8",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
} satisfies Config;

export default config;
