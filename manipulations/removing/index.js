$(document).ready(function(){
    $("#remove").click(function(){
        $("p").remove();
        alert("Remove basically remove tag as well as content");
    })
    $("#empty").click(function(){
        $("p").empty();
        alert("Empty basically remove content and tag remain there!");
    })
})