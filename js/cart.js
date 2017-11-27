$(function () {  
        $.ajax({
            "type": "GET",
            "url": "http://h6.duchengjiu.top/shop/api_cart.php?token=" + localStorage.token,
            "dataType": "json",
            "success": function (response) {
                // console.log(response);
                // 判断购物车有没有商品
                var html = null;
                if (response.data.length > 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        var obj = response.data[i];
                        html += `<tr>
                                    <td>
                                        <input type="checkbox" class="goodscheck">
                                        <input type="hidden" class="goods_id" value=" ${ obj.goods_id } "/>
                                    </td>
                                    <td class="simple">
                                        <img src="${obj.goods_thumb}" alt="">
                                        <span>${obj.goods_name}</span>
                                    </td>
                                    <td><strong>
                                        <span class="goodsPri">${obj.goods_price}</span>
                                    </strong></td>
                                    <td>
                                        <input type="button" class="leftbtn" value="-">
                                        <input type="text" name="goodsnum" class="goodsnum" value=${obj.goods_number}>
                                        <input type="button"class="rightbtn" value="+">
                                    </td>
                                    <td>
                                        <span class="sumPrice"> ${obj.goods_price*obj.goods_number} </span>
                                    </td>
                                    <td>
                                        <span class="delete">&times;</span>
                                    </td>
                                </tr>`;
                    }
                    $(".table.table-striped tbody").html(html);
                }
    
                // 价格变动
                function changePrice() {
                    var total = 0;
                    $(".sumPrice").each(function () {
                        if ($(this).parent().parent().find(".goodscheck").prop("checked")) {
                            total += 1 * $(this).text();
                        }
                    })
                    $(".subprice").text("￥" + total);
                    $(".total").text("￥" + total);
                }
                changePrice();
    
                // checkbox点击改变价格
                $(".goodscheck").click(function () {
                    changePrice();
                });
    
                // 数量增减
                $(".leftbtn").each(
                    function (i) {
                        var that = this;
                        $(this).click(function () {
                            updateCart(that, -1);
                        })
                    })
    
                $(".rightbtn").each(
                    function (i) {
                        var that = this;
                        $(this).click(function () {
                            updateCart(that, 1);
                        })
                    })
    
    
                function updateCart(that, x) {
                    var goodsNumVal = $(that).parent().find(".goodsnum").val();
                    goodsNumVal = +goodsNumVal + x;
    
                    if (goodsNumVal < 1) goodsNumVal = 1;
                    if (goodsNumVal > 10) goodsNumVal = 10;
    
                    $(that).parent().find(".goodsnum").val(goodsNumVal);
                    var goodsnum = $(that).parent().parent().find(".goodsPri").text() * 1;
                    $(that).parent().parent().find(".sumPrice").text(goodsNumVal * goodsnum);
                    changePrice();
                }
    
                function updataAjax(obj) {
                    // 更新ajax数据
                    var goods_id = obj.find(".goods_id").val();
                    $.ajax({
                        "url": "http://h6.duchengjiu.top/shop/api_cart.php?token=" + localStorage.token,
                        "type": "POST",
                        "dataType": "json",
                        "data": {
                            "goods_id": goods_id,
                            "number": 0,
                        },
                        "success": function (response) {
                        }
                    })
                }
                // 删除商品
                $(".delete").each(function () {
                    var that = this;
                    $(this).click(function () {
                        updataAjax($(that).parent().parent());
                        $(that).parent().parent().remove();
                        getCart();

                    })
                })
    
                // 删除选中项
                $(".delSelect").click(function () {
                    $(".goodscheck").each(function () {
                        var that = this;
                        if ($(that).prop("checked")) {
                            updataAjax($(that).parent().parent());
                            $(that).parent().parent().remove();
                            getCart();
                        };
                    })
                })
                // 全选
                $("input[name='selectAll']").click(function () {
                    var checked = $(this).prop("checked");
                    $(".goodscheck").each(function () {
                        $(this).prop("checked", checked);
                    })
                    changePrice();                
                })
    
    
                // 获取金额
                $(".after").click(function () {
                    var sum = $(".subprice").text();
                    location.href = "checkout.html?sum=" + sum.substr(1);
                })
            }
    
    
        })
        // 更新购物车
        function getCart(){
            $.ajax({
                "type": "GET",
                "url": "http://h6.duchengjiu.top/shop/api_cart.php?token=" + localStorage.token,
                "dataType": "json",
                "success": function (response) {
                    var carthtml="";
                    if(!!response.data.length){
                        
                        for(var i=0; i<response.data.length ;i++){
                        var obj = response.data[i];
                        carthtml +=`<div><img src="${obj.goods_thumb}" alt=""><span>${obj.goods_name}</span></div>`
                        }
                        $(".cart-num").text(response.data.length);
                        $(".cart-item").html(carthtml).css("padding","20px");
                    }
                }
            })
        }
    
    })