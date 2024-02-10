$(document).ready(function(){
    //스크롤시 header 스타일 변경//
    let scrolling = $(window).scrollTop()
        console.log(scrolling)
    function scroll_chk() {
        scrolling = $(window).scrollTop()
        console.log(scrolling)
    }
        if(scrolling > 0){
            $('.header').addClass('fixed')
        }else {
            $('.header').removeClass('fixed')
        }
    scroll_chk()
    $(window).scroll(function(){
        scroll_chk()
    })
    
    //pc 메뉴에 마우스를 오버하면 header 스타일 변경//
    let window_w
    let device_status
    let mobile_size = 640
    function device_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    }
    device_chk()
    $(window).resize(function(){
        device_chk()
    })

    $('.header .gnb').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('.header').addClass('menu_over')
        }
    })
    $('.header .gnb').on('mouseleave', function(){
        $('.header').removeClass('menu_over')
    })
    $('.header .tnb .login').on('focusin', function(){ //로그인 으로 포커스 되면 .menu_over 제거
        $('header').removeClass('menu_over')
    })

    //mobile 메뉴 열고 닫는 기능
    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_open')
    })
    $('.header .gnb ul.depth_1 >li >a').on('click', function(e){
		if(device_status == 'mobile'){
            e.preventDefault()
            $(this).parent().toggleClass('sub_open')
        }
	})

    // TOP 클릭시 상단으로 자동 스크롤
    $('.footer .top').on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 1000)
    })
})