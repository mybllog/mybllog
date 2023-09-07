/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    variants: {
      extend: {
        border: {
          borderWidth: ['hover', 'responsive', 'first', 'last', 'even', 'odd', 'hover', 'focus', 'active', 'group-hover', 'group-focus', 'focus-within', 'disabled'],
          top: 12,
          right: 12,
          bottom: 12,
          left: 12,
        },
      },
    },
  },
  plugins: [],
};
