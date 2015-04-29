
//Promise.delay in bluebird
var wait = function(interval) {
  console.log('wait '+interval+'ms...');
  return new Promise(function(resolve){
    setTimeout(resolve, interval);
  });
};

module.exports = wait;