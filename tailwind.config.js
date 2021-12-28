module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      textShadow: {
        '2xl': '12px 12px 5px rgb(0,0,0, 0.3)',
        // '3xl': {
        //   black: '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
        //   grey: '0 0 23px rgba(255,255,0,0.3), 0 0 25px rgba(255,255,0,0.3)',
        // },
      },
      colors: {
        primary: {
          50: '#e0f7fa',
          100: '#b2ebf2',
          200: '#80deea',
          300: '#4dd0e1',
          400: '#26c6da',
          500: '#00bcd4',
          600: '#00acc1',
          700: '#0097a7',
          800: '#00838f',
          900: '#006064',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        // secondary: '#5c6bc0',
        // danger: '#e3342f',
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#4dd0e1',
      secondary: '#5c6bc0',
      danger: '#e3342f',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      primary: '#4dd0e1',
      secondary: '#5c6bc0',
      danger: '#e3342f',
    }),
  },
  variants: {
    extend: {},
    variants: {
      textShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
