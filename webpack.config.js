var path = require('path');

module.exports = {
    context:  path.join(__dirname, 'app'),
    entry: "./scripts/index.js",
    output: {
        path:  path.join(__dirname, 'public'),
        filename: "bundle.js"
    },
    module: {
	  	loaders: [
            {
                test: /\.html$/,
                loader: "angular-templatecache-loader"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['ng-annotate', 'babel-loader?presets=es2015']
            },
	    	{
		        test: /\.scss$/,
		        loaders: ["style-loader", "css-loader", "sass-loader"]
		    },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            }
	  	],
        rules: [
            {
                test: /\.js$/, // include .js files
                enforce: "pre", // preload the jshint loader
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                use: [
                    {
                        loader: "jshint-loader"
                    }
                ]
            }
        ]
	},
	resolve: {
		root: path.join(__dirname, '/app')
	},
    devServer: {
        port: 8081
    },
    devtool: 'source-map'

}