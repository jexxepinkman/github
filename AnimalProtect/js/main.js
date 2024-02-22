$(document).ready(function(){
    $('.header .gnb ul.depth1 >li').on('mouseenter focusin', function(){
        $('.header .gnb ul.depth1 >li').removeClass('sub_over')
        $(this).addClass('sub_over')
        $('.header').addClass('menu_over')
    })
    $('.header .gnb').on('mouseleave', function(){
        $('.header .gnb ul.depth1 >li').removeClass('sub_over')
        $(this).removeClass('menu_over')
    })
    $('.header .tnb .search').on('focusin', function(){
        $('.header .gnb ul.depth1 >li').removeClass('sub_over')
        $('.header').removeClass('menu_over')
    })
    $('.header .tnb .paper').on('mouseenter', function(){
        $(this).addClass('paper_over')
    })
    $('.header .tnb .paper').on('mouseleave', function(){
        $(this).removeClass('paper_over')
    })
    $('.header .tnb .search').on('mouseenter', function(){
        $(this).addClass('search_over')
    })
    $('.header .tnb .search').on('mouseleave', function(){
        $(this).removeClass('search_over')
    })

    const swiper = new Swiper('.visual .swiper', {
        autoplay: {
            delay: 3300,
            disableOnInteraction: true,
        },
        loop: true,
        navigation: {  
            nextEl: '.visual .next', 
            prevEl: '.visual .prev',  
        },
    });
    
    swiper.autoplay.stop();
    swiper.autoplay.start();
})
