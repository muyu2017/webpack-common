'user strict';

const ExtractTextPlugin       =  require('extract-text-webpack-plugin');
const autoprefixer= require('autoprefixer');

     let modules =  {
                    rules: [
                        {
                            test:/\.css$/,
                            use:ExtractTextPlugin.extract({
                                fallback:"style-loader",
                                use:[{loader:"css-loader",options:{importLoaders:1}}]
                            })
                        },
                        {
                            test: /\.string$/,
                            use:[{
                                loader:'html-loader'
                            }]
                        },
                        {
                            test:/\.(png|jpg|gif)\??.*$/,
                            use:[
                                {loader:'url-loader',
                                options:{
                                    limit:8192,
                                    name:'images/[name].[ext]'
                                } 
                            }]
                        },
                        {
                            test:/\.(woff|svg|eot|ttf)\??.*$/,
                            use:[
                                {loader:'url-loader',
                                options:{
                                    limit:8192,
                                    name:'resource/font/[name].[ext]'
                                } 
                            }]
                        },
                        {
                            test: /\.vue$/,
                            use: {
                                loader: "babel-loader"
                            },
                            exclude: /node_modules/
                        },
                        {
                            test: /\.scss$/,
                            use: ExtractTextPlugin.extract({
                                fallback: "style-loader",
                                use: [{
                                    loader: 'css-loader'
                                },
                                {
                                    loader: 'postcss-loader',
                                    options: {
                                        plugins: () => [autoprefixer(
                                            {
                                              browsers: ['iOS >= 7', 'Android >= 4.1',
                                              'last 10 Chrome versions', 'last 10 Firefox versions',
                                              'Safari >= 6', 'ie > 8']
                                            }
                                        )],
                                    },
                                },
                                {
                                    loader: 'sass-loader'
                                }]
                            })

                        },
                        {
                            test: /\.less$/,
                            use: ExtractTextPlugin.extract({
                                fallback: "style-loader",
                                use: [{
                                    loader: 'css-loader'
                                },
                                {
                                    loader: 'postcss-loader',
                                    options: {
                                      plugins: () => [autoprefixer(
                                        { browsers: ['iOS >= 7', 'Android >= 4.1', 
                                           'last 10 Chrome versions', 'last 10 Firefox versions', 
                                           'Safari >= 6', 'ie > 8'] 
                                        }
                                      )],
                                    },
                                  },
                                {
                                    loader: 'less-loader'
                                }]
                            })
            
                        },
                        {
                            test: /\.(jsx|js)$/,
                            use: {
                                loader: "babel-loader"
                            },
                            exclude: /node_modules/
                        },

                    
                    ]
                }
        

      module.exports=modules;