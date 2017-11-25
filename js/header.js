
$("#order").click(function(){
    if(localStorage.getItem("token")){
        window.location.href="order.html"
    }else{
        alert("请先登录");
        window.location.href="login.html"
    }
});


if(localStorage.getItem("token")){
    $("#user").html(localStorage.username+",<button id='clr'>取消登录</button>");
    $("#user").css({"color":"goldenrod"})
    $("#clr").click(function(){
        localStorage.clear();
        $("#user").get(0).href="header.html";
        window.location.href="header.html";
    })
    $("#zhuce").hide();
    $("#tRight .shu").hide();
    $.post("http://h6.duchengjiu.top/shop/api_order.php?token="+localStorage.token,function(obj){
        if(obj.code===0){
            var number=obj.data.length;
            $("#order").text("我的订单（"+number+"）")
        }
    })
}else{
    $("#order").text("我的订单")        
}

//购物车
if(localStorage.token){
    $.post("http://h6.duchengjiu.top/shop/api_cart.php?token="+localStorage.token,function(obj){
        if(obj.code===0){
            $("#cart span span").text(obj.data.length)
            for(var i=0;i<obj.data.length;i++){
                $("#cartbox").append('<a href="detail.html?goods_id='+obj.data[i].goods_id+'"><li><img src='+obj.data[i].goods_thumb+'"><p>'+ obj.data[i].goods_name +'</p></li></a>');
            }
        }else{
            $("#cart span span").text("0");
        }
    })
}else{
    $("#cart span span").text("0")
}

window.onresize=setSize;
function setSize(){
    var windowWidth=document.documentElement.clientWidth;
    if(windowWidth<660){
        $("#tel").hide();
        $("#tLeft .shu").hide();
        $("#tLeft .tel").hide();
        $("#tLeft").css({width:"95px"})
    }else{
        $("#tel").show();
        $("#tLeft .shu").show();
        $("#tLeft .tel").show();
        $("#tLeft").css({width:"300px"})
    }
    if(windowWidth<768){
        $(".nav-toggle").show();
    }else{
        $(".nav-toggle").hide();
        
    }
}
setSize();


//搜索
$("#searchBtn").click(function(){
    var str=$("#search").val();
    window.location.href="search.html?goods_id="+str;
})

$.post("http://h6.duchengjiu.top/shop/api_cat.php",function(obj){
    if(obj.code===0){
        for(i=0;i<obj.data.length;i++){
            var oLi=document.createElement("li");
            oLi.innerHTML="<a href='list.html?cat_id="+obj.data[i].cat_id+"'>"+obj.data[i].cat_name+"</a>"
            $(".nav-pills").append(oLi);
        }
    }

})
$("#cart").click(function(){
    if(localStorage.getItem("token")){
        window.location.href="cart.html"
    }else{
        alert("请先登录");
        window.location.href="login.html"
    }
    
})



