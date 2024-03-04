/*  
    file; common.js
    editor; jaemin_Kim
    date; 2024.02.28
    description; 모든 페이지에서 사용 (header, footer)
*/
$(document).ready(function(){
    let scrolling
    function scroll_chk(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }
    scroll_chk()
    $(window).scroll(function(){
        scroll_chk()
    })

    let device_status
    let window_w
    function device_chk(){
        window_w = $(window).width()
        if(window_w > 768){
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

    $('header .gnb ul.depth1 >li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('header').addClass('menu_over')
            $('header .gnb ul.depth1 >li').removeClass('on')
            $(this).addClass('on')
        }
    })
    $('header').on('mouseleave', function(){
        if(device_status == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb ul.depth1 >li').removeClass('on')
        }
    })
    $('header .tnb .lang').on('focusin', function(){
        if(device_status == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb ul.depth1 >li').removeClass('on')
        }
    })

    //모바일에서 1차메뉴를 클릭하면 링크는 작동하지 않고 하위메뉴를 열어준다.
    $('header .gnb ul.depth1 >li >a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault()
            $(this).parent().toggleClass('on')
        }
	})
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })
    
    $('footer .family_site .open').on('click', function(){
        $('.family_site').addClass('on')
    })
    $('footer .family_site .close').on('click', function(){
        $('.family_site').removeClass('on')
    })
})