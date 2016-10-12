var webpack = require("webpack");

module.exports = {
		entry: {
			app: './lib/index.js'
		},
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
