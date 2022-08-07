module.exports = {
  mode: 'jit',
  content: [],
  theme: {
    fontFamily: {
      sans: ['Noto Sans TC', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#e2b26e',
        'mtv-primary': {
          DEFAULT: '#ffb715',
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
