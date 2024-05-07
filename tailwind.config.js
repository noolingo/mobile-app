/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./components/*.{js,jsx,ts,tsx}", 
    "./screens/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#596275",
      secondary: "#596275",
      accent_1: "#FDBF60",
      accent_2: "#FF8911",
      white: "#FFFFFF",
      black: "#000000",
      blue: "#546de5",
      softBlue: "#778beb",
      yellow: "#f5cd79",
      softYellow: "#f7d794",
      teal: "#63cdda",
      lightTeal: "#3dc1d3",
      grey: "#303952",
      lighterGrey: "#596275",
      lightPeach:"#f3a683",
      peach:"#f19066",
    }
  },
  plugins: [],
}

