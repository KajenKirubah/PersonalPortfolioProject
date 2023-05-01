const path = require('path');
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const manifest = require('./docs/manifest.json');

const app = express();
const config = require("./webpack.config.js");
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

// Catch-all route to serve the appropriate HTML file without .html extension
app.get("*", (req, res) => {
    const originalFileName = req.path.slice(1) + ".html";
    const hashedFileName = manifest[originalFileName];
    console.log('req.path:', req.path);
console.log('originalFileName:', originalFileName);
console.log('hashedFileName:', hashedFileName);

  res.sendFile(path.join(__dirname, "docs", hashedFileName));
});

app.listen(3000, function() {
  console.log("Portfolio Site listening on port 3000!\n");
});
