
$(document).ready(function(){
    $("#toggleButton").click(function(){
        $("#text").toggle(function(){
            $("#text").css("color","red");
        });
    });
});
