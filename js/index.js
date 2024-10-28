/// <reference types="../@types/jquery" />

$(".open span").on("click",function(){
    $("aside").css("left" , "0")
})

$(".close").on("click",function(){
    let sideBarWidth = $("aside").innerWidth()
    $("aside").css("left" , -sideBarWidth)
})

$(".singers h3").on("click",function(){
    $(this).next().slideToggle(1000)
    $(".singers .slider").not($(this).next()).slideUp(1000)
})