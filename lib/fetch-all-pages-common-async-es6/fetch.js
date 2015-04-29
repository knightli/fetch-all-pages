"format es6";

var pageTotal = 4;

async function fetch(page) {

  if(!page) page = 1;

  return new Promise((resolve, reject) => {
    setTimeout(function(){
      console.log('page'+page+' fetch succ!');
      var data = [];
      var min = (page-1)*10 + 1;
      var max = page*10 + 1;
      for(var i=min; i<max; i++) {
        data.push(i);
      }
      resolve({page:page, total: pageTotal, data:data});
    },1000);
  });

};

export default fetch;

