$(".contral-hidden").mouseover(function(){
    $(".function-content-hidden").css("display","block");
})
$(".contral-hidden").mouseout(function(){
    $(".function-content-hidden").css("display","none");
})

// $(".item1").mouseover(function(){
//     $(".img-box img").css("transform","scale(1.2)");
// })
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