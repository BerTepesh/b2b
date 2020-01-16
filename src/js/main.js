$(".ham-menu-trigger").click(function() {
  $(".ham-menu").toggleClass("active");
  $(".ham-menu-trigger").toggleClass("ham-menu-trigger_close")
});
let setProgress = function() {
  let pos = $(window).scrollTop() / ($(document).height() - $(window).height());
  let height = parseInt(($(".scrollbar__progress-bar").height() / $(".scrollbar__progress").height() * 100).toFixed());
  let progress = (100 - height) * pos;
  $(".scrollbar__progress-bar").css("top", progress + "%");

  let lightSection = $(".section_light").offset().top;
  let viewSpot = $(window).scrollTop() + $(window).height()/2;
  if(viewSpot > lightSection && viewSpot < lightSection + $(".section_light").height()) {
    $(".scrollbar").addClass("scrollbar_dark");
  } else {
    $(".scrollbar").removeClass("scrollbar_dark");
  }

};
$(document).ready(function(){
  if($(window).scrollTop() > 0) {
    $(".scrolldown").removeClass("active");
  }
  $(".scrollbar__to").text($(".section").length);
  setProgress();
});
$(window).scroll(function() {
  if($(window).scrollTop() > 0) {
    $(".scrolldown").removeClass("active");
  }
  else {
    $(".scrolldown").addClass("active");
  }
  setProgress();
});
$(window).on('load resize', function() {
  if ($(window).width() < 1024) {
    $(".slider").each(function() {
      $(this).find(".slider__holder").slick({
        arrows: true,
        dots: false,
        slidesToShow: 2,
        swipeToSlide: true,
        accessibility: false,
        infinite: false,
        autoplay: false,
        speed: 900,
        prevArrow: '<button type="button" class="prev"></button>',
        nextArrow: '<button type="button" class="next"></button>',
        appendArrows: $(this).find('.slider__nav'),
        responsive: [
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    });
  }
});

