/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"'],
        bebas: ['"Bebas Neue"'],
        michroma: ['"Michroma"'],
        bangers: ['"Bangers"'],
      },
    },
  },
  plugins: [],
};
