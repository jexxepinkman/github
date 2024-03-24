$(document).ready(function(){
    let sec02_obj_top
    let sec03_obj_top
    let sec04_obj_top
    let sec05_obj_top
    let scrolling
    let window_h
    let offset = 200
    let class_name = 'active'

    function scroll_chk(){
        sec02_obj_top = $('.sec02 .photo').offset().top
        sec03_obj_top = $('.sec03').offset().top
        sec04_obj_top = $('.sec04').offset().top
        sec05_obj_top = $('.sec05').offset().top
        scrolling = $(window).scrollTop()
        window_h = $(window).height()
        console.log(sec02_obj_top + ',' + scrolling + ',' + window_h + ',' + (sec02_obj_top - scrolling - window_h))
        if((sec02_obj_top - scrolling - window_h) < -offset){
            $('.sec02 .photo').addClass(class_name)
            $('.sec02 .photo').width(300 - (sec02_obj_top - scrolling - window_h + offset)*2)
            $('.sec02 .photo').height(300 + window_h)
        }else {
            $('.sec02 .photo').removeClass(class_name)
            $('.sec02 .photo').width(300)
            $('.sec02 .photo').height(300)
        }
        if((sec03_obj_top - scrolling - window_h) < -offset){
            $('.sec03').addClass(class_name)
        }else {
            $('.sec03').removeClass(class_name)
        }
        if((sec04_obj_top - scrolling - window_h) < -offset){
            $('.sec04').addClass(class_name)
        }else {
            $('.sec04').removeClass(class_name)
        }
        if((sec04_obj_top - scrolling - window_h) < -offset){
            $('body').addClass('black')
        }else {
            $('body').removeClass('black')
        }
        if((sec05_obj_top - scrolling - window_h) < -offset){
            $('.sec05 .tit').attr('style', 'transform: translate(210px, -50px)')
        }else {
            $('.sec05 .tit').attr('style', 'transform: translate(0, 0)')
        }
    }
    scroll_chk()
    $(window).resize(function(){
        scroll_chk()
    })
    $(window).scroll(function(){
        scroll_chk()
    })
})