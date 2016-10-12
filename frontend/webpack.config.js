var webpack = require("webpack");

module.exports = {
		// https://webpack.github.io/docs/code-splitting.html#split-app-and-vendor-code
		entry: {
			vendor: ['angular'],
			app: './lib/index.js'
		},
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
		plugins: [
			new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  	],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
