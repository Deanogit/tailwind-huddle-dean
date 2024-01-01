/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', 'sans-serif'],
      display: ['"Poppins"'],
    },
    extend: {
      screens: {
        sm: '375px',
      },
      colors: {
        'fm-violet': 'hsl(257, 40%, 49%)',
        'fm-magenta': 'hsl(300, 69%, 71%)',
      },
      backgroundImage: {
        mobile: "url('/images/bg-mobile.svg')",
        desktop: "url('/images/bg-desktop.svg')",
      },
    },
  },
  plugins: [],
};
