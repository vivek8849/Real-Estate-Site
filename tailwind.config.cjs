/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow :{
        "btn-shadow": "0px 10px 15px rgba(1, 115, 153, 0.2)",
        "btn-shadow-ho": "0px 8px 10px rgba(1, 115, 153, 0.3)"
      },
      fontSize: {
        sm: '0.75rem',
        base: '.875rem',
        md: '1rem',
        mid:'18px',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '1.75rem',
        '3xl': '2.25rem',
        '4xl': '3rem',
        '5xl': '55px',
      },
      colors:{
        black:{
          bdark:"#085b8a",
          blue:"#0A72AD",
          400:"#ffffff",
          500:"#E5E5E5",
          600:"#C4C4C4",
          700:"#242527",
          800:"#2B2B2B",
          900:"#000000",
          1000:"#F6F6F6",
        }
      },
      margin: {
        '100': '45rem',
      },
      fontFamily:{
        body: ['Poppins']
      }
    },
  },
  plugins: [],
}
