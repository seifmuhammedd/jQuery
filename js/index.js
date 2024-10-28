/// <reference types="../@types/jquery" />

$(".open span").on("click", function () {
  $("aside").css("left", "0");
});

$(".close").on("click", function () {
  let sideBarWidth = $("aside").innerWidth();
  $("aside").css("left", -sideBarWidth);
});

// Scroll
// $(".sidebar .links a").on("click",function(){
//     let sectionID = $(this).attr("href")
//     let sectionOffset = $(sectionID).offset().top
//     $("body,html").animate({scrollTop:sectionOffset},1000)
// })

$(".singers h3").on("click", function () {
  $(this).next().slideToggle(1000);
  $(".singers .slider").not($(this).next()).slideUp(1000);
});

$("#getting-started").countdown("2024/11/09", function (event) {
  $("#day").html(event.strftime(" %D D"));
  $("#hour").html(event.strftime("%H H"));
  $("#minute").html(event.strftime("%M M"));
  $("#seconed").html(event.strftime("%S S"));
});

$("textarea").on("keyup" , function(){
    let textLength = $(this).val().length;
    if (textLength >= 100){
        $(".counter").html("No characters remaining").css("color" , "red")
    }else{
        $(".counter").html(100-textLength)
    }
})