
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