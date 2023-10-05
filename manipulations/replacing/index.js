$(document).ready(function(){
    $("#replaceWith").click(function(){
        $("p:first").replaceWith("Only first para got changed!!!!");
    });
    $("#replaceAll").click(function(){
        $("<p>All para got changed!!!!</p>").replaceAll("p");
    })
})