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
        'lato-light': ['"Lato"', 'light'],
      },
    },
  },
  plugins: [],
}
