var System = require('systemjs');

require("./babel-compressed/babel-polyfill");

System.config({
  baseUrl: "./", // baseUrl must be the node run dir
  transpiler: 'babel',
  babelOptions: {
    optional: ["es7.asyncFunctions"]
  },
  paths: {
    "@babel": "./babel-compressed/babel.js" // all the system path will reative to the baseURL
  }
});

System.import('./lib/app').catch(function(err){
  if(err) console.error(err.stack);
});