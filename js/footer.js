$(".toTop").click(function(){
    var sTop=document.documentElement.scrollTop;
    $(document.documentElement).animate({scrollTop:0},sTop*5/4)
})
window.onresize=function(){
    var windowWidth=document.documentElement.clientWidth;
    if(windowWidth<474){
        $("fooetr #address").hide();
    }else{
        $("footer #address").show();
    }
    if(windowWidth<340){
        window.resizeTo(340,600);
    }
}