
// $.get("http://h6.duchengjiu.top/shop/api_cat.php",function(response){
                
//                 var obj = response;
                
//                 for(var i=0;i<obj.data.length;i++){
                    
//                     $("#listUl").append('<li><a href="list.html?cat_id='+obj.data[i].cat_id+'">' + obj.data[i].cat_name + '</a></li>');
                    
//                 }
//             })
            
//             $.ajax({
//                 "url": "http://h6.duchengjiu.top/shop/api_cart.php?token="+localStorage.getItem("token"),
//                 "type": "GET",
//                 "dataType": "json",
//                 "success": function(response){
//                     console.log(response);
                    
//                     for(var i=0;i<response.data.length;i++){
//                         $("#cartList").append('<li><img src="'+response.data[i].goods_thumb+'"><p>'+ response.data[i].goods_name +'</p></li>');
//                     }
                    
//                     console.log(response.data.length);
//                     var num = response.data.length;
//                     $("#cartNav").text("购物车("+num+")");
//                 }
//             });
//             $.ajax({
//                 "url": "http://h6.duchengjiu.top/shop/api_goods.php?token="+localStorage.getItem("token"),
//                 "type": "GET",
//                 "dataType": "json",
//                 "success": function(response){              
//                     var html='';
//                     for(var i=0;i<response.data.length;i++){
//                         var obj = response.data[i]
//                         html +=  `<div class="col-sm-6 col-md-4 col-lg-3">
//                                   <div class="thumbnail">
//                                   <img src="${obj.goods_thumb}" alt="...">
//                                   <div class="caption">
//                                     <h3>商品名称:${obj.goods_name}</h3>
//                                     <p>简介:${obj.goods_desc}</p>
//                                     <p>金额:${obj.price}</p>
//                                   </div>
//                                   </div>
//                                 </div>`
//                     }
//                     $("#goodsList").html(html);
//                 }
//             });

$("#order").click(function(){
    if(localStorage.getItem("token")){
        window.location.href="order.html"
    }else{
        alert("请先登录");
        window.location.href="login.html"
    }
});
window.onload=function(){
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
}
window.onresize=function(){
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
}