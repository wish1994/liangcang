window.onload = function(){
    var url = "http://h6.duchengjiu.top/shop/api_goods.php";

    var search_text = localStorage.getItem("search");

    $.get(url,
        {
            "search_text":search_text,
            "pagesize":12,
            "page":parseInt(Math.random()*10)
        },
        function(obj){
                var oDiv = document.getElementById("main");
                for(var i = 0; i < obj.data.length; i++){
                    var oImg = document.createElement("img");
                    var oBox = document.createElement("div");
                    var oP = document.createElement("p");
                    $(oBox).css({
                        "width":"250px",
                        "height":"250px",
                        "margin-top":"20px",
                        "margin-right":"50px",
                        "float":"left",
                        "position":"relative"
                    });
                    $(oImg).css({
                        "width":"220px",
                        "height":"220px"
                    });

                    oImg.src = obj.data[i].goods_thumb;
                    $(oP).html(obj.data[i].goods_name);


                    oBox.appendChild(oImg);
                    oBox.appendChild(oP);
                    oDiv.appendChild(oBox);
                }
            
        }
    )
}