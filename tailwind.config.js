/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xl+70':'1350px', 
        'lg+20':'1044px',
        'lg+196':'1220px',
        'lg+100':'1124px',//1124-100 = 1024
        'md+162':'930px',
        'sm-320': '320px',  
        // Define a custom breakpoint for screens smaller than sm
      },
      colors: {
        'grad-one': '#ff637b',
        'grad-two': '#f7a77c',
        'light-black':'rgb(150,150,150)',
        'sky-bg':'#c0eaff'
      },
    },
  }
  // ...
}