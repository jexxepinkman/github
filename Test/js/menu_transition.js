$(document).ready(function(){
    $('.header .gnb .gnb_btn').on('click', function(){
        if($(this).hasClass('open') == true){//open 클래스를 가지고 있으면
            $('.header').addClass('menu_open')
            $(this).removeClass('open')
            $(this).addClass('close')
            $('.header .gnb .gnb_btn button').text('메뉴 굳게 닫기')
        }else{
            $('.header').removeClass('menu_open')
            $(this).addClass('open')
            $(this).removeClass('close')
            $('.header .gnb .gnb_btn button').text('메뉴 활짝 열기')
        }
    })
    $('.header .gnb ul.depth1 > li > a').on('click', function(e){
        e.preventDefault()
        let open_status = $(this).parent().hasClass('sub_open')
        console.log(open_status)
        if(open_status == true){
            $(this).parent().removeClass('sub_open')
            $(this).parent().find('.depth2').slideUp()
        }else{
            $(this).parent().addClass('sub_open')
            $(this).parent().find('.depth2').slideDown()
        }
    })
})