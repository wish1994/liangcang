window.onload=function(){

    /*banner*/
    var x=$("#Banner ul li").innerWidth();
    var index=0;
    var timer=setInterval(move,3000)
    function move(){
      index++;
      $("#Banner #img").animate({"left":-index*x},300,function(){
            if(index>=5){
                $("#Banner #img").css({left:0})
                index=0;
            }
            $("#bLine li").removeClass("current");
            $("#bLine li").eq(index).addClass("current");
      });
    }
    $("#bLine li").click(function(){
        clearInterval(timer);
        $("#Banner #img").animate({left:-$(this).index()*x});
        index=$(this).index();
        console.log(index)
        $("#bLine li").removeClass("current");
        $("#bLine li").eq(index).addClass("current");
        timer=setInterval(move,3000);
    })
    $("#Banner").mouseover(function(){
        $("#LeftBtn").show();
        $("#RightBtn").show();
    })
    $("#Banner").mouseout(function(){
        $("#LeftBtn").hide();
        $("#RightBtn").hide();
    })
    $(".bannerBtn").hover(function(){
        $(".bannerBtn").css({backgroundColor:"rgba(0,0,0,0.6)"});
    })
    $(".bannerBtn").mouseout(function(){
        $(".bannerBtn").css({backgroundColor:""});
    })
    $("#LeftBtn").click(function(){
        clearInterval(timer);
        index--;
        if(index<0){
            index=5+index;
        }
        $("#Banner #img").animate({"left":-index*x},300,function(){
            if(index>=5){
                $("#Banner #img").css({left:0})
                index=0;
            }
            $("#bLine li").removeClass("current");
            $("#bLine li").eq(index).addClass("current");
        });
        timer=setInterval(move,3000)
    })
    $("#RightBtn").click(function(){
        clearInterval(timer);
        index++;
        $("#Banner #img").animate({"left":-index*x},300,function(){
            if(index>=5||index<0){
                $("#Banner #img").css({left:0})
                index=0;
            }
            $("#bLine li").removeClass("current");
            $("#bLine li").eq(index).addClass("current");
        });
        timer=setInterval(move,3000)
    })
    
    /*商品获取并陈列*/
    $.get("http://h6.duchengjiu.top/shop/api_goods.php",{pagesize:18,page:3},function(obj){
        var brandArr=["Burj Al-Arab","Rolex","Chanel","Tiffany","Louis Vuitton","Hennessy","Ralph Lauren"]
        var oUl=document.createElement("ul");
        $("#GoodShow").append(oUl);
        for(i=0;i<obj.data.length;i++){
            (function(){
                var oA=document.createElement("a");
                oA.href="";
                var oLi=document.createElement("li");
                var oImg=document.createElement("img");
                oImg.src=obj.data[i].goods_thumb;
                oLi.appendChild(oImg);
                oUl.appendChild(oA);
                oA.appendChild(oLi);
                if((i+1)%3==0){
                    $(oLi).css({marginRight:0});
                };
                //下面是每张图的详情介绍。
                var Price=obj.data[i].price;
                var oBox=document.createElement("div");
                $(oBox).addClass("text");
    
                var oH3=document.createElement("h3");
                oH3.innerText="￥"+Price;
                $(oBox).append(oH3);
                $(oLi).append(oBox);
    
                var name=obj.data[i].goods_name;
                var oH4=document.createElement("h4");
                oH4.innerText=name;
                $(oBox).append(oH4);
    
                var desc=obj.data[i].goods_desc;
                var oDesc=document.createElement("div");
                oDesc.innerText=desc;
                $(oBox).append(oDesc);
                $(oBox).mousemove(function(){
                    $(oBox).css({"opacity":1});
                })
                $(oBox).mouseout(function(){
                    $(oBox).css({opacity:0});
                })
    
                //加上商家信息，随机数。
                var oBrand=document.createElement("div");
                $(oBrand).addClass("who");
                oLi.appendChild(oBrand);
                var Bimg=document.createElement("img");
                $(Bimg).addClass("Bimg");
                var Bspan=document.createElement("span");
                var z=parseInt(Math.random()*7);
                Bspan.innerText=brandArr[z];
                var x=parseInt(Math.random()*300+500);
                var y=parseInt(Math.random()*300+300);
                Bimg.src="http://imgs-qn.iliangcang.com/ware/brand/"+x+".jpg";
                oBrand.appendChild(Bimg);
                oBrand.appendChild(Bspan);
    
                var oStar=document.createElement("div");
                $(oStar).addClass("star")
                var Simg=document.createElement("img");
                var Stext=document.createElement("div");
                Stext.innerText=y;
                $(Simg).addClass("Simg");
                Simg.src="http://imgs-qn.iliangcang.com/images/default/heart_gray20_18.png";
                $(oStar).append(Simg);
                $(oStar).append(Stext);            
                oBrand.appendChild(oStar);
    
            })(i);
        }
    })
}




