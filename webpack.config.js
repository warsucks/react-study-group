var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var packagePath = require.resolve('webpack').split('/webpack/')[0];
var srcPath = path.resolve(__dirname, 'src');
var distPath = path.resolve(__dirname, 'public');

module.exports = {
	entry: {
		'app.bundle.js': './src/app.js',
		'app.css': './src/app.scss'
	},
	output: {
		path: distPath,
		filename: '[name]'
	},
	resolve: {
		modulesDirectories: [packagePath, 'web_modules', 'node_modules']
	},
	resolveLoader: {
		modulesDirectories: [packagePath, 'web_loaders', 'web_modules', 'node_loaders', 'node_modules']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: srcPath,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("[name]")
	]
};