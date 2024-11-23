/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "parkinsans" : ["Parkinsans", "monospace"],
      } 
    },
  },
  plugins: [require('daisyui'),],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ED0541",
          "secondary": "#FD775C",
          "accent": "#47433D",
          "base": "#FFDEB6"
        }
      }
    ]
  }
}