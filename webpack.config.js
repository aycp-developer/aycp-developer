// Obtiene el path del proyecto
const path = require('path');

// PLUGINS Y MINIFICADORES de CSS, SCSS y SASS
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { SourceMapDevToolPlugin } = require('webpack');

// Configuración del puerto en el que Webpack va a ejecutarse
// La variable PORT debería estar en los archivos .env del proyecto, de no ser así, desplegará en localhost:3000
const port = process.env.PORT || 3000;

// Define y exporta la configuración de Webpack
module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.[hash].js',
        publicPath: '/',
    },
    context: path.resolve(__dirname),
    devServer: {
        port,
        historyApiFallback: true,
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            // Reglas para los archivos JS y JSX
            // Tienen que pasar previamente a la build por el linting
            {
                enforce: 'pre',
                test: /(\.js|.jsx)$/,
                exclude: /node_modules/,
                use: [
                    'eslint-loader',
                    'source-map-loader',
                ],
            },
            // Reglas para los archivos JS y JSX
            // Babel ES y JSX
            {
                test: /(\.js|.jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/env',
                            '@babel/react',
                        ],
                    },
                },
            },
            // Reglas para los archivos CSS, SCSS y SASS 
            // Sirve para minificarlos en un solo archivo y una línea
            {
                test: /(\.css|\.scss|\.sass)$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ],
            },
            // Reglas para los archivos de imágenes
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: { loader: 'file-loader' },
            },
            // Reglas para los archivos pdf
            {
                test: /\.pdf$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        mimetype: 'application/pdf',
                        name: '[name].[ext]',
                        outputPath: 'pdfs/'
                    }
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './public/index.html',
            },
        ),
        new MiniCssExtractPlugin(
            {
                filename: './css/styles.css',
            },
        ),
        new SourceMapDevToolPlugin(
            {
                filename: '[file].map',
            },
        ),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', '.sass'],
        modules: [
            'node_modules',
        ],
    }
};
