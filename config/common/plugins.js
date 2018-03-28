'user strict';
const webpack                 =  require('webpack');
const ExtractTextPlugin       =  require('extract-text-webpack-plugin');
const HtmlWebpackPlugin       =  require('html-webpack-plugin');
const  getHtmlconfig=function(name,title){
    return{
        template :'./src/view/'+name+'.html',
        filename :'view/'+name+'.html',
        title    : title,
        inject   :true,
        hash     :true,
        chunks   :['common',name]  
        }
    }
      let plugins=[
        // 独立通用模块
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            filename:'js/common.js'
        }),
        new ExtractTextPlugin("css/[name].css"),
        new HtmlWebpackPlugin(getHtmlconfig('index','首页' )),
        new HtmlWebpackPlugin(getHtmlconfig('reg','注册' )),
    ];

       

    module.exports =plugins;