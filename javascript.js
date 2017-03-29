
$(document).ready(function(){
  $("#puppies").click(function(){
    $("#dialog1").dialog({
      modal:true
    });
  });
});

$(document).ready(function(){
  $("#accordion").accordion({
    event: "mouseover",
    heightStyle: "content",
    collapsible: true
  });
});
$(document).ready(function(){
  $("#tabs").tabs();
});
