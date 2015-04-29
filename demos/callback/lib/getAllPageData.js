var fetch = require('./adaptor/fetch');
var wait = require('./adaptor/wait');

var getAllPageData = function(page, allData, callback) {
  page = page || 1;
  allData = allData || [];

  fetch(page, function(err, data) {
    if (err) return callback(err);
    console.log('concat page '+page+' data to allData');
    allData = allData.concat(data.data);
    if(page==data.total) return callback(null, allData);
    page ++;
    wait(2000, function() {
      getAllPageData(page, allData, callback);
    });
  });
};

module.exports = getAllPageData;
