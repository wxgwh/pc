$(".wheel-cont").hover(function(){
    $(".wheeltitle").css("color","red");
},function(){
    $(".wheeltitle").css("color","#333333");
})

var n=0;
var btns=document.querySelectorAll(".wheel-cont .wheelbtns li");
setInterval(function(){
    n++;
    if(n>btns.length-1){
        $(".wheel-box").animate({marginLeft:-(n*282)+"px"},"slow",function(){
            $(".wheel-box").css("marginLeft","0")
        })
        n=0;
    }else{
        $(".wheel-box").animate({marginLeft:-(n*282)+"px"},"slow");
    }
    for(let i=0;i<btns.length;i++){
        btns[i].style.background="#cccccc";
    }
    btns[n].style.background="green";
},5000)
//手动
for(let i=0;i<btns.length;i++){
    btns[i].onclick=function(){
        n=i;
        $(".wheel-box").animate({marginLeft:-(n*282)+"px"},"slow");
        for(var j=0;j<item1btns.length;j++){
            btns[j].style.background="#cccccc";
        }
        btns[n].style.background="green";
    }
}