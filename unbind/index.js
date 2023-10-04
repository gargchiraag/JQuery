$(document).ready(function(){
    $("#alert").click(function(){
        alert("This is an Alert!!!")
    });
    $("#clickMe").click(function(){
        $("#alert").unbind("click");
        $("#alert").text("No Pop Up!");
    });
})