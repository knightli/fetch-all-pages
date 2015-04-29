var System = require('systemjs');

// babel 不是默认 transpiler, 需显式指定
System.transpiler = 'babel';

System.config({
  babelOptions: {
    stage: 1
  }
});


// 需要依赖regeneratorRuntime,否则会报错:
// `ReferenceError: regeneratorRuntime is not defined`
//require('regenerator/runtime');

System.import('./lib/app').then(function(){
  console.log('[async-await-main] module loaded!');
});
