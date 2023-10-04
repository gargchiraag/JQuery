$(document).ready(function(){
    $("#clickMe").one("click",function(){
        $("body").prepend("Only work Once");
    })
})