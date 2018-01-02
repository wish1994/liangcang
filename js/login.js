$("#userInp").blur(function(){
    if($(this).val()==""){
        $(this).val("用户名/邮箱/手机号")
    }
});
$("#passInp").blur(function(){
    if($(this).val()==""){
        $(this).val("请输入密码")
    }
});
$("#userInp").focus(function(){
    if($(this).val()=="用户名/邮箱/手机号"){
        $(this).val("")
    }
});
$("#passInp").focus(function(){
    if($(this).val()=="请输入密码"){
        $(this).val("")
    }
});

$("#qq").hover(function(){
    this.src="http://imgs-qn.iliangcang.com/images/default/qqmouse.png"
})
$("#qq").mouseout(function(){
    this.src="http://imgs-qn.iliangcang.com/images/default/qqnormal.png"
})
$("#xinlang").hover(function(){
    this.src="http://imgs-qn.iliangcang.com/images/default/xinlangmouse.png"
})
$("#xinlang").mouseout(function(){
    this.src="http://imgs-qn.iliangcang.com/images/default/xinlangnormal.png"
})

$("#douban").hover(function(){
    this.src="http://imgs-qn.iliangcang.com/images/default/doubanmouse.png"
})
$("#douban").mouseout(function(){
    this.src="http://imgs-qn.iliangcang.com/images/default/doubannormal.png"
})

$("#tengxun").hover(function(){
    this.src="http://imgs-qn.iliangcang.com/images/default/tengxunmouse.png"
})
$("#tengxun").mouseout(function(){
    this.src="http://imgs-qn.iliangcang.com/images/default/tengxunnormal.png"
})

$("#login").click(function(){
    $.post("http://h6.duchengjiu.top/shop/api_user.php",{status:"login",username:$("#userInp").val(),password:$("#passInp").val()},function(obj){
        if(obj.code!="0"){
            alert("用户名或密码错误")
        }else{
            alert("登录成功");
            localStorage.setItem("username",$("#userInp").val());
            localStorage.setItem("password",$("#passInp").val());
            localStorage.setItem("token",obj.data.token);
            // $.cookie("user",$("#userInp").val());
            // $.cookie("password",$("#passInp").val()); 
            setTimeout(function() {
                  location.href = "index.html";             
            }, 1000);
        }
    })
})