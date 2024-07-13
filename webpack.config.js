const path = require('path');
const htmlWebPackPlugin = require ('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './main.js',
        assetModuleFilename: 'assets/[name][ext]',
    },
    mode: 'development',

    module: {
        rules: [

            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },

            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: false}
                    }
                ]
            },

            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    /* create 'styles' nodes from js string */
                    "style-loader",
                    // translate css into common js
                    "css-loader",
                    //implement sass into css
                    "sass-loader",
                    {
                        loader: 'sass-resources-loader',
                        /* sass-resources-loader => используется для того, чтобы если будет подгрузка scss файлов, то нам будет доступна область с переменными. Эти переменные мы будем использовать, т.е если мы знаем что большинство (н) шрифтов будет 14 пикселей, логичней его возвести в переменную, и использовать посредством переменной..
                        короче говоря у нас в vars.scss => будут находиться переменные */
                        options: {
                            resources: [
                                 'src/styles/vars.scss',
                                 'src/styles/mixins.scss',
                            ]
                        }
                    }
                ]
            }
        ]
    },


    plugins: [
        new htmlWebPackPlugin ({
            template: './src/app.html',
            filename: './index.html'
        }),

        new CopyPlugin({
            patterns: [
              { from: 'public' },
            ],
          }),
    ],

    devServer: {
        hot: true,
        open: true,
        compress: true,
        port: 3000,
    }
}