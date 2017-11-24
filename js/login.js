$("#login").click(function(){    
    var username = $('input[name="username"]').val();
    var password = $('input[name="password"]').val();
   
    $.post("http://h6.duchengjiu.top/shop/api_user.php",{
                "status": "login",
                "username": username,
                "password": password
            },function(obj){
                if(obj.code === 0){                   
                    var data = obj.data;                   
                    for( property in data){                       
                        if(data.hasOwnProperty(property)){
                            localStorage.setItem(property,data[property]);
                        }                                            
                    }               
                    alert(obj.message);
                    var callbackURL = location.hash.substr(10);
                    
                    if( callbackURL ){
                        window.location.href = callbackURL;
                    }else{
                        window.location.href = "index.html";
                    }
                }else{
                    alert("用户名或密码输入有误！")
                }          
        });
})
window.onload=function(){
    if(localStorage.token){
        alert("您已登录，请勿重复登录！")
    }
}