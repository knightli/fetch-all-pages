var pageTotal = 4;

var fetch = function(page, callback) {

  if(!page) page = 1;

  setTimeout(function(){
    console.log('page'+page+' fetch succ!');
    var data = [];
    var min = (page-1)*10 + 1;
    var max = page*10 + 1;
    for(var i=min; i<max; i++) {
      data.push(i);
    }
    callback(null, {page:page, total: pageTotal, data:data});
  },1000);

};

module.exports = fetch;