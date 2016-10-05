var path = require('path'),
webpack = require('webpack');

function fromRootDir(matchPath) {
	return new RegExp(process.cwd() + matchPath);
}

module.exports = {
	cache: true,
	debug: true,
	devtool: 'eval',
	entry: './app/src/js/main.js',
	output: {
		path: path.join(__dirname, "app/build/js"),
		filename: 'bundle.min.js'
	},
	resolve: {
		extensions: ['', '.js', '.json', '.coffee']
	}
};