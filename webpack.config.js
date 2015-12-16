var path = require('path');

module.exports = {
	entry  :  './src/index',
	output : {
		path: './',
		filename: 'build/bundle.js',
		sourceMapFilename: "bundle.js.map",
	},
	debug: true,
  	devtool: 'inline-source-map',
	devServer:{
		inline: true,
		port: 3000
	},
	module: {
		loaders:[
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets:['es2015','react']
				}
			},
			{
				test: /\.js$/,
				loaders: ['react-hot', 'babel'],
				include: path.join(__dirname, '..', '..', 'src')
			},
			// LESS
			{
				test: /\.less$/,
				loader: 'style!css!less'
			},
			{	// SASS
				test: /\.scss$/,
				loader: 'style!css!sass!autoprefixer-loader?browsers=last 2 versions'
			}
		]
	}
}