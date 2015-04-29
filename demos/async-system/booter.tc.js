var System = require('systemjs');

// traceur 是默认 transpiler, 所以可以省略 System.transpiler 的设置
System.config({
  traceurOptions: {
    asyncFunctions: true
  }
});

System.import('./lib/app').then(function(){
  console.log('[async-await-main] module loaded!');
});
