/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        'header': '#373B53',
        'logobg': '#7C5DFA',
        'headerborder': '#494E6E',
        'spancolor': '#888EB0',
        'paid': '#33D69F',
        'pagebg': '#F8F8FB'
      },
      height: {
        '41': '61.06px',
        '17': '72px'
      },
      width: {
        '17': '72px',
        'mobilecontainer': '375px',
        'tablet': '768px',
        '21': '90px',
        'invoice': '617px',
      },
      fontSize: {
        'span': '13px',
        's': '15px'
      },
      lineHeight: {
        '3.5': '15px'
      },
      gridTemplateColumns: {
        'content': 'repeat(auto-fit, minmax(327px, 672px)'
      },
      boxShadow: {
        'card': '0px 10px 10px -10px rgba(72, 84, 159, 0.10);'
      },
      gap: {
        '21': '82px'
      },
      screens: {
        'max-s': '600px'
      },
      margin: {
        '13': '51px'
      },
      padding: {
        '15': '59px'
      }

    },
    
  },
  plugins: [],
}

