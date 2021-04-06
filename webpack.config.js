const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { default: SitemapWebpackPlugin } = require('sitemap-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const publicPath = 'https://fakundo.github.io/'

const links = [
  {
    href: 'https://fakundo.github.io/tarkov-raid-items/',
    title: 'Escape from Tarkov - [EFT] Interactive Find in Raid Items List',
  },
  {
    href: 'https://github.com/fakundo/valheim-server',
    title: '[Docker Image] Valheim Dedicated Server with Web Interface',
  },
  {
    href: 'https://github.com/fakundo/go-middleware',
    title: 'Middleware for Go functions [useful for socket.io event handlers]',
  },
  {
    href: 'https://fakundo.github.io/preact-transitioning/',
    title: 'Preact transition components [DEMO]',
  },
  {
    href: 'https://github.com/fakundo/preact-transitioning',
    title: 'Preact transition components [SOURCE]',
  },
]

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
      paths: links.map((link) => ({
        path: link.href,
      })),
      options: {
        skipgzip: true,
      },
    }),
  ],
}
