//验证码
var icode=false;
$.idcode.setCode();
$("#Txtidcode").change(function() {
    var r = $.idcode.validateCode();
    if (r == true) {
        icode=true;
    } else {
        icode=false;
    }
})

//验证用户名是否注册
$('input[name="username"]').blur(function(){
	var username = $('input[name="username"]').val();
	$.post("http://h6.duchengjiu.top/shop/api_user.php",{"status": "check","username": username},function(obj){
		if(obj.code === 0){
			//成功后
			$(".success").show();
			$(".error").hide();
		}else if(obj.code === 2001){
			//失败后
			$(".error").show();
			$(".success").hide();
		};
	});
});

//验证密码，增加难易度检测。
$('#first').blur(function(){
	var password=$(this).val();
	if(password.length<6||password.length>20){
		alert("密码要在6-20位以内，请重新输入");
		$(this).val("");
	}else if(password.length>=6&&password.length<8){
		$("#green").css({background:"none"})
		$("#blue").css({background:"none"})
	}else if(password.length>=8&&password.length<12){
		$("#green").css({background:"green"})
	}else if(password.length>=12){
		$("#green").css({background:"green"})		
		$("#blue").css({background:"blue"})
	}
})

$("#second").blur(function(){
	var password1=$(this).val();
	if(password1==$('#first').val()){
		$(".error1").hide();
	}else{
		$(".error1").show();
	}
})
$("#reg").click(function(){
	if($(".success").show()&&$('#first').val().length>=6&&$('#first').val().length<=20&&$("#second").val()==$("#first").val()){
		if(icode){
			$.post("http://h6.duchengjiu.top/shop/api_user.php",{"status": "register","username":$('input[name="username"]').val(),"password":$("#first").val()},function(obj){
				if(obj.code===0){
					var oDiv=document.createElement("div");
					$(oDiv).css({position:"fixed",zIndex:"100",top:"40%",left:"40%",width:"200px",height:"100px",background:"rgba(200,0,0,0.8)",color:"white",textAlign:"center",font:"24px/80px arial",borderRadius:"8px"});	
					$(oDiv).text("注册成功！")
					document.body.appendChild(oDiv);
					$(oDiv).animate({"opacity":"0"},1000,"linear");
					setTimeout(function(){
						document.body.removeChild(oDiv);			
					},1000)
					setTimeout(function(){
						window.location.href="login.html";
					},1500)
				}
			})
		}else{
			alert("请输入正确的验证码");
		}
	}else{
		alert("输入信息有误，请按照提示注册！")
	}
})