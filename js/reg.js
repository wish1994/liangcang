$.idcode.setCode();

$("#Txtidcode").change(function() {
    var r = $.idcode.validateCode();
    if (r == true) {
        console.log("验证成功！")
    } else {
        console.log("验证失败！")
    }
})

function reg(){
    
    if ( !testUser() )
	{
		$("#info").get(0).innerHTML = "请输入正确的用户名";
		return ;
    }
    
    // 判断输入的两次输入的密码是否一致
    var code1 = $("#passcode").get(0).value;
    var code2 = $("#conf-pwd").get(0).value;

    if(code1 != code2){
        $("#info2").css("display","block"); 
    }


    var url = "http://h6.duchengjiu.top/shop/api_user.php";
    
    
    $.post(
        url,
        {
            "status":"check",
            "username":$("#username").get(0).value
        },
        function(obj){
            if(obj.code == 0){
                $("#info").get(0).innerHTML = obj.message;
            }
            if(obj.code == 2001){
                $("#info").get(0).innerHTML = obj.message;
            }
        }
    )
    var data = {
        "status":"register",
        "username":$("#username").get(0).value,
        "password":$("#passcode").get(0).value
    }
    
    $.post(
        url,data,
        function(obj){
            if(obj.code == 0){
                $("#info").get(0).innerHTML = obj.message;
            }
        }
    )
}

function testUser(){
    var reg1 = /^[a-zA-Z]\w{2,19}$/

    var str1 = username.value

    if (reg1.test(str1))
    {
        return true
    }
    else
    {
        return false
    }
}



