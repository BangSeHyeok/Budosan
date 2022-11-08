

$(document).on('ready', function() {
  AOS.init();
AOS.init({
  // Global settings:
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom',
  // defines which position of the element regarding to window should trigger the animation
});

});


    


//메인슬라이더2
$(document).on('ready', function() {
  $(".main2_slider").slick({  
    slidesToShow: 3,
    initialSlide: 0,
    dots:false,
    infinite:true,
    autoplay:true,
    autoplaySpeed:3000,
    speed:1000,
    pauseOnHover : false,
    pauseOnFocus : false,
    pauseOnDotsHover : false,
    arrows: true,
    centerMode: true,
    swipe: true,
    centerPadding: "0px",

  });

});





$(document).ready(function() {
  $('.menu_span').click(function(){  
      $('.main_menu').toggleClass('on');
      $('.main_menu>ul').toggleClass('on2');
      $('.right_menu03 span').toggleClass('on');
      
  }); 

  });
  



  //스크롤 고정 메뉴
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop != 0) $('.main_menu_bg').addClass('scroll'); 
    else $('.main_menu_bg').removeClass('scroll');
  });


    //스크롤 고정 메뉴
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
      if(scrollTop != 0) $('.main_menu').addClass('scroll'); 
      else $('.main_menu').removeClass('scroll');
    });




  // 레이어 팝업
$(document).ready(function(e) {

	$('.privacy').click(function(e){  
		$('html').addClass('on');
        $('.pop-privacy').fadeIn(200);
        $('.pu_bg').fadeIn(200);
    });


	$('.bt_close').click(function(){  
        $('html').removeClass('on');
		$('.pop-privacy').fadeOut(200);
        $('.pu_bg').fadeOut(200);
    });

    $('.pu_bg').click(function(){  
		$('html').removeClass('on');
		$('.pop-privacy').fadeOut(200);
        $('.pu_bg').fadeOut(200);
    });


});





