(function(){

    if(localStorage.getItem("token")){
        $("#header .login-reg").html("<a href='#' class='lc-ahover'>"+localStorage.getItem("username")+"</a>&nbsp; <a href='javascript:;' class='login-out'>退出登录</a>"); 
        console.log(localStorage.getItem("username"));
    }
    $(".login-out").click(function(){
        localStorage.clear();
        location.reload("index.html");
    });
    $()
    
})()

    function ser(){
        localStorage.setItem("search",$("#shop-keyword").val());
    }
$("#header .header-menu .left-menu li").eq(1).mouseover (function(){
    $("#header .header-menu #shopdata").css("display","block");
})
$("#header .header-menu .left-menu li").eq(1).mouseout (function(){
    $("#header .header-menu #shopdata").css("display","none");
})

$("#header .header-menu .left-menu .one .shop .dt").mouseover(function(){
    $("#header .header-menu .left-menu .one").css("height",195);
    $("#header .header-menu .left-menu .one .kind").css("display","block");
    $("#header .header-menu .left-menu .one .triangle").css("display","block");
})

$("#header .header-menu .left-menu .one .shop .kind").mouseout(function(){
    $("#header .header-menu .left-menu .one").css("height",0);
$("#header .header-menu .left-menu .one .kind").css("display","none");
$("#header .header-menu .left-menu .one .triangle").css("display","none");
})

