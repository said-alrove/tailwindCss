module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {
      preset: [
        require('cssnano-preset-default'), 
        { discardComments: true }
      ]
    }
  }
}
