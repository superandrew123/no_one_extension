

NOEx = {
  contexts: [],
  names: [],

  getNames: function(json_paths){
    for(var i = 0; i < json_paths.length; i++){
      $.ajax({
        method: 'get', 
        dataType: 'json', 
        url: json_paths[i]
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
  },

  removeNames: function(){
    for (var i = 0; i < this.names.length; i++) {
      var selector = this.names[i];
      $('a:contains("'+ selector +'"),p:contains("'+ selector +'"),span:contains("'+ selector +'")')
        .each(function(x, element){
          var text = $(element).text().replace(new RegExp(selector, 'g'), 'No One');
          $(element).text(text);
          // console.log(text);
          // debugger;
          // element.text = element.text.replace(selector, 'No one');
      });
    }
  }
}