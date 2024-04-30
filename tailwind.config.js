/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#b66dff',
      white: '#fff',
      sideNavParentColor: '#3e4b5b',
      sideNavChildColor: '#888',
    },
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#b66dff',
        },
      },
    ],
  },
};
