import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'steelfish': ['Steelfish', 'Arial Black', 'sans-serif'],
        'sans': ['Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        'pop-blue': '#0066FF',
        'pop-lime': '#66FF00',
        'pop-yellow': '#FFCC00',
        'pop-pink': '#FF6699',
        'brutal-black': '#000000',
        'brutal-white': '#FFFFFF',
        'brutal-gray': '#333333',
      },
      animation: {
        'subtle-bounce': 'subtle-bounce 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      keyframes: {
        'subtle-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};

export default config;