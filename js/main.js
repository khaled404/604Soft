$(function () {
  AOS.init();

  $(".nav-torger , .menu   , .menu a").on("click", function () {
    $(".nav-torger").toggleClass("active");
    $(".menu").toggleClass("active");
    $("body").toggleClass("overflow");
  });
  $(" .menu a").on("click", function () {
    $(".nav-torger").toggleClass("active");
    $(".menu").toggleClass("active");
    $("body").toggleClass("overflow");
  });

  $(".our-latest .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
  });
});
