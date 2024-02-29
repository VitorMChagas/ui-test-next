/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('/img/popefrancis.png')",
      },
      fontFamily: {
        lato: ['"Lato"', 'regular'],
      },
      letterSpacing: {
        tightest: '-.075em',
      },
      colors: {
        'thumbsbg-green': 'rgb(60 187 180 / 0.8)',
        'thumbsbg-green-hover': 'rgb(60 187 180 / 1)',
        'thumbsbg-yellow': 'rgb(249 173 29 / 0.8)',
        'thumbsbg-yellow-hover': 'rgb(249 173 29 / 1)',
        'light-bg': 'rgb(255 255 255 / 0.4)',
        'dark-bg': 'rgb(0 0 0 / 0.4)',
        'dark-nav': 'rgb(0 0 0 / 0.8)',
        'dark-gray': 'rgb(70 70 70 / 1)',
        'light-gray': 'rgb(235 235 235 / 1)',
      },
    },
  },
  plugins: [],
}
