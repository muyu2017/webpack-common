'user strict';
const webpack                 =  require('webpack');
const ExtractTextPlugin       =  require('extract-text-webpack-plugin');
const HtmlWebpackPlugin       =  require('html-webpack-plugin');
const data       =  require('./../../data/init');
const  getHtmlconfig=function(name,out,title,data){
    return{
        template :'./src/view/'+name[0]+'.html',
        filename : out+'/'+name[0]+'.html',
        title    : title,
        data     : data,
        inject   :'body',
        hash     :true,
        chunks   :[name[0],name[1]]
        }
    }
      let plugins=[
        // 独立通用模块
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            filename:'js/common.js'
        }),
        new ExtractTextPlugin("css/[name].css"),
 
        
    ];
   
  
     function htmltem(array){
        array.forEach(element => {
            let pl=new HtmlWebpackPlugin(getHtmlconfig(element.html,element.out,element.title,element.data ));
            plugins.push(pl);
        });
     }


    htmltem(data);
    module.exports =plugins;