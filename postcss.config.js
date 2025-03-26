// postcss.config.js
const bismillahConfig = require("./bismillah.config.js");

module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("autoprefixer"),
    require("tailwindcss")({
      theme: bismillahConfig.theme, 
    }),
  ],
};
