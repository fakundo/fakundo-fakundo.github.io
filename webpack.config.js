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
    href: 'https://github.com/fakundo/tarkov-raid-items',
    title: '[SOURCE] Escape from Tarkov - [EFT] Interactive Find in Raid Items List',
  },
  {
    href: 'https://github.com/fakundo/valheim-server',
    title: '[SOURCE] [Docker Image] Valheim Dedicated Server with Web Interface',
  },
  {
    href: 'https://github.com/fakundo/go-middleware',
    title: '[SOURCE] Middleware for Go functions, useful for socket.io event handlers',
  },
  {
    href: 'https://fakundo.github.io/preact-transitioning/',
    title: '[DEMO] Preact transition components',
  },
  {
    href: 'https://github.com/fakundo/preact-transitioning',
    title: '[SOURCE] Preact transition components',
  },
  {
    href: 'https://www.npmjs.com/package/preact-transitioning',
    title: '[NPM PACKAGE] Preact transition components',
  },
  {
    href: 'https://github.com/fakundo/preact-jss-hook',
    title: '[SOURCE] Preact integration with JSS',
  },
  {
    href: 'https://www.npmjs.com/package/preact-jss-hook',
    title: '[NPM PACKAGE] Preact integration with JSS',
  },
  {
    href: 'https://github.com/fakundo/react-vld',
    title: '[SOURCE] Validation for React & Preact components',
  },
  {
    href: 'https://www.npmjs.com/package/react-vld',
    title: '[NPM PACKAGE] Validation for React components',
  },
  {
    href: 'https://www.npmjs.com/package/preact-vld',
    title: '[NPM PACKAGE] Validation for Preact components',
  },
  {
    href: 'https://fakundo.github.io/react-input-focus/react/',
    title: '[DEMO] Focus switcher for React & Preact input components',
  },
  {
    href: 'https://github.com/fakundo/react-input-focus',
    title: '[SOURCE] Focus switcher for React & Preact input components',
  },
  {
    href: 'https://www.npmjs.com/package/react-input-focus',
    title: '[NPM PACKAGE] Focus switcher for React input components',
  },
  {
    href: 'https://www.npmjs.com/package/preact-input-focus',
    title: '[NPM PACKAGE] Focus switcher for Preact input components',
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
