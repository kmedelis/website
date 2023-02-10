/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#393E46',
        'custom-green': '#6D9886',
        'custom-cream': '#F2E7D5',
        'custom-white': '#F7F7F7',
        'custom-darkest': '#AD8B73',
        'custom-lighter': '#CEAB93',  
        'custom-lightest': '#E3CAA5',
        'custom-light': '#FFFBE9',
      },
    },
    fontSize: {
      "2xsm":"10px",
      xsm:"12px",
      sm:"13px",
      reg:"15px",
      lg:"18px",
      "2xl":"22px",
      "3xl":"25px",
      "4xl":"32px",
      "5xl":"40px",
    }
  },
  darkMode: "class",
  plugins: [],
}
