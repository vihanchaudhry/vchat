module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        "emerald-green": "#375150",
        "burnt-orange": "#ce5310",
        "off-white": "#cfcdce",
        "dark-white": "#afadae",
        "brown-gray": "#8a8076"
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"]
      }
    }
  },
  variants: {},
  plugins: []
}
