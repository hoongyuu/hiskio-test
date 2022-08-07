module.exports = {
  mode: 'jit',
  content: [],
  theme: {
    fontFamily: {
      sans: ['Noto Sans TC', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#178FAC',
        'hiskio-red': '#E34A4A',
        gray: {
          '400': '#BFBFBF',
          '500': '#8C8C8C',
          '600': '#595959',
          '700': '#434343',
        },
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
      }),
      borderColor: (theme) => ({
        ...theme('colors'),
      }),
    },
  },
  variants: {},
}
