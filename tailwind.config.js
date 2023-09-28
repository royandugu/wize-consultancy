/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xlg':'1220px',
        'xs': '320px',
        'bp1':'1500px',

        // Define a custom breakpoint for screens smaller than sm
      },
      colors: {
        'grad-one': '#ff637b',
        'grad-two': '#f7a77c',
        'sky-bg':'#c0eaff'
      },
    },
  }
  // ...
}