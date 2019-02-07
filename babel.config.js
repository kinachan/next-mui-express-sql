/* eslint-disable quotes */
const common = require('./babel.config.common');

let presets = [];
let plugins = [];

console.log(`[babel mode]: ${process.env.NODE_ENV}`);

if (process.env.NODE_ENV === 'production') {
  // コンパイルモード
  presets = [
    "@babel/env",
    "@babel/react",
  ];

  plugins = [
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true,
      },
    ],
    "@babel/plugin-proposal-object-rest-spread",
    [
      "@babel/plugin-transform-runtime",
      {
        helpers: false,
        regenerator: true,
      },
    ],
  ];
} else {
  // 開発モード
  presets = [
    "next/babel",
  ];
}

// merge
const babelConfig = {
  ...common,
  presets,
  plugins: [
    ...common.plugins,
    ...plugins,
  ],
};

module.exports = babelConfig;
