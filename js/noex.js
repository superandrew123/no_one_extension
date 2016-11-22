

NOEx = {
  contexts: [],
  names: [],

  getNames: function(json_paths){
    for(var i = 0; i < json_paths.length; i++){
      $.ajax({
        method: 'get', 
        dataType: 'json', 
        url: json_paths[i],
        success: function(response){
          NOEx.loadData(response);
        }
      });
    }
  },

  loadData: function(data){
    NOEx.contexts.push(data);
    NOEx.names = NOEx.names.concat(data.names);
  },

  showNames: function(){
    var nameHtml = '';
    for(var i = 0; i < this.contexts.length; i++){
      var context = this.contexts[i];
      nameHtml += '<p class="context">' + context.context + '</p>';
      for(var x = 0; x < context.names.length; x++){
        nameHtml += '<p class="name">'+ context.names[x] +'</p>';
      }
    }
    $("#main-content").html(nameHtml);
  }
}