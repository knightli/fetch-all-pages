var getAllPageData = require('./getAllPageData');
var onerror = require('./adaptor/onerror');

getAllPageData().then(function(allData) {
  console.log('all Data got:',allData);
}, onerror);