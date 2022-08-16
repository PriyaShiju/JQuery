$("document").ready(function(){
/*$("img1").animate({style},
                   time in millisec or slow,
                   callbackfunction(){}
                   );
                   */
$(".div1").click(function(){
    var x= $(".p1").html();
    alert(x);
    alert($(".p1").attr("id")); //gets id
    $(".p1").attr('id','p2id');  //updates Id
    alert($(".p1").attr("id")); // displays updated Id
    alert( $(".div1").css("background-color") );
    $(".div1").css("background-color","orange");
    $("#span1").text(x);
   
});



$("#btn").click(function(){
    $(".div1").css("background-color","green");
    //$(".div1").append("<p> This Para 2 </p>")
    $(".div1").append('<img src="Images/JQ.png" alt="JQ" height="50px" > ');

});
$("#btnP").click(function(){
    
    $(".div1").prepend('<p> Para 3 prepend </p> ');

});
$("#btnB").click(function(){
    
    $(".div1").before('<p> Para Before </p> ');

});
$("#btnA").click(function(){
    
    $(".div1").after('<p> Para After </p> ');

});
$("#btnR").click(function(){
    
    $(".div1").remove();

});
$("#btnE").click(function(){
    
    $(".div1").empty('<p> Para Empty </p> ');

});
$("#btn3").click(function(){
        $("#img1").slideUp(2000).slideDown(3000).css('opacity','1').fadeOut(2000).fadeIn(2000);
        // $("#img1").slideUp(2000,function(){   $("#img1").slideDown(2000); });
    });

$("#btn1").click(function(){
    $("#img1").animate({

        left:'150px' ,
        height:'400px',
       width:'400px',
       opacity: '1'
    //},2000);
    },
    'slow', 
    function(){});
});

$("#btn2").click(function(){
    $("#img1").animate({

        left:'150px' ,
        height:'250px',
       width:'250px',
       opacity: '0.4'
    },2000);
    
});
});