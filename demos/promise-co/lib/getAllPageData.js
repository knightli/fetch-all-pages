var co = require('co');
var fetch = require('./adaptor/fetch');
var wait = require('./adaptor/wait');

var getAllPageData = function*() {
  var allData = [];

  var page = 1;
  var total;

  do{
    if(page>1) yield wait(2000);
    var data = yield fetch(page);
    if(typeof total=="undefined") total = data.total;
    console.log('concat page '+page+' data to allData');
    allData = allData.concat(data.data);
    page ++;
  }while(page<=total);

  return allData;
};

module.exports = co.wrap(getAllPageData);