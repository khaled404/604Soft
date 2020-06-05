$(function () {
  AOS.init();
  $("header .content").addClass("active");
  $(".nav-trigger , .menu   , .menu a").on("click", function () {
    $(".nav-trigger").toggleClass("active");
    $(".menu").toggleClass("active");
    $("body").toggleClass("overflow");
  });
  $(" .menu a").on("click", function () {
    $(".nav-trigger").toggleClass("active");
    $(".menu").toggleClass("active");
    $("body").toggleClass("overflow");
  });

  $(".our-latest .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
  });

  $(window).on("load", function () {
    $("html").css("overflow-y", "auto");
    $(".preloader").fadeOut(400, function () {
      $(this).remove();
    });
  });
});
