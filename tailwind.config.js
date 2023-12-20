/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      "2xsm": "14px",
      "xsm": "16px",
      "sm": "18px",
      "2xmd": "20px",
      "xmd": "24px",
      "md": "26px",
      "lg": "36px",
      "xl": "46px",
      "2xl": "48px"
    },
    fontFamily: {
      roboto: ['Roboto', "sans-serif"],
      merriweather: ['Merriweather', "sans-serif"],
    },
    extend: {
      colors: {
        "Midnight-Blue":"#000638",
        "Slate-Gray": "#605c59",
        "Dim-Gray": "#5F5F5F",
        "Dark-Slate-Gray": "#515151",
        "Charcoal": "#434343",
        "Alice-Blue": "#DFE6FF",
        "Ebony": "#544B44",
        "Grisaille": "#3E3E3E",
        "Jet": "#303030",
        "Gray": "#4F4F4F",
        "violet": "#283A61",
        "light-gray": "#F5F5F5",
      },
    },
  },
  plugins: [],
}

