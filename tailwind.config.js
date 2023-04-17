/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: ['Brother-1816', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      28: '28px',
      36: '36px',
      40: '40px',
      48: '48px',
      56: '56px',
      64: '64px',
      96: '96px',
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#000000',
      white: '#ffffff',
      primary: {
        1: '#00A3FF',
      },
      secondary: {
        1: '#FF33DE',
        2: '#FFE14D',
        3: '#00E585',
      },
      gray: {
        1: '#0D0D0D',
        2: '#1A1A1A',
        3: '#262626',
        4: '#333333',
        5: '#4D4D4D',
        6: '#666666',
        7: '#808080',
        8: '#999999',
        9: '#CCCCCC',
        10: '#E6E6E6',
        11: '#F5F5F5',
      },
    }),
    backgroundImage: {
      'button-prinary-gradient': 'linear-gradient(257.22deg, #00A3FF 11.98%, #802CFF 92.64%)',
      'get-started-card-gradient':
        'linear-gradient(180deg, rgba(0, 0, 0, 0) 54.67%, rgba(0, 0, 0, 0.3) 100%), linear-gradient(257.22deg, #79CFFF 11.46%, #B98BFF 92.64%)',
      'card-gradient': 'linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.7) 100%)',
      ...defaultTheme.backgroundImage,
    },
    screens: {
      '2xl': { max: '1919px' },
      xl: { max: '1535px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '359px' },
    },
    extend: {
      lineHeight: {
        denser: '1.125',
      },
      spacing: {
        18: '4.5rem',
        22: '5.75rem',
        30: '7.5rem',
        34: '8.5rem',
      },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
