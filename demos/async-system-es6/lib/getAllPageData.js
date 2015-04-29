import fetch from './adaptor/fetch';
import wait from './adaptor/wait';

async function getAllPageData() {
  var allData = [];
  var page = 1;
  var total;

  do{
    if(page>1) await wait(2000);
    var data = await fetch(page);
    if(typeof total=="undefined") total = data.total;
    console.log('concat page '+page+' data to allData');
    allData = allData.concat(data.data);
    page ++;
  } while(page<=total);

  return allData;
}

export default getAllPageData;