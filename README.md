## Try Webpack

https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460

## Install webpack

> `npm install webpack -g`

## Bundle without config file

> `webpack ./src/app.js public/bundle.js`

## Bundle with config file

#### webpack.config.js

```javascript
var path = require("path");
module.exports = {
    extry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    }
}
```

> `webpack`

## Watch mode

> `webpack --watch`


## Webpack dev server

> `npm install -g webpack-dev-server`

> `webpack-dev-server` > http://localhost:8080

> `webpack-dev-server --inline`

## Webpack loaders and preloaders

> `npm install babel-core babel-loader jshint jshint-loader node-libs-browser babel-preset-es2015 babel-preset-react webpack  --save-dev`

#### webpack.config.js

```javascript
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
    resolve: { },
}
module.exports = cfg;
```

## Production Webpack bundles

> `webpack -p`

## Working with different config files for production vs development

- Minify with -p
- Remove console.log with WebpackStripLoader

> `npm install strip-loader --save-dev`

#### webpack-production.config.js

```javascript
var WebpackStripLoader = require("strip-loader");
var devConfig = require("./webpack.config.js");

var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    loader: WebpackStripLoader.loader("console.log")
};
devConfig.module.loaders.push(stripLoader);
module.exports = devConfig;
```

> `webpack --config webpack-production.config.js -p`