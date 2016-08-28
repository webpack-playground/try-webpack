var path = require("path");
var cfg = {
    devtool: "source-map",
    entry: ["./src/app.js"],
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.es6/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015"]
                }
            }
        ]
    },
    resolve: {
        //extensions: ["", ".js", ".es6"]
    },
}

module.exports = cfg;