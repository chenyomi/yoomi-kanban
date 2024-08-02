/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
// const generateFontSize = () => {
//   const result = {}
//   for (let i = 10; i < 32; i++) {
//     result[i] = `${i}px`
//   }
//   return result
// }
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
      },
    },
    gridTemplateColumns: {
      // Simple 16 column grid
      '1': 'repeat(1, minmax(0, 1fr))',
      '2': 'repeat(2, minmax(0, 1fr))',
      '3': 'repeat(3, minmax(0, 1fr))',
      '4': 'repeat(4, minmax(0, 1fr))',
      '5': 'repeat(5, minmax(0, 1fr))',
      '6': 'repeat(6, minmax(0, 1fr))',
      '7': 'repeat(7, minmax(0, 1fr))',
      '8': 'repeat(8, minmax(0, 1fr))',
      '9': 'repeat(9, minmax(0, 1fr))',
      '10': 'repeat(10, minmax(0, 1fr))',
      '11': 'repeat(11, minmax(0, 1fr))',
      '12': 'repeat(12, minmax(0, 1fr))',
      '13': 'repeat(13, minmax(0, 1fr))',
      '14': 'repeat(14, minmax(0, 1fr))',
      '15': 'repeat(15, minmax(0, 1fr))',
      '16': 'repeat(16, minmax(0, 1fr))',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      bermuda: '#78dcca',
      blue: {
        1: '#0070f3',
        2: '#0366d6',
        3: '#7957d5',
        4: '#b48ead',
        5: '#e06c75',
        6: '#be5046',
        7: '#71abff',
        8: '#586069',
      },
      white: {
        1: '#ffffff'
      }
    },
    fontSize: {
      xs: '0.7rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fontWeight: {
      1: 100,
      2: 200,
      3: 300,
      4: 400,
      5: 500,
      6: 600,
      7: 700,
      8: 800,
      9: 900
    },
    // fontSize: {
    //   ...generateFontSize()
    // }
  },
  plugins: [],
}