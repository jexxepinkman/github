$(document).ready(function(){
    let window_w = $(window).width() //브라우저 너비
    let device_status = 'pc'

    function device_check(){//함수 선언
        window_w = $(window).width()
        if(window_w > 640){ 
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    }
    device_check()//함수 실행
    $(window).resize(function(){
        device_check()
    })

    //메뉴에 마우스를 오버하면 header에 클래스.menu_over 추가
    $('.header .gnb').on ('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('.header').addClass('menu_over')
        }
    })
    //메뉴에 마우스를 아웃하면 header에서 클래스.menu_over 제거
    $('.header').on ('mouseleave', function(){
        $('.header').removeClass('menu_over')
    })
    $('.header .gnb >ul >li:last-child >ul >li:last-child >a').on ('focusout', function(){
        $('.header').removeClass('menu_over')
    })

    /*상위 메뉴를 클릭하면 li에 클래스.sub_opne 추가
    같은 메뉴를 다시 클릭하면 닫힘,
    pc - 상위 메뉴 클릭시 페이지 이동,
    mobile - 상위 메뉴 클릭시 하위 메뉴 등장*/

    $(".header .gnb ul.depth_1 > li > a").on("click", function(e){
        if(device_status == 'mobile'){
            e.preventDefault(); //a 태그의 href를 작동 X
            //클릭한 a 를감싸는 li 선택
            $(this).parent().toggleClass('sub_open') //toggleClass - 클래스가 없으면 추가 있으면 삭제
        }
	});

    /*메뉴 열기를 누르면 header에 .menu_open 추가
    메뉴 닫기를 누르면 header에 .menu_open 제거*/
    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')

        //스크롤 금지
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })

        $('.header .gnb .gnb_close').on('click', function(){
            $('.header').removeClass('menu_open')

            //스크롤 해제
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })
})