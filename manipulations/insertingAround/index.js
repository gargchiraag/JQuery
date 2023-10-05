$(document).ready(function(){
    $("#wrapInnerButton").click(function(){
        $("span").wrapInner("<i><b></i>");
        //alert("Wrap Inner Use to add HTMl Leaving rest content untouched!")
    })
    $("#wrapButton").click(function(){
        $("#text").wrap("<i></i>");
        //alert("Wrap Use to add HTML to the selected tag on which we gonna work!!")
    })
    $("#wrapAllButton").click(function(){
        $("#text").wrap("<i></i>");
        //alert("Wrap All Use to wrap all existing HTML by which we want!!")
    })
})