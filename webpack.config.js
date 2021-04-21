const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { default: SitemapWebpackPlugin } = require('sitemap-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const links = require('./links')

const publicPath = 'https://fakundo.github.io/'

module.exports = {
  entry: path.resolve(__dirname, 'src/index'),
  output: {
    publicPath,
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  target: 'web',
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      minify: { collapseWhitespace: true, minifyJS: true, minifyCSS: true },
      inject: 'body',
      hash: true,
      template: path.resolve(__dirname, 'src/template.ejs'),
      filename: 'index.html',
      googleTagKey: 'G-P98R9F9W0M',
      links,
    }),
    new CleanWebpackPlugin(),
    new SitemapWebpackPlugin({
      base: publicPath,
      paths: links
        .filter((link) => (
          link.href.indexOf(publicPath) === 0
        ))
        .map((link) => ({
          path: link.href,
        })),
      options: {
        skipgzip: true,
      },
    }),
  ],
}
