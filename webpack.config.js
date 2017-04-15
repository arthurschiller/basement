var path = require('path'),
webpack = require('webpack');

function fromRootDir(matchPath) {
	return new RegExp(process.cwd() + matchPath);
}

module.exports = {
	cache: true,
	debug: true,
	devtool: ['eval', 'source-map'],
	entry: './dev/src/js/main.js',
	output: {
		path: path.join(__dirname, "dev/js"),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.json', '.coffee']
	},
	loaders: [
		{
			test: /\.js$/,
			loader: 'babel',
			exclude: /(node_modules|bower_components)/,
			query: {
				plugins: ['transform-runtime'],
				presets: ['es2015', 'stage-0'],
			}
		}
	]
};