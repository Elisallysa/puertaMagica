$(document).ready(function(){
    $("#btn-login").click(function(){
        let username = $("#email").val().trim();
        let password = $("#pwd").val().trim();
        let confpassword = $("#confpwd").val().trim();

        console.log(username)

        if( username != "" && password != "" && confpassword != "" ){
            if (password == confpassword) {
                $.ajax({
                url:'http://localhost:5002/User/Reg',
                type:'post',
                data:JSON.stringify({email:username,password:password}),
                contentType:"application/json; charset=utf-8",
                success:function(response){
                    
                    window.location = "index.html";
                },
                error:function(){
                    $("#error").fadeIn();
                }
            });
        } else {
            alert("Complete todos los campos.");
        }
            }

    });

    $("#btn-volver").click(function(){
        window.location = "index.html";
    });
});