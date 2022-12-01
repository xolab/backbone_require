const path = require('path');

module.exports = {
    entry: './js/react/root.jsx',
    devtool: 'inline-source-map',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'js/react/dist'),
        filename: 'react-lib.js',
        globalObject: 'this',
        library: {
            name: 'reactLib',
            type: 'umd'
        },
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
        ]
    },
};