'user strict';

//入口文件
let entry=(path,dirname)=>{
    return{
    contentBase:path.resolve(dirname,'dist'),
    host:'127.0.0.1',
    compress:true,
    port:880
}
};

module.exports= entry;