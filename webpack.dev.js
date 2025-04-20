const path = require("path");
const common = require("./webpack.common");
const { default: merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    watchFiles: ["index.html", "src/**/*"],
    open: true,
    // hidden error client
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
});
