/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2EC5CE',
        'secondary': '#D5FAFC',
        'defaultBlack': '#0B0D17',
        'defaultGrey': '#D9DBE1',
      },
      fontSize: {
        h1: ["72px", "98px"],
        h2: ["48px", "64px"],
        h3: ["40px", "54px"],
        h5: ["24px", "32px"],
        body: ["16px", "24px"],
        lead1: ["18px", "32px"],
        caption: ["14px", "28px"],
      },
      fontFamily: {
        inter: ['Inter', 'sans'],
        nanum: ['Nanum Pen Sscript', 'cursive'],
      }
    },
  },
  plugins: [],
}
