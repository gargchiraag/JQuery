$(document).ready(function(){
    $("#afterButton").click(function(){
        $("#text").after("New Text added after para tag using After<br>");
    });
    $("#beforeButton").click(function(){
        $("#text").before("New Text added before para tag using before<br>");
    });
    $("#insertAfterButton").click(function(){
        $("<span>New Text added after para tag Using Insert After<br></span>").insertAfter("#text");
    });
    
    $("#insertBeforeButton").click(function(){
        $("<span>New Text added before para tag using Insert Before<br></span>").insertBefore("#text");
        alert("Basically Before and Insert Before Have syntax Difference and rest are same!!")
    });
});