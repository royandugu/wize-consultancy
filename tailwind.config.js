/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px', // Define a custom breakpoint for screens smaller than sm
      },
      colors: {
        'grad-one': '#ff637b',
        'grad-two': '#f7a77c',
      },
    },
  }
  // ...
}