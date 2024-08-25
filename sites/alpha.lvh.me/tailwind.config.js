/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

delete colors.lightBlue
delete colors.warmGray
delete colors.trueGray
delete colors.coolGray
delete colors.blueGray

const customColors = {
  'pri-s': '#96834e',
  'sec-s': '#dfed77',
  'acc-s': '#77ede5',
  'neu-s': '#b5b5b5',
  'bas-s': '#ffffff',
  'nav-s': '#222222',
  'nav-c': '#ffffff'
}

Object.assign(colors, customColors)

module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    extend: {},
    colors: colors
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require("daisyui")
  ]
}
