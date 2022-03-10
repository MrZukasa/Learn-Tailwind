module.exports = {
  mode: 'jit',
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {                                 //let's try to make some customization on our framework
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {                           //added some font from google fonts allready imported in ./src/styles.css
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}
