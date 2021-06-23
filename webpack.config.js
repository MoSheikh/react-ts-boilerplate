require('dotenv').config()
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !isProduction

const SRC_DIR = path.resolve(__dirname, 'src')
const OUT_DIR = path.resolve(__dirname, 'build')

module.exports = function (env) {
	return {
		entry: path.resolve(SRC_DIR, 'index.tsx'),

		output: {
			path: OUT_DIR,
			filename: 'static/js/[name].[contenthash:8].js',
			chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
			publicPath: '/',
		},

		devServer: {
			open: true,
			host: process.env.HOST || 'localhost',
			port: parseInt(process.env.PORT || '8000', 10),
			historyApiFallback: true
		},

		module: {
			rules: [
				{
					loader: 'babel-loader',
					test: /\.(js|jsx|ts|tsx)$/i,
					exclude: /node_modules/,
				}
			],
		},

		resolve: {
			extensions: ['...', '.jsx', '.tsx'],
		},

		plugins: [
			new HtmlWebpackPlugin({
				title: process.env.APP_TITLE || 'Untitled',
				inject: true,
				template: path.resolve(SRC_DIR, 'index.html'),
				favicon: path.resolve(SRC_DIR, 'assets', 'icons', 'react.png'),
				... isProduction && {
					minify: {
  						collapseWhitespace: true,
					  	keepClosingSlash: true,
						removeComments: true,
						removeRedundantAttributes: true,
						removeScriptTypeAttributes: true,
						removeStyleLinkTypeAttributes: true,
						removeEmptyAttributes: true,
						useShortDoctype: true,
						minifyCSS: true,
						minifyJS: true,
						minifyURSLs: true
					}
				},
			}),
		],
	}
}