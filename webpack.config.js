const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/ddc.js',
    output: {
        filename: 'davinciDDC.js',
        path: path.resolve(__dirname, './dist'),
        library: 'DavinciDDC',
        libraryTarget: 'var'
    },
    resolve: {
        extensions: [
            '.js'
        ],
        modules: [
            path.resolve(__dirname, './js'),
            'node_modules'
        ]
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js)$/,
                exclude: /node_modules/,
                loader: [
                    'babel-loader',
                    'eslint-loader'
                ]
            },
            {
                test: /\.(js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'es2015',
                            'stage-0'
                        ]
                    }
                }
            }
        ]
    }
};
