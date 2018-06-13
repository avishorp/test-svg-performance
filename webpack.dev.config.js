var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: [
		path.join(__dirname, 'src/index.js')
    ],
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},{
				test: /\.less$/,
				loaders: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            }
		]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({ template: 'index.html' })
    ]
}
