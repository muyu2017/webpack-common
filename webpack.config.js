   
    const entry                   =  require('./config/common/entry');       //入口
    const output                  =  require('./config/common/output');      //出口
    const modules                 =  require('./config/common/module');      //模块
    const plugins                 =  require('./config/common/plugins');     //插件
    const devServer               =  require('./config/common/devServer');   //服务
    const resolve                 =  require('./config/common/resolve');     //别名
    const path                    =  require('path');

    const config={
                entry:entry,
                output:output(path,__dirname),
                module:modules,
                plugins:plugins,
                devServer:devServer(path,__dirname),
                resolve:resolve(__dirname),
          
        };
        
    module.exports = config;

