import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1D33',
          light: '#132B4A',
        },
        gold: {
          DEFAULT: '#C8A45A',
          light: '#E2C97E',
        },
        cream: '#F5F0E8',
        charcoal: '#1A2A3A',
        slate: '#8B9DB5',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        dm: ['var(--font-dm-sans)', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
