var System = require('es6-module-loader').System;

// traceur 是默认 transpiler, 所以可以省略 System.transpiler 的设置
System.traceurOptions = {
  asyncFunctions: true
};

System.import('./lib/app').then(function(){
  console.log('[async-await-main] module loaded!');
});
