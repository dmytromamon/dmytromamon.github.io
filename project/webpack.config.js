const path = require('path')

const webpackConfig = {
    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, './build/'),
        filename: "bundle.js",
        publicPath: "/"
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: [".js", ".jsx"]
                },
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /(node_modules|bower_components)/,
                options: {
                    compact: true
                }
            }
        ]
    },
    
    devServer: {
        port: 3000,
        open: true,
        proxy: {
          "/": {
            target:"http://localhost:3000"
          }
        },
        historyApiFallback: {
            index: '/'
        }
    },

    resolve: {
        modules: ['./src', './node_modules']
    },

    mode: "development",
    devtool: "source-map"
}

module.exports = webpackConfig