/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    colors: {
      'header': '#373B53',
      'logobg': '#7C5DFA',
      'headerborder': '#494E6E'

    },
    extend: {
      height: {
        '41': '61.06px',
        '17': '72px'
      },
      width: {
        '17': '72px'
      } 
    },
  },
  plugins: [],
}

