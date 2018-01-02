var url = "http://h6.duchengjiu.top/shop/api_goods.php";
var GoodList = document.getElementById(".GoodsList");

$.get(url,{"page":"10","pagesize":"80"},function(str){

    for( i = 0; i < 20; i++ ){

        // 整个资料框
        var Div1 = document.createElement("div");
        // 详细资料框
        var Div2 = document.createElement("div"); 
        // 资料狂里面图片右侧的资料
        var Div3 = document.createElement("div");
        // 资料框里的图片
        var Img = document.createElement("img");
        // 右侧的三个图片框
        var box1 = document.createElement("div");
        var box2 = document.createElement("div");
        var box3 = document.createElement("div");      
        // console.log(div1);
        // 右侧的三个图片
        var img1 = document.createElement("img");
        var img2 = document.createElement("img");
        var img3 = document.createElement("img");
        
        Div1.className = "item";
        Div2.className = "goodslist";    
        Div3.className = "msg";

        Div3.innerHTML = str.data[i]["goods_desc"];

        // 右侧 三张图片
        img1.className = "goodsImg";
        img2.className = "goodsImg";
        img3.className = "goodsImg";
        
        //  右侧的每张图片的框架
        box1.className = "goods1";
        box2.className = "goods2";
        box3.className = "goods3";      
        
        var til1 = document.createElement("div");
        var til2 = document.createElement("div");
        var til3 = document.createElement("div");
        
        var Span1 = document.createElement("span");
        var Span2 = document.createElement("span");
        var Span3 = document.createElement("span");        

        // 图片上方的标题  
        til1.className = "title";
        til2.className = "title";
        til3.className = "title";

        Span1.className = "text";
        Span2.className = "text";
        Span3.className = "text";        

        Span1.innerHTML = str.data[i]["goods_desc"];
        Span2.innerHTML = str.data[i]["goods_desc"];
        Span3.innerHTML = str.data[i]["goods_desc"];
        
        var imglogo1 = document.createElement("img");
        var imglogo2 = document.createElement("img");
        var imglogo3 = document.createElement("img");

        imglogo1.className = "logoImg";
        imglogo2.className = "logoImg";
        imglogo3.className = "logoImg";

        var A = document.createElement("a");
        Img.src = str.data[i]['goods_thumb'];
        
        A.appendChild(Img);
        Div1.appendChild(A);
        Div1.appendChild(Div3);
        
        img1.src = str.data[i]["goods_thumb"];
        img2.src = str.data[i]["goods_thumb"];
        img3.src = str.data[i]["goods_thumb"]; 

        var P1 = document.createElement("p");
        var P2 = document.createElement("p");
        var P3 = document.createElement("p");        

        var P4 = document.createElement("p");
        var P5 = document.createElement("p");
        var P6 = document.createElement("p");
        P4.className = "content";
        P5.className = "content";
        P6.className = "content";        
        
        var bind1 = document.createElement("div");
        var bind2 = document.createElement("div");
        var bind3 = document.createElement("div");  

        bind1.className = "bind";
        bind2.className = "bind";
        bind3.className = "bind";
        
        
        box1.appendChild(imglogo1);     
        box2.appendChild(imglogo2);        
        box3.appendChild(imglogo3);   
        
        imglogo1.src = str.data[i]["goods_thumb"];
        imglogo2.src = str.data[i]["goods_thumb"];
        imglogo3.src = str.data[i]["goods_thumb"]; 
        
        til1.appendChild(Span1);
        til2.appendChild(Span2);
        til3.appendChild(Span3);
        
        box1.appendChild(til1);     
        box2.appendChild(til2);        
        box3.appendChild(til3);        
        
        // 右侧三张图片添加到box
        box1.appendChild(img1);
        box2.appendChild(img2);
        box3.appendChild(img3);   
        
        
        Div2.appendChild(box1);
        Div2.appendChild(box2);
        Div2.appendChild(box3);
        

        
        P1.innerHTML = "￥1380.00";
        P2.innerHTML = "￥172.00";
        P3.innerHTML = "￥52.00";    
        
        P4.innerHTML = "圆顶礼帽";
        P5.innerHTML = "hi-lite";
        P6.innerHTML = "东野";  
        
        
        bind1.appendChild(P1);
        bind2.appendChild(P2);
        bind3.appendChild(P3);        
        bind1.appendChild(P4);
        bind2.appendChild(P5);
        bind3.appendChild(P6);

        box1.appendChild(bind1);
        box2.appendChild(bind2);
        box3.appendChild(bind3);

        GoodsList.appendChild(Div1);
        GoodsList.appendChild(Div2);   
    }
});

var First = document.querySelector(".first");
var Paper = document.querySelector(".paper");
var Pnumber = Paper.getElementsByTagName("p");

for( i = 0; i < Pnumber.length; i++ ){
    Pnumber[i].onmouseover = function(){
        Pnumber[i].style.backgroundColor = "#fff";
        Pnumber[i].style.color = "#4F4F4F";
    }
    
}
