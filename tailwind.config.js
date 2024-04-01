/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      orange: {
        "100": "#d48171",
      },
      black: {
        "20": "#548ba6",
        "50": "#367797",
        "100": "#000"
      },
      white: {
        "50": "#FFE9E9",
        "100": "#fff",
      }
    },
    fontFamily: {
      'lucky': ["'Luckiest Guy', cursive"],
      'nanum': ["'Nanum Pen Script', cursive"]
    }
  },
  plugins: [],
}
