const path = require('path')

module.exports = {
	entry: path.join(__dirname, 'my-lil-cat.js'),
	output: {
		path: path.join(__dirname, 'lib/'),
		filename: 'my-lil-cat.js',
		publicPath: '/lib'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['babel-preset-es2015']
					}
				}
			}
		]
	}
}