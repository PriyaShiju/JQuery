$("document").ready(function(){
    var language=["HTML","CSS","Javascript","Java","Basic"];
    $("#words").autocomplete({
        source: language    },{delay:2000, minLength: 1, autoFocus: true});


    $("#btnCount").click(function(){
        $("#divDialog").dialog("open");
    });


    $("#divDialog").dialog({
        title: "Do you want to continue?",
        /*draggable:false,
        resizable: false,
        closeOnEscape:false,
        modal:true,
        autoOpen: false*/
        draggable:true,
        resizable: true,
        closeOnEscape:true,
        modal:false,
        autoOpen: false
      

    });
//resizable(), theme
$(".sort").sortable(
{
        opacity: 0.5,
        cursor: "grabbing",
        containment:"parent",
        delay:200,
        distance:10
    });

  /*  $("#divDialog").draggable({
        //axis: "x",
        cursor: "grabbing",
        opacity:"0.5",
        //containment:"parent",
        //grid: [300,300],

        snap:true,
        snapTolerance: 100
    });*/

    $("#btnGet").click(function(){
        var getvalue = $("#divDialog").dialog("option","draggable");
        alert(getvalue);
    });
    $("#btnSet").click(function(){
        $("#divDialog").dialog("option","draggable",false);
       // $("#divDialog").dialog("open");
    });


    $("#div2").accordion(
        {
            collapsible: true,
            icons: { header:" ui-icon-triangle-1-s",activeHeader:"ui-icon-triangle-1-n"},
            animate:2000,
            event:"mouseover"
        }
    );

    $("#words").tooltip(
        {
         track:true,
         content: "This is place for words",
         show:{effect:"highlight",duration:2000,delay:150},
         hide:{effect:"explode",duration:2000}
        }
    );
    $("#date").datepicker(
    {
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
        minDate: new Date(2016,1,5),
        maxDate: new Date(2023,1,6),
        numberOfMonths: 2
    }
     //min date --> month jan is 0, feb is 1.

    );
})