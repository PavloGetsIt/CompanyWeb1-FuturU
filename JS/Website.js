$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});
//backgroundFadeIn's
$(function(){
  $(".bodyText").fadeIn("slow");
  $(".bodyImage").fadeIn("slow");

  $(".buyAffirm").fadeIn(1000);
  $(".buyAffirmPlus").fadeIn(1500);
  $(".buyMindMovie").fadeIn(2000);
  $(".buyMindMoviePlus").fadeIn(2500);

  $(".aboutBackground").slideDown("slow");

  $(".bodyImageTestimonials").slideDown(1000);
});


