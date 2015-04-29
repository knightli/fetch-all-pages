import getAllPageData from './getAllPageData';
import onerror from './adaptor/onerror';

(async function(){
  var allData;
  try{
    allData = await getAllPageData();
  } catch(e) {
    onerror(e);
  }
  console.log('allData got:',allData);
})();