module.exports = {
  purge: {
    // *NOTE:* This way everytime postcss compile the stylesheet will only load the used classes (this isn't recommend unless you're done with the project and want to send it to production, this is because otherwise, having to compile the files everytime you've added new classes to your project is tedious).
    enabled: false,
    // content: ['./*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
