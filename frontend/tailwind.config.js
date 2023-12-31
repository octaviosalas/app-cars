/** @type {import('tailwindcss').Config} */
import formsPlugin from '@tailwindcss/forms';
import daisyui from 'daisyui';
import aspectRatioPlugin from '@tailwindcss/aspect-ratio';




export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      "2xs": "1px",
      'xxxs': '280px',
      'xxs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

    },
  },
  plugins: [
    daisyui,
    formsPlugin,
    aspectRatioPlugin,
  ],
}
