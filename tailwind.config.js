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
        "dark": "#666666",
      },
      "accent": {
        "light": "#000000",
        "original": "#CFBF7E",
        "dark": "#000000",
      },
      "ice": {
        "light": "#f5fffe",
        "original": "#e8fffd",
        "dark": "#ccfcf9",
      },
    },
    fontSize: {
      "sm": "0.8rem",
      "base": "1rem",
      "xl": "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    fontFamily: {
      'italianno': ['"Italianno"', 'cursive']
    },
    extend: {
      backgroundImage: {
        'city': "url('https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60')",
      },
    }
  },
  plugins: [],
}
