const path = require("path");
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, "src/components/"),
      '@assets': path.resolve(__dirname, "src/assets/"),
      '@pages': path.resolve(__dirname, "src/pages/"),
      '@general': path.resolve(__dirname, "src/general/"),
      '@api': path.resolve(__dirname, "src/api/api.js")
    }
  }
}