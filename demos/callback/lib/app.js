var getAllPageData = require('./getAllPageData');
var onerror = require('./adaptor/onerror');

getAllPageData(null, null, function(err, allData) {
  if (err) return onerror(err);
  console.log('all Data got:',allData);
});