/* eslint-disable quotes */
// babelの共通設定
module.exports = {
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      { legacy: true },
    ],
    ["module-resolver", {
      root: ["./src"],
      alias: {
        src: "./src",
        hoc: "./src/client/hoc",
        views: "./src/client/components/views",
        theme: "./src/client/theme",
        parts: "./src/client/components/parts",
        "material-ui": "@material-ui/core",
        "material-ui-icons": "@material-ui/icons",
        repository: "./src/server/repository",
        serverlib: "./src/server/lib",
        model: "./src/server/model",
        config: "./src/server/config"
      },
    }],
  ],
  ignore: [
    "node_modules/**",
  ],
  // env: {
  //   production: {
  //     plugins: [
  //       "transform-react-remove-prop-types",
  //     ],
  //   },
  //   test: {
  //     plugins: [
  //       "espower",
  //     ],
  //   },
  // },
};
