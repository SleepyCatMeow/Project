const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
    audio.playbackRate=1.5;
  });
});

//scroll
$(document).ready(function (){
    $("#click").click(function (){
        $('html, body').animate({
            scrollTop: $("#walter").offset().top
        }, 1000);
    });
});
//
$(document).ready(function (){
  $("#sorry").click(function (){
      $('html, body').animate({
          scrollTop: $(".main").offset().top
      }, 1000);
  });
});

//popup
$(function () {
    "use strict";
    
    $(".popup img").click(function () {
        var $src = $(this).attr("src");
        $(".show").fadeIn();
        $(".img-show img").attr("src", $src);
    });
    
    $("span, .overlay").click(function () {
        $(".show").fadeOut();
    });
    
});