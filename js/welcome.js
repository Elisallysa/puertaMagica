$(document).ready(function(){
        
    $.ajax({
        url:'http://localhost:5002/User/All',
        type:'get',
        contentType:"application/json; charset=utf-8",
        success:function(response){
            let users = response
            users.forEach(user => {
                console.log(user)
                $("#users").append('<li>'+user.Username+'</li>')
            });
            
        },
        error:function(){            
            alert("error")
        }
    });
        
  
});