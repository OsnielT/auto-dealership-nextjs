// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgba(var(--color-primary-rgb), <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgba(var(--color-secondary-rgb), <alpha-value>)',
        },
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.bg-primary': {
          backgroundColor: 'rgba(var(--color-primary-rgb), var(--tw-bg-opacity, 1))',
        },
        '.bg-secondary': {
          backgroundColor: 'rgba(var(--color-secondary-rgb), var(--tw-bg-opacity, 1))',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
