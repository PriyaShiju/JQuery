$(document).ready(function(){
   
    $("#btnAdd").click(function(){
        var toAdd = $("input[name=txtListItem]").val();
        //alert(toAdd);  // btnAdd is div tag and getting val() from textbox , append function is used for ul tag
        if (toAdd != "") 
            $("ul[id=lstAdd]").append("<li>"+ toAdd + "</li>");
        $("input").val('');
        $("input").focus();
    });

    
  
    
});