/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'my-shadow':'0px 0px 0px 15px rgba(45,255,196,0.9);',
        'glow': '0px 0px 8px 15px rgba(45,255,196,0.9);',
      }

    },
  },
  plugins: [],
}

