module.exports = {
	entry: [
		"./src/index.js"
	],
	output: {
		path: __dirname + './out/',
		filename: "bundle.js"
	},
	module: {
		rules: [{
				test: /\.css$/,
				use: [{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
				  loader: 'babel-loader',
				  options: {
					presets: ['env']
				  }
				}
			}
		]
	}
};