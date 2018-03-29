'user strict';
 let index=require('./index/index');
      

let data = [
            {  html   : ['reg'], 
                out   : 'views', 
              title   : '注册',
               data   : '' 
            },
            {  html   : ['index', 'common'], 
                out   : 'views', 
              title   : '首页', 
               data   : '' 
            },
            {  html   : ['/com/main'], 
                out   : 'views', 
              title   : '身', 
               data   : '' 
            },
          ];

  module.exports = data;