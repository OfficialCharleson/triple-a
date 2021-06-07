$(document).ready(function(){

    login= sessionStorage.getItem("logged");

    $("#logout").click(function(){
        sessionStorage.clear();
        window.location.replace("../clients-area");                
    });

    $("#login-form").submit(function(e){        
        $("#success").fadeOut();
        $("#failure").fadeOut();
        $("#loading").fadeIn()
        e.preventDefault();
        username= $("#username").val();
        password=$("#password").val();
        //I check if the password and username match the registered username and password

        if (username=="triplea" && password=="tradeMaster"){
            $("#loading").fadeOut(function(){
                $("#success").fadeIn();
                sessionStorage.setItem("logged","true")
                window.location.replace("../clients-area");                
            });
        }
        else{
            $("#loading").fadeOut(function(){
                $("#failure").fadeIn();
            });
        }
    });

    if(login=="true"){
        $("#login").fadeOut(function(){
            $("#sensitive").fadeIn();
        });
    }
});