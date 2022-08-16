$("document").ready(function(){
    //alert("hi");
/*$("#img1").mouseenter(function(){
    $("#img1").css('width','500px');
});

$("#img1").mouseleave(function(){
    $("#img1").css('width','250px');
});*/

$("#img1").hover(func1,func2);
function func1()
{
    $("#img1").css('width','500px');
}

function func2()
{
    $("#img1").css('width','250px');
}
});

////Effect

$("document").ready(function(){

    $("#btn").click(function(){
                    $("#img1").css('width','500px');
    });
    $("#btn").dblclick(function(){
        $("#img1").css('width','250px');});
    $("#btn1").click(function(){ $("#img1").hide(2000); });
    $("#btn2").click(function(){ $("#img1").show(2000); });
    $("#btn3").click(function(){  $("#img1").toggle(2000);  });

    $("#btn4").click(function(){ $("#img1").fadeIn(2000); });
    $("#btn5").click(function(){ $("#img1").fadeOut(2000); });
    $("#btn6").click(function(){  $("#img1").fadeToggle(2000); });

    $("#btn7").click(function(){ $("#img1").slideUp(2000); });
    $("#btn8").click(function(){ $("#img1").slideDown(2000); });
    $("#btn9").click(function(){  $("#img1").slideToggle(2000); });
    $("#btnstop").click(function(){  $("#img1").stop(); });
});