/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  important: "#root",
  
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      serif: ['Spicy Rice', 'serif'],},
    },
    extend: {padding: { "fluid-video": "56.25%" }
  },
  plugins: [],
}
