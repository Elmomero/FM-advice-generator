module.exports = {
  content: ["./index.html", "./src/**/*.ts"],
  theme: {
    extend: {},
    colors: {
      LightCyan: "hsl(193, 38%, 86%)",
      NeonGreen: "hsl(150, 100%, 66%)",
      GrayishBlue: "hsl(217, 19%, 38%)",
      DarkGrayish: "hsl(217, 19%, 24%)",
      DarkBlue: "hsl(218, 23%, 16%)",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      spartan: ["League Spartan", "sans-serif"],
    },
  },
  plugins: [],
};
