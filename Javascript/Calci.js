$("document").ready(function(){
    var result=0;
    var prevEntry = 0;
    var operation = null;
    var currentEntry = '0';
    updateScreen(result);
    //var buttonPressed="";

    $('.button').on('click',function(evt){

        var buttonPressed = $(this).html();
        //console.log(buttonPressed);
   

    if (buttonPressed === "C")
    {
        result=0;
        currentEntry = '0';
    }
    else if(buttonPressed === "CE")
    {
       // result=0;
        currentEntry = '0';
    }
    else if(buttonPressed === "back")
    {
        

        currentEntry = currentEntry.substring(0,currentEntry.length-1);
    }
    else if(buttonPressed === "+/-")
    {

        currentEntry*= -1;
        
    }
    else if(buttonPressed === ".")
    {
        currentEntry+=".";
    }
    else if(isNumber(buttonPressed))
    {
        if (currentEntry === "0") 
            currentEntry = buttonPressed;
        else 
            currentEntry+= buttonPressed;

    }
    else if (isOperator(buttonPressed))
    {
        //alert("is an operator");
        prevEntry = parseFloat(currentEntry);
        operation = buttonPressed;
        currentEntry = '';
        //result=prevEntry;
        
    }
    else if (buttonPressed==="%")
    {
        currentEntry = currentEntry/100;
        
    }
    else if (buttonPressed==="sqrt")
    {
        currentEntry = Math.sqrt(currentEntry);
        
    }
    else if (buttonPressed==="1/x")
    {
        currentEntry = 1/currentEntry;
        
    }
    else if (buttonPressed==="pi")
    {
        currentEntry = Math.PI;
        
        
    }
    else if (buttonPressed==="=")
    {
        //currentEntry='';
        currentEntry = operate(prevEntry,currentEntry,operation);
        operation = null;
    }
    updateScreen(currentEntry);
});
});

function updateScreen(displayValue)
{
    //alert("update screen with " + displayValue)
    var displayValue = displayValue.toString();
    $(".screen").html(displayValue.substring(0,10))
}
isNumber = function(value){
    //alert(value);
    return !isNaN(value);
}
function isOperator(value)
{
    //alert(value.toString() === "/");
    console.log(value);
    //alert(value.toString() == "/");

    return ((value.toString() === "/") || (value.toString() === "+") || (value.toString() === "-") || (value.toString() === "*")) 
   /* {

        return true;
    }
    else 
        return false ;*/
}
operate = function(a,b,operation)
{
    a=parseFloat(a);
    b=parseFloat(b);
    console.log(a,b,operation);
    if (operation === '+' ) return a+b;
    if (operation === '-' ) return a-b;
    if (operation === '*' ) return a*b;
    if (operation === '/' ) return a/b;

}
