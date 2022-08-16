
function func1()
{
   
   $("div").css('background-color','orange');

   $("#p1").css('font-style','italic');
   $(".para").css('font-family', 'Verdana');

   $("#div1,#div2").css('color','red');

   $("#div3, li").css('background-color','purple');
   //$("div p").fadeToggle();
   $("p:second").fadeToggle();

}
function func2()
{
   $("#img1").fadeToggle(3000);
   
}

function func_events()
{
    document.getElementById("img1").style.width="500px";
}

/* $("button").click(func_eventstest);
function func_eventstest()
{
    
    $("#img1").css('width','500px');
}
////////////////////////////////////////////////////////

$("button").click( function()
{
    
    $("#img1").css('width','500px');
} );
*/

/////////////////////////////////////////


$("document").ready(function(){

    

    $("button").dblclick(function(){
        //alert("hi");
            $("#img1").css('width','500px');
    
    });

});
