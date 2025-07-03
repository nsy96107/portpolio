$(document).ready(function(){ // 실행틀 시작

  $("#fullpage").fullpage({

    // 메뉴에 대한 옵션 설정
    menu : ".gnb",
    anchors : ["menu1","menu2","menu3","menu4","menu5","menu6"],
    
    //navigation 옵션
    navigation : true,
    navigationPosition : "right",
    showActiveTooltip : true,

    // 반응형 - 1024 이하에서는 동작 안 함
    responsiveWidth: 1024, 
  });

  // 모바일 메뉴
  $(".m-gnb-wrap").hide();

  $(".ham").click(function(){
    $(".m-gnb-wrap").fadeIn();
  });

  $(".close").click(function(){
    $(".m-gnb-wrap").fadeOut();
  });

  // 포트폴리오 스와이퍼
  var pf_list = new Swiper(".pf-list", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
    },

    autoplay: {
      delay: 2500,
    },
  });

  // 그래픽 스와이퍼
  var gp_list = new Swiper(".gp-list", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
    },

    autoplay: {
      delay: 2500,
    },

  });

}); // 실행틀 끝