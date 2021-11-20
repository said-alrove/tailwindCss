module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano: ctx.env === 'production' ? {
      preset: [
        require('cssnano-preset-default'), 
        { discardComments: true }
      ]
    } : false,
  }
})
