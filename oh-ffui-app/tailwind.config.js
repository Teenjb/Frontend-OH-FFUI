const { Button } = require('flowbite-react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],

  important: "#root",
  
  theme: {
    fontFamily: {
      highlight: ['Raleway', 'sans-serif'],
      sans: ['Questrial', 'sans-serif'],
      serif: ['Spicy Rice', 'serif'],},
    },
    extend: {padding: { "fluid-video": "56.25%" }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
