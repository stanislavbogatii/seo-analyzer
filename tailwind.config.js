module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
      colors: {
        main: "#fa2851"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
