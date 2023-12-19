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
        "000638":"#000638",
        "605c59": "#605c59",
        "5F5F5F": "#5F5F5F",
        "515151": "#515151",
        "434343": "#434343",
        "dfe6ff": "#DFE6FF",
        "544b44": "#544B44",
        "3e3e3e": "#3E3E3E",
        "303030": "#303030",
        "4f4f4f": "#4F4F4F",
        "vilote": "#283A61",
        "light-gray": "#F5F5F5",
      },
    },
  },
  plugins: [],
}

