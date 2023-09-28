/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xl+70':'1350px', 
        'lg+196':'1220px',
        'lg+100':'1124px',
        'sm-320': '320px',  
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