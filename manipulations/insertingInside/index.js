$(document).ready(function(){
    $("#appendButton").click(function(){
        $("#text").append("New Text added after para tag<br>");
    });
    $("#prependButton").click(function(){
        $("#text").prepend("New Text added before para tag<br>");
    });
    $("#appendToButton").click(function(){
        $("<span>New Text added after para tag Using Append to<br></span>").appendTo("#text");
    });
    
    $("#prependToButton").click(function(){
        $("<span>New Text added before para tag using Prepend to<br></span>").prependTo("#text");
    });
});