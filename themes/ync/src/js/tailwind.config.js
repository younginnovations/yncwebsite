const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xll: '1400px',
    },
    fontFamily: {
      quicksand: ['Quicksand', 'sans-serif'],
      body: ['Lato', 'sans-serif'],
    },
    textColor: {
      'base-color': '#4A4A4A',
      black: '#000000',
      white: '#fff',
      primary: '#7E1BF4',
      secondary: '#F67534'
    },
    colors: {
    
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    }
  },
  variants: {},
  plugins: []
};
