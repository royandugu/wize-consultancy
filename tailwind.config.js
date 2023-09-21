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
    },
  }
  // ...
}