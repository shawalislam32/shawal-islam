/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
const modules = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00283A',
        secondary: '#0082C4',
        background: '#02162B',
      },
    },
  },
  plugins: [daisyui],
};

export default modules;
