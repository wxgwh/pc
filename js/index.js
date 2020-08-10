$(".contral-hidden span").css("color","#333333")
$(".item1").mouseover(function(){
    $(".item1 .item-title span").css("color","#ff0000")
})
$(".item1").mouseout(function(){
    $(".item1 .item-title span").css("color","#000000")
})
$(".item2").mouseover(function(){
    $(".item2 .item-title span").css("color","#ff0000")
})
$(".item2").mouseout(function(){
    $(".item2 .item-title span").css("color","#000000")
})
$(".item3").mouseover(function(){
    $(".item3 .item-title span").css("color","#ff0000")
})
$(".item3").mouseout(function(){
    $(".item3 .item-title span").css("color","#000000")
})

var winW=$(window).width();
var num=0;
var btns=document.querySelectorAll(".btnslist li");
setInterval(function(){
    num++;
    if(num>btns.length-1){
        $(".imglist").animate({marginLeft:-(num*winW)+"px"},"slow",function(){
            $(".imglist").css("marginLeft","0")
        })
        num=0;
    }else{
        $(".imglist").animate({marginLeft:-(num*winW)+"px"},"slow");
    }
    for(let i=0;i<btns.length;i++){
        btns[i].style.background="#fff";
    }
    btns[num].style.background="green";
},5000)
//手动
for(let i=0;i<btns.length;i++){
    btns[i].onclick=function(){
        num=i;
        $(".imglist").animate({marginLeft:-(num*winW)+"px"},"slow");
        for(var j=0;j<btns.length;j++){
            btns[j].style.background="#fff";
        }
        btns[num].style.background="green";
    }
}


var n=0;
var item1btns=document.querySelectorAll(".item1btnslist li");
setInterval(function(){
    n++;
    if(n>item1btns.length-1){
        $(".case-item1-box").animate({marginLeft:-(n*792)+"px"},"slow",function(){
            $(".case-item1-box").css("marginLeft","0")
        })
        n=0;
    }else{
        $(".case-item1-box").animate({marginLeft:-(n*792)+"px"},"slow");
    }
    for(let i=0;i<item1btns.length;i++){
        item1btns[i].style.background="#cccccc";
    }
    item1btns[n].style.background="green";
},5000)
//手动
for(let i=0;i<item1btns.length;i++){
    item1btns[i].onclick=function(){
        n=i;
        $(".case-item1-box").animate({marginLeft:-(n*792)+"px"},"slow");
        for(var j=0;j<item1btns.length;j++){
            item1btns[j].style.background="#cccccc";
        }
        item1btns[n].style.background="green";
    }
}

$(".case-item1-box").hover(function(){
    $(".case-jieshao-title").css("color","red");
    $(".case-jieshao-link").css("width","250px");
},function(){
    $(".case-jieshao-title").css("color","#333333");
    $(".case-jieshao-link").css("width","50px");
})


var m=0;
var item2btns=document.querySelectorAll(".item2btnslist li");
setInterval(function(){
    m++;
    if(m>item2btns.length-1){
        $(".case-item2-box").animate({marginLeft:-(m*383)+"px"},"slow",function(){
            $(".case-item2-box").css("marginLeft","0")
        })
        m=0;
    }else{
        $(".case-item2-box").animate({marginLeft:-(m*383)+"px"},"slow");
    }
    for(let i=0;i<item2btns.length;i++){
        item2btns[i].style.background="#cccccc";
    }
    item2btns[m].style.background="green";
},5000)
//手动
for(let i=0;i<item2btns.length;i++){
    item2btns[i].onclick=function(){
        m=i;
        $(".case-item2-box").animate({marginLeft:-(m*383)+"px"},"slow");
        for(var j=0;j<item2btns.length;j++){
            item2btns[j].style.background="#cccccc";
        }
        item2btns[m].style.background="green";
    }
}


$(".case-item2-box").hover(function(){
    $(".case-item2-title").css("color","red");
},function(){
    $(".case-item2-title").css("color","#333333");
})