
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
