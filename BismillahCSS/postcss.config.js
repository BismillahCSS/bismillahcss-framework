module.exports = {
  plugins: [
    require('postcss-import'),  // This resolves the @import statements
    require('autoprefixer'),
    require('cssnano')
  ]
};
