var fetch = require('./adaptor/fetch');
var wait = require('./adaptor/wait');

var getAllPageData = function(page, allData) {
  page = page || 1;
  allData = allData || [];

  return fetch(page).then(function(data) {
    console.log('concat page '+page+' data to allData');
    allData = allData.concat(data.data);
    if(page==data.total) return Promise.resolve(allData);
    page ++;
    return wait(2000).then(function(){
      return getAllPageData(page, allData);
    });
  });
};

module.exports = getAllPageData;
