if(localStorage.getItem("username")!=""&&localStorage.getItem("password")!=""){
    $.post("http://h6.duchengjiu.top/shop/api_user.php",{status:"login",username:localStorage.getItem("username"),password:localStorage.getItem("password")},function(obj1){
        $.post("http://h6.duchengjiu.top/shop/api_cart.php?token="+obj1.data.token,function(obj){
            if(obj.code==0){
                var oUl=document.createElement("ul");
                var priceArr=[];
                var inputArr=[];
                var aa=[];
                $("#goods").append(oUl);
                for(i=0;i<obj.data.length;i++){
                    (function(){
                        var id=obj.data[i].goods_id;
                        var oLi=document.createElement("li");
                        var oImg=document.createElement("img");
                        var oInput=document.createElement("input");
                        $(oInput).css({position:"absolute",top:"0px",left:"20px"})
                        oInput.type="checkbox";
                        oInput.name="goods";
                        oImg.src=obj.data[i].goods_thumb;
                        $(oLi).append(oInput);
                        $(oLi).append(oImg);
                        $(oUl).append(oLi);
                        inputArr[i]=oInput;
    
                        var detail=document.createElement("div");
                        $(detail).css({width:"300px",height:"100%",fontSize:"13px",color:"#999",marginLeft:"20px"});
                        detail.innerText=obj.data[i].goods_name;
                        $(oLi).append(detail);
    
                        var shuliang=document.createElement("div");
                        $(shuliang).css({color:"#444",marginLeft:"60px"});                    
                        var plus=document.createElement("span");
                        plus.innerText="+";
                        var shu=document.createElement("span");
                        aa[i]=shu;
                        var number=obj.data[i].goods_number;
                        shu.innerText=number;
                        var min=document.createElement("span");
                        min.innerText="-";
                        $(shuliang).append(min);
                        $(shuliang).append(shu);
                        $(shuliang).append(plus);
                        $(oLi).append(shuliang);

                        var price=document.createElement("span");
                        $(price).css({marginLeft:"90px",display:"inline-block",width:"80px"})
                        price.innerText=obj.data[i].goods_price;
                        $(oLi).append(price);

                        var tPrice=document.createElement("span");
                        $(tPrice).css({marginLeft:"70px",display:"inline-block",width:"80px"})
                        tPrice.innerText=parseInt(obj.data[i].goods_price*number).toFixed(2);
                        $(oLi).append(tPrice);
                        priceArr[i]=tPrice.innerText;
                        
                        var del=document.createElement("span");
                        del.innerText="删除";
                        $(del).css({color:"skyBlue",cursor:"pointer",marginLeft:"70px"})
                        $(oLi).append(del);
                        $(del).click(function(){
                            $.post("http://h6.duchengjiu.top/shop/api_cart.php?token="+obj1.data.token,{goods_id:id,number:"0"},function(){
                                $(oLi).hide();
                            })
                        })
                        var totalPrice=0;
                        $(plus).click(function(){
                            totalPrice=0;
                            number= parseInt(number)+1;
                            shu.innerText=number;
                            tPrice.innerText=parseInt(price.innerText*number).toFixed(2);
                            console.log(price.innerText);
                            console.log(aa);
                            for(n=0;n<inputArr.length;n++){
                                if(inputArr[n].checked){
                                    priceArr[n]=parseInt(obj.data[n].goods_price*aa[n].innerText).toFixed(2);
                                }else{
                                    priceArr[n]="0";
                                }
                            }
                            console.log(priceArr);
                            if(oInput.checked){
                                for(m=0;m<priceArr.length;m++){                                    
                                    totalPrice+=parseInt(priceArr[m]);
                                }                                   
                                $("#price").text(totalPrice);                       
                            } 
                        })

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

                        $(oInput).click(function(){
                            if(oInput.checked){
                                totalPrice=parseInt($("#price").text())+parseInt(tPrice.innerText);
                            }else{                           
                                totalPrice=parseInt($("#price").text())-parseInt(tPrice.innerText);
                            }
                            $("#price").text(totalPrice);                            
                        })
                    })(i);

                    $("#total").click(function(){
                        var cBox=document.getElementsByName("goods");
                        if($("#total").is(":checked")){
                            totalPrice=0;
                            for(j=0;j<cBox.length;j++){
                                cBox[j].checked=true;
                                totalPrice+=parseInt(priceArr[j]);
                                $("#price").text(totalPrice);
                            }
                        }else{
                            for(j=0;j<cBox.length;j++){
                                cBox[j].checked=false;
                                $("#price").text("0.00")
                            }
                        }
                    })

                }


            }

        })
    })
}