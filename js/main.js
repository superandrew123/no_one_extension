
var NOExPromise = Promise.resolve(
  $.ajax({
    method: 'get', 
    dataType: 'json', 
    url: chrome.extension.getURL('data/people.json')
  })
);
NOExPromise.then(function(data){
  NOEx.loadData(data);
  NOEx.removeNames();
});
// NOEx.getNames([chrome.extension.getURL('data/people.json')]);

// $(document).ready(() => {
  // NOEx.showNames();
  // NOEx.removeNames();
// });
