/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundBlendMode: {
        'plus-lighter': 'plus-lighter',
      },
      backgroundImage: theme => ({
        'gradient': 'linear-gradient(180deg, #FBBDF8 22.07%, rgba(251, 189, 248, 0.92) 45%, rgba(251, 189, 248, 0.76) 92.87%, rgba(251, 189, 248, 0.00) 100%)',
        'gradient-2': 'linear-gradient(180deg, rgba(251, 189, 248, 0.00) 0%, rgba(251, 189, 248, 0.76) 7.5%, rgba(251, 189, 248, 0.92) 60.5%, #FBBDF8 76%)',
      }),
    },
  },
  plugins: [],
}

  