var wait = function(interval, callback) {
  console.log('wait '+interval+'ms...');
  setTimeout(function(){
    callback(null);
  }, interval);
};

module.exports = wait;