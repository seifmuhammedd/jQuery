/// <reference types="../@types/jquery" />

$(".open span").on("click",function(){
    $("aside").css("left" , "0")
})

$(".close").on("click",function(){
    let sideBarWidth = $("aside").innerWidth()
    $("aside").css("left" , -sideBarWidth)
})