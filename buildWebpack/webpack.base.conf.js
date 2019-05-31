const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const PATH = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
};

module.exports = {
    externals: {
        paths: PATH
    },
    entry: {
        app: PATH.src
    },
    output: {
        filename: `${PATH.assets}js/[name].[hash].js`,
        path: PATH.dist,
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }, {
            test: /\.svelte$/,
            exclude: /node_modules/,
            use: {
                loader: 'svelte-loader',
                options: {
                    emitCss: true,
                    hotReload: true
                }
            }
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loader: {
                    scss: 'vue-style-loader!css-loader!sass-loader'
                }
            }
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                },{
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: `${PATH.src}/js/postcss.config.js` } }
                }
            ]
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                },{
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: `${PATH.src}/js/postcss.config.js` } }
                }, {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                }
            ]
        }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new VueLoaderPlugin (),
        new MiniCssExtractPlugin ({
            filename: `${PATH.assets}css/[name].[hash].css`
        }),
        new HtmlWebpackPlugin ({
            template: `${PATH.src}/index.html`,
            filename: './index.html',
            inject: false
        }),
        new CopyWebpackPlugin ([
            { 
                from: `${PATH.src}/img`,
                to:  `${PATH.assets}img`
            }, { 
                from: `${PATH.src}/static`,
                to:  ''
            }
        ])
    ]
};