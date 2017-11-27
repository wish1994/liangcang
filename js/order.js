var orderT=[];
$.ajax({
	"type": "GET",
	"url": "http://h6.duchengjiu.top/shop/api_order.php?token=" + localStorage.token,
	"dataType": "json",
	"success": function (response) {
		var html ="";
		if (response.data.length > 0) {
			for (var i = 0; i < response.data.length; i++) {
				orderT[i]=0;
				var obj = response.data[i];
				for(var j=0;j<obj.goods_list.length;j++){					
					var goods = obj.goods_list[j]; 
					goods.orderT=0; 
					
					goods.subtotal = goods.goods_number * goods.goods_price;
					
					html += '<div class="row" style="border-bottom:1px solid #ddd;margin-bottom:10px;"><div class="col-md-2 col-sm-2"><a href="detail.html?goods_id='+goods.goods_id+'"><img src="'+ goods.goods_thumb 
							+'"></a></div><div class="col-md-4 col-sm-4"><span>商品名称：' + goods.goods_name 
							+ '</span></div><div class="col-md-2 col-sm-2"><span>商品数量：' + goods.goods_number 
							+ '</span></div><div class="col-md-2 col-sm-2"><span>商品单价：' + goods.goods_price 
							+ '</span></div><div class="col-md-2 col-sm-2"><span>商品金额：' + goods.subtotal 
							+ '</span></div></div>';
					orderT[i]+=goods.subtotal;
				}
				html += '<div>';
				html += '<div style="margin-bottom:50px"><input type="checkbox" name="orders"><span>订单号：' + obj.order_id +'</span><span style="margin-left:40px;color:red">订单总额：'+orderT[i]+'元</span></div></div>';
			}
			$(".table tbody").html(html);			
		};
		$("input[name='orders']").click(function(){
			changePrice();                	
		});  
	}
});	

$("input[name='selectAll']").click(function () {
	var checked = $(this).prop("checked");
	$("input[name='orders']").each(function () {
		$(this).prop("checked", checked);
	})
	changePrice();                
})
function changePrice(){
	var totalPrice=0;
	for(i=0;i<$("input[name='orders']").length;i++){
		if($("input[name='orders'").eq(i).is(":checked")){
			totalPrice+=orderT[i];
		}
	}
	$("#orderPri").text(totalPrice);	
} 


$("#pay").click(function(){
	alert("您已支付"+$("#orderPri").text()+"元！")
});