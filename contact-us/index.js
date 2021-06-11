$(document).ready(function(){
    $("#contact-form").submit(function(e){
        e.preventDefault();
        $("#success").hide(function(){
            $("#loader").fadeIn(2000,function(){
                $("#loader").fadeOut(function(){
                    $("#success").fadeIn(2000);
                });
            });
        });

        
    });
});