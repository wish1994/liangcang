var Angle = document.querySelector(".angle");
var Price = document.querySelector(".price");
var Select = document.querySelector(".select-price");
var Li = Select.getElementsByTagName("li");
var Text = Price.querySelector(".text");

Text.onmouseover = function(){
    Select.style.display = "block";
}
Angle.onmouseover = function(){
    Select.style.display = "block";    
}
for( i = 0; i < Li.length; i++ ){
    Li[i].onmouseover = function(){
        for( i = 0; i < Li.length; i++ ){
            Li[i].style.backgroundColor = "#fff";
            Li[i].style.color = "#000";
        }
        this.style.color = "#fff";
        this.style.backgroundColor = "#000";
        this.onmouseout = function(){
            Select.style.display = "none";
        }
    }
};
Text.onmouseout = function(){
    Select.style.display = "none";
}

// 获取产品 并展示 
// 获取页面的展示产品的容器
var List1 = document.querySelector("#ShopList1");
var List2 = document.querySelector("#ShopList2");
var List3 = document.querySelector("#ShopList3");
var List4 = document.querySelector("#ShopList4");
var List5 = document.querySelector("#ShopList5");

// 获取页面的图片标签
var Img1 = List1.getElementsByTagName("img");
var Img2 = List2.getElementsByTagName("img");
var Img3 = List3.getElementsByTagName("img");
var Img4 = List4.getElementsByTagName("img");
var Img5 = List5.getElementsByTagName("img");
// 接口
var url = "http://h6.duchengjiu.top/shop/api_goods.php";

// 第一组五张图片
$.get(url,{"page":5,"pagesize":5},function(str){
    console.log(str.data)
    for( i = 0; i < Img1.length; i++ ){
        Img1[i].src = str.data[i]["goods_thumb"];
    }
});
// 第二组五张图片
$.get(url,{"page":6,"pagesize":"5"},function(str){
    for( i = 0 ; i < Img2.length; i++ ){
        Img2[i].src = str.data[i]['goods_thumb'];
    }
});
// 第三组五张图片
$.get(url,{"page":7,"pagesize":5},function(str){
    console.log(str.data)
    for( i = 0; i < Img3.length; i++ ){
        Img3[i].src = str.data[i]["goods_thumb"];
    }
});
// 第四组五张图片
$.get(url,{"page":8,"pagesize":5},function(str){
    console.log(str.data)
    for( i = 0; i < Img4.length; i++ ){
        Img4[i].src = str.data[i]["goods_thumb"];
    }
});
// 第五组五张图片
$.get(url,{"page":9,"pagesize":5},function(str){
    console.log(str.data)
    for( i = 0; i < Img5.length; i++ ){
        Img5[i].src = str.data[i]["goods_thumb"];
    }
});
