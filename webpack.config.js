var path = require('path');
var webpack = require('webpack');

module.exports = 
{
	entry: './app/index.js',
	output: 
	{
		path: __dirname + "/app/",
		filename:'bundle.js'
	},
	module:
	{
		loaders:[
			{
				test: /.jsx?$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				include: path.join(__dirname, 'app'),
				query:
				{
					presets:['es2015', 'react']
				}
			}
		]
	},
};