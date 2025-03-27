const bismillahConfig = require("./bismillah.config.js");

console.log("Bismillah Config Loaded:", bismillahConfig); // Debugging

module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("autoprefixer"),
    require('postcss-discard-duplicates')
  ],
};
