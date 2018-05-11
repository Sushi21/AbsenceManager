var client = require('smartsheet');
var smartsheet = client.createClient({
  accessToken: '**',
  logLevel: 'info'
});
module.exports = {
  listSheets: smartsheet.sheets
    .getSheet({ id: 1603494097512324 })
    .then(function(sheetInfo) {
      console.log(sheetInfo.columns);
    })
    .catch(function(error) {
      console.log(error);
    })
};
