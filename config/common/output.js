'user strict';

//入口文件
let output=function(path,dirname){
            return{
            path:path.resolve(dirname,'dist'),
            filename:'js/[name].js'
             }
    };
    
module.exports= output;