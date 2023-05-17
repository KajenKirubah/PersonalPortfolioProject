const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const fse = require("fs-extra");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const currentTask = process.env.npm_lifecycle_event === "build";

const projects = fse.readJSONSync("./projects.json");

const projectTemplate = fse.readFileSync("./app/project-template.html", "utf-8");

// Create HtmlWebpackPlugin instances for each project
const projectPages = projects.map((project) => {
  return new HtmlWebpackPlugin({
    filename: project.page,
    template: "./app/project-template.html",
    title: project.title,
    description: project.description,
    technologies: project.technologies || [],
    buttons: project.buttons || [],
    image: project.image,
    text: project.textCopy,
  });
});

/* question: can we use fetch then use a for each loop to return a new HtmlWebpackPlugin page?
benefit of this is that you get the dynamic loading of a fetch request
*/

function createTechnologiesList(technologies) {
  return technologies.map((tech) => `<li>${tech}</li>`).join("");
}

const PostCSSPlugins = [require("postcss-mixins"), require("postcss-nested"), require("postcss-import"), require("postcss-simple-vars"), require("autoprefixer")];

class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap("copy images", () => {
      fse.copySync("./app/assets/images", "./docs/assets/images");
    });
  }
}

let pages = fse
  .readdirSync("./app")
  .filter((file) => {
    return file.endsWith(".html") && !projects.some((project) => project.page === file) && file != "project-template.html";
  })
  .map((page) => {
    return new HtmlWebpackPlugin({ filename: page, template: `./app/${page}`, projects: projects });
  });

let plugins = [...pages, ...projectPages, new MiniCssExtractPlugin({ filename: "styles.[contenthash].css" }), new RunAfterCompile(), new WebpackManifestPlugin()];

module.exports = {
  mode: "development",
  entry: {
    app: "./app/scripts/App.js",
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "docs"),
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js",
    publicPath: "/PersonalPortfolioProject",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          currentTask ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: PostCSSPlugins,
              },
            },
          },
        ],
      },
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ],
  },
  plugins: plugins,
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 1000,
    },
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "docs"),
    },
    compress: true,
    port: 3000,
    historyApiFallback: {
      index: "/index.html",
    },
  },
};

/*

[
    new HtmlWebpackPlugin({
      filename: currentTask ? "index.[contenthash].html" : 'index.html',
      template: "./app/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "styles.[contenthash].css" }),
  ]

*/
