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



//draw  https://youtu.be/amXSWXQssww

var canvas, ctx, brush = {
  x: 0, y: 0,
  color: '#000000',
  size: 10,
  down: false,
}, 
strokes =  [],
currentStroke = null;

function redraw () {}

function init () {
  canvas = $('#draw');
  canvas.attr({
    // width: window.innerWidth,
    // height: window.innerHeight
  });
  ctx = canvas.getContent('2d');

  canvas.mousedown(function(e){
    brush.down = true;
    brush.x = e.pageX;
    brush.y = e.pageY;

    currentStroke = {
      color: brush.color,
      size: brush.size,
      points: [],
    };
    currentStroke.points.push({
      x: brush.x,
      y: brush.y
    });
    redraw();
  }).mouseup(function(e) {
    brush.down = false;
    brush.x = e.pageX;
    brush.y = e.pageY;
    currentStroke = {
      color: brush.color,
      size: brush.size,
      points: [],
    };
  })
}

$(init);