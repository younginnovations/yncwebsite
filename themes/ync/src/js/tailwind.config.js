const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1240px',
      xll: '1400px',
    },
    colors: {
      black: '#000000',
      white: '#fff',
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
      'base-color': 'var(--baseColor)',
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
    },
    fontFamily: {
      quicksand: ['Quicksand', 'sans-serif'],
      body: ['Lato', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    }
  },
  variants: {},
  plugins: []
};
