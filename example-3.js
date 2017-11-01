$(document).ready(function() {
  $("h1").animate({
    width: 100,
    opacity: 0.3
  }, 1000);

  $(".subtitle").animate({
    width: "50%",
    opacity: 0.5
  }, 3000);



  $(".box-1").fadeOut(1000, function() {
    $(".box-1").fadeIn(1000);
  });

  $(".box-2").animate({
    opacity: 0.5
  }, 2000);

  $(".box-3").click(function() {
    alert("Hello World!");
  });

  $(".box-4").slideUp(1000, function() {
    $(".box-4").slideDown(1000);
  });
  $(".box-5").fadeOut(1000, function() {
    $(".box-5").fadeIn(1000);
  });
  $(".box-6").fadeOut(1000, function() {
    $(".box-6").fadeIn(1000);
  });
  $(".box-7").animate({
    width: 100,
    opacity: 0.3
  }, 1000);
});
