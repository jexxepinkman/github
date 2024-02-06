$(document).ready(function(){

    let window_w = $(window).width()
    let device_status = 'pc' //pc, mobile 구분
    if(window_w > 640){//pc
        device_status = 'pc'
    }else{//mobile
        device_status = 'mobile'
    }
    console.log(device_status)
    $(window).resize(function(){
        window_w = $(window).width()
        if(window_w > 640){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    })
    
    /*메뉴(.header .gnb)에 마우스를 오버하면 header에 menu_open 클래스를 추가.
    반대로 마우스를 아웃하면 header에 menu_open 클래스를 제거, 다만 header를 벗어
    났을때를 아웃이라고 판정*/
    $('.header .gnb').on('mouseenter focusin', function(){ /*탭키로 메뉴에 이동했을때 하위메뉴를 열어주는 focusing*/
        if(device_status == 'pc'){
            $('.header').addClass('menu_open')
        }
    })
    $('.header').on('mouseleave', function(){
        $('.header').removeClass('menu_open')
    })
    /* 마지막 메뉴에서 포커스가 아웃되면 메뉴 닫기 각 li에 :last-child, mouseleave > focusout*/
    $('.header .gnb>ul>li:last-child>ul>li:last-child>a').on('focusout', function(){
        $('.header').removeClass('menu_open')
    })

    $('.header .gnb .gnb_open ').on('click', function(){
        $('.header').addClass('menu_mobile')
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_mobile')
    })
})