if(localStorage.getItem("username")!=""&&localStorage.getItem("password")!=""){
    $.post("http://h6.duchengjiu.top/shop/api_user.php",{status:"login",username:localStorage.getItem("username"),password:localStorage.getItem("password")},function(obj1){
        $.post("http://h6.duchengjiu.top/shop/api_cart.php?token="+obj1.data.token,function(obj){
            if(obj.code==0){
                var oUl=document.createElement("ul");
                var priceArr=[]; //每个商品小计数组
                var inputArr=[];//每个商品选中框。
                var aa=[];//因为每个商品有不同的购买数量和单价，所以防止for循环异步事件绑定问题，申明几个数组来储存这些数据。

                $("#goods").append(oUl);//添加ul；

                for(i=0;i<obj.data.length;i++){
                    (function(){
                        var id=obj.data[i].goods_id;
                        var oLi=document.createElement("li");
                        var oImg=document.createElement("img");
                        var oInput=document.createElement("input");
                        $(oInput).css({position:"absolute",top:"0px",left:"20px"})
                        oInput.type="checkbox";
                        oInput.name="goods";//让每个复选框name统一，便于后面全选。
                        oImg.src=obj.data[i].goods_thumb;
                        $(oLi).append(oInput);
                        $(oLi).append(oImg);
                        $(oUl).append(oLi);
                        inputArr[i]=oInput;
    
                        var detail=document.createElement("div");
                        $(detail).css({width:"300px",height:"100%",fontSize:"13px",color:"#999",marginLeft:"20px"});
                        detail.innerText=obj.data[i].goods_name;
                        $(oLi).append(detail);//添加各商品详情。
    
                        var shuliang=document.createElement("div");
                        $(shuliang).css({color:"#444",marginLeft:"60px"});                    
                        var plus=document.createElement("span");
                        plus.innerText="+";//设置加号。

                        var shu=document.createElement("span");
                        aa[i]=shu;//将购买数量分别储存起来。
                        var number=obj.data[i].goods_number;
                        shu.innerText=number;

                        var min=document.createElement("span");
                        min.innerText="-";//设置减号。
                        $(shuliang).append(min);
                        $(shuliang).append(shu);
                        $(shuliang).append(plus);
                        $(oLi).append(shuliang);

                        var price=document.createElement("span");
                        $(price).css({marginLeft:"90px",display:"inline-block",width:"80px"})
                        price.innerText=obj.data[i].goods_price;
                        $(oLi).append(price);//添加每个商品的单价。

                        var tPrice=document.createElement("span");//tPrice代表每行的小计
                        $(tPrice).css({marginLeft:"70px",display:"inline-block",width:"80px"})
                        tPrice.innerText=parseInt(obj.data[i].goods_price*number).toFixed(2);//计算商品小计
                        $(oLi).append(tPrice);
                        priceArr[i]=tPrice.innerText;//将每个商品小计添加到数组里面。
                        
                        var del=document.createElement("span");//删除键的设置及排版
                        del.innerText="删除";
                        $(del).css({color:"skyBlue",cursor:"pointer",marginLeft:"70px"})
                        $(oLi).append(del);
                        $(del).click(function(){
                            $.post("http://h6.duchengjiu.top/shop/api_cart.php?token="+obj1.data.token,{goods_id:id,number:"0"},function(){
                                $(oLi).hide();
                            })
                        })//远程删除购物车里面所选商品。

                        var totalPrice=0;//总价格,它的值赋予$("#price"),初始值为0；
                        //下面要计算总价，要先清楚让总价变化的只有两种：加减号和勾选框。
                        $(plus).click(function(){
                            totalPrice=0;//每次点击，让总价为0；
                            number= parseInt(number)+1;
                            shu.innerText=number;
                            tPrice.innerText=parseInt(price.innerText*number).toFixed(2);//更新购买数量。
                            for(n=0;n<inputArr.length;n++){
                                if(inputArr[n].checked){
                                    priceArr[n]=parseInt(obj.data[n].goods_price*aa[n].innerText).toFixed(2);//判断某个商品是否勾选，如果勾选了就让这个商品的小计等于单价乘各自的数量。
                                }else{
                                    priceArr[n]="0";//如果没有勾选，就让此小计为0，这边的小计是放到总计计算的数组里面的，页面显示的字面量还是单价*数量。
                                }
                            }
                            console.log(priceArr);
                            if(oInput.checked){
                                for(m=0;m<priceArr.length;m++){                                    
                                    totalPrice+=parseInt(priceArr[m]);
                                }                                   
                                $("#price").text(totalPrice); //如果目前的商品是勾选状态，就遍历所有商品的小计，累加到商品总价中；如果没有勾选，它的改变不对总价造成影响。                      
                            } 
                        })

                        //减号同理
                        $(min).click(function(){
                            totalPrice=0;                            
                            number= parseInt(number)-1;
                            if(number<1){
                                number=1;
                            }
                            shu.innerText=number;
                            tPrice.innerText=parseInt(price.innerText*number).toFixed(2);
                            for(n=0;n<inputArr.length;n++){
                                if(inputArr[n].checked){
                                    priceArr[n]=priceArr[n]=parseInt(obj.data[n].goods_price*aa[n].innerText).toFixed(2);
                                }else{
                                    priceArr[n]="0";
                                }
                            };
                        
                            if(oInput.checked){

                                for(m=0;m<priceArr.length;m++){                                    
                                    totalPrice+=parseInt(priceArr[m]);
                                }                                   
                                $("#price").text(totalPrice);                       
                            }
                        })

                        //这边是勾选框的操作
                        $(oInput).click(function(){
                            if(oInput.checked){
                                totalPrice=parseInt($("#price").text())+parseInt(tPrice.innerText);//如果选中，则添加到总价里面
                            }else{                           
                                totalPrice=parseInt($("#price").text())-parseInt(tPrice.innerText);//如果取消选中，则添加到总价里面。
                            }
                            $("#price").text(totalPrice);//更新总价                            
                        })
                    })(i);


                    //下面是全选功能。
                    $("#total").click(function(){
                        var cBox=document.getElementsByName("goods");
                        if($("#total").is(":checked")){
                            totalPrice=0;
                            for(j=0;j<cBox.length;j++){
                                cBox[j].checked=true;
                                totalPrice+=parseInt(priceArr[j]);//如果选中，就遍历加上所有商品的小计。
                                $("#price").text(totalPrice);
                            }
                        }else{
                            for(j=0;j<cBox.length;j++){
                                cBox[j].checked=false;
                                $("#price").text("0.00")//如果取消全选，就让总价为0；
                            }
                        }
                    })
                    $("#liji").click(function(){
                        localStorage.setItem("money",$("#price").text());//转到结算页面
                    })

                }


            }

        })
    })
}