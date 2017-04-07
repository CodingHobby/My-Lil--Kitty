const path = require('path')

module.exports = {
	entry: path.join(__dirname, 'app.js'),
	output: {
		path: path.join(__dirname, 'dist/'),
		filename: 'bundle.js',
		publicPath: '/dist'
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