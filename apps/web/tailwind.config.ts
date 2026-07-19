import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0f0fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c3d66',
        },
        navy: {
          50: '#f8fafb',
          100: '#eef2f5',
          200: '#dbe4eb',
          300: '#c8d5e0',
          400: '#a8bcc9',
          500: '#7a93a8',
          600: '#566a7e',
          700: '#3d4a5c',
          800: '#2c3849',
          900: '#1a232f',
        },
        gold: {
          50: '#fffbf0',
          100: '#fff7e6',
          200: '#ffeccc',
          300: '#ffe0b3',
          400: '#ffd699',
          500: '#ffce80',
          600: '#ffbb33',
          700: '#d4a000',
          800: '#a37f00',
          900: '#6b5400',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config;
