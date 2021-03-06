var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname + "/build",
		filename: 'main.js'
	},
	devtool: 'source-map',
	target: 'atom',
	stats: {
		colors: true,
		modules: true,
		reasons: true
	},
	resolve: {
		alias: {},
		modulesDirectories: [
			'node_modules'
		],
	},
	module: {
		loaders: [
			{
	      test: /\.html$/,
	      loader: 'raw'
    	},
			{
				test: /\.js/,
				loaders: ['babel-loader', 'ng-annotate'],
				exclude: /node_modules/
			},
			{
				test: /\.coffee$/,
				loader: 'coffee-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	},
	plugins: [
		new webpack.IgnorePlugin(/vertx/),
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 9999,
			open: false,
			files: ['index.html','index.css', 'build/main.js'],
			server: {
				baseDir: ['.']
			}
		})
	]
};
