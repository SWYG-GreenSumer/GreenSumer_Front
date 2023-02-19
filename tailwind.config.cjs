// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#67C347',
          secondary: '#EAF1EB',
          accent: '#EA5234',
          neutral: '#333C4D',
          divider: '#DEDEDE',
          textarea: '#F2F2F2',
          placeholder: '#808080',
          info: '#3ABFF8',
          success: '#96D1A3',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
