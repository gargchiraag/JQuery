$(document).ready(function(){
    $("#text").click(function(){
        $("body").prepend("Trigger Button have been clicked<br>");
    });
    $("#clickMe").click(function(){
        $("#text").trigger("click");
    })
})