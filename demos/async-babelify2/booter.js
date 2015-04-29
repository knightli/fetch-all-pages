var System = require('es6-module-loader').System;

var transpiler = 'traceur';//traceur

if (transpiler==='traceur') {
  // traceur 是默认 transpiler, 所以可以省略
  System.traceurOptions = {
    asyncFunctions: true
  };
}
else if(transpiler==='babel') {
  // babel 不是默认 transpiler, 需显式指定
  System.transpiler = 'babel';

  // 需要依赖regeneratorRuntime,否则会报错:
  // `ReferenceError: regeneratorRuntime is not defined`
  require('regenerator/runtime');

  // 这里背后隐含一个依赖: `babel-core`
  // 否则就要显式的指定`babel`,如下
  //System.paths['babel'] = './node_modules/babel-core/browser.js';

  // 配置babel的options
  // more: http://babeljs.io/docs/usage/options/
  System.babelOptions = {
    // es7的experimental stage
    // more: http://babeljs.io/docs/usage/experimental/
    stage: 1
  };
}

System.import('./async-await-main').then(function(){
  console.log('[async-await-main] module loaded!');
});
