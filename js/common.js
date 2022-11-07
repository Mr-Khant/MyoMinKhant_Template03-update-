$(document).ready(function () {
  $('.menu-toggle').click(function () {
    $('.menu-toggle').toggleClass('active');
    $(".header-menu").toggleClass('it-show');
  });
  
  $('.sec3-slick').slick({
    arrow: true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ],
  });

  $('.ft').click(function () {
    $('.article1').addClass('on');
    $('.article1').removeClass('off');
    $('.article2').addClass('off');
    $('.article2').removeClass('on');
    $('.article3').addClass('off');
    $('.article3').removeClass('on');
  });

  $('.st').click(function () {
    $('.article1').addClass('off');
    $('.article1').removeClass('on');
    $('.article2').addClass('on');
    $('.article2').removeClass('off');
    $('.article3').addClass('off');
    $('.article3').removeClass('on');
  });

  $('.tt').click(function () {
    $('.article1').addClass('off');
    $('.article1').removeClass('on');
    $('.article2').addClass('off');
    $('.article2').removeClass('on');
    $('.article3').addClass('on');
    $('.article3').removeClass('off');
  });

  $(".section4 .tab .tab-head").click(function () {
    $(".tab .tab-head").removeClass("btm-color");
    $(this).addClass("btm-color");
  })

  $(".section10 .sec10-ul a").click(function () {
    $(".sec10-ul a").removeClass("active");
    $(this).addClass("active");
  });

  $(".sec10-a1").click(function () {
    $(".sec10-btm").removeClass("sec10-tab-on");
    $(".sec10-tab1").addClass("sec10-tab-on");
  });

  $(".sec10-a2").click(function () {
    $(".sec10-btm").removeClass("sec10-tab-on");
    $(".sec10-tab2").addClass("sec10-tab-on");
  });

  $(".sec10-a3").click(function () {
    $(".sec10-btm").removeClass("sec10-tab-on");
    $(".sec10-tab3").addClass("sec10-tab-on");
  });
});