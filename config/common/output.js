'user strict';

//出口文件
let output=function(path,dirname){
            return{
            // path:path.resolve(dirname,' ./../../sites/applications/anomaly/members-module/resources/'),
            path:path.resolve(dirname,'dist'),
            filename:'js/[name].js',
            publicPath:'/'
            }
    };
    
module.exports= output;