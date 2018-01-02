$(document).ready(function(){
    $("#header").load("header.html")
})  

var oLi = document.getElementsByTagName("li");

for(var i = 1; i < oLi.length - 1; i++){
    var x = 104;
    (function(i){
        oLi[i].onmouseover = function(){
            $("#tp-line").css({"width":"40px","left":x+(i-1)*80+"px"});
        };
        oLi[i].onmouseout = function(){
            $("#tp-line").css({"width":"64px","left":0});
        };
    })(i)

}

var url = "http://h6.duchengjiu.top/shop/api_goods.php";

$.get(url,{pagesize:24,page:6},function(obj){
    var oImg = document.getElementsByTagName("img");
    for(var i = 0; i <　obj.data.length; i++){
        (function(i){
            oImg[i].src = obj.data[i].goods_thumb;
            $("#main .tp-container .xp20 a").get(i).innerHTML = obj.data[i].goods_name;
        })(i)
    }
    for(var i = 0; i <　obj.data.length/3; i++){
        (function(i){
            $("#main .tp-container .xp10 a").get(i).innerHTML = "趣物";
        })(i)
    }
    for(var i = 8; i <　obj.data.length/2+4; i++){
        (function(i){
            $("#main .tp-container .xp10 a").get(i).innerHTML = "时尚";
        })(i)
    }
    for(var i = 16; i <　obj.data.length; i++){
        (function(i){
            $("#main .tp-container .xp10 a").get(i).innerHTML = "空间";
        })(i)
    }
})

