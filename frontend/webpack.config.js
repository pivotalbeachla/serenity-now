var webpack = require("webpack");
var path = require('path');

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
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.html$/,
                loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname)) + '/!html'
            }
        ]
    }
};
