module.exports = {
  entry: "./src/index.ts",
  output: {
    path: __dirname + "/dist",
    filename: "simplejs.js",
    library: "SimpleJS",
    libraryTarget: "umd",
  },
  target: "node",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "@swc/core",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: true,
              },
              transform: {
                react: {
                  pragma: "createElement",
                },
              },
            },
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  outDir: "dist",
};
