/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./component/**/*.tsx"],
  theme: {
    colors: {
      "black": "#333333",
      "white": "#ffffff",
      "main": {
        "light": "#000000",
        "original": "#aaaaff",
        "dark": "#000000",
      },
      "base": {
        "light": "#cccccc",
        "original": "#999999",
        "dark": "#000000",
      },
      "accent": {
        "light": "#000000",
        "original": "#999900",
        "dark": "#000000",
      }
    },
  },
  plugins: [],
}
