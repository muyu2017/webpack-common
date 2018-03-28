'user strict';

//入口文件
let resolve=(dirname)=>{
    
    return{

        alias:{
            node_modules  :dirname+'/node_modules',
            img  :dirname+'/resource/img',
            font  :dirname+'/resource/font',
            comcss  :dirname+'/src/common/css',
            comjs  :dirname+'/src/common/js',
        }
    }
};




 module.exports= resolve;