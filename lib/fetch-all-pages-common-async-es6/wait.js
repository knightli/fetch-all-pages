"format es6";

async function wait(interval) {
  console.log('wait '+interval+'ms...');
  return new Promise(function(resolve){
    setTimeout(resolve, interval);
  });
};

export default wait;