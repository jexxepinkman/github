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

    $('.visual .ctrl_btn .stop ').on('click', function(){
        swiper.autoplay.stop();
        $(this).hide()
        $('.visual .ctrl_btn .play').show()
    })
    $('.visual .ctrl_btn .play').on('click', function(){
        swiper.autoplay.start();
        $(this).hide()
        $('.visual .ctrl_btn .stop').show()
    })

    $('.lost .list >ul >li').on('click', function(){
        $('.lost .list >ul >li').removeClass('active')
        $(this).addClass('active')
    })

    const adopt_swiper = new Swiper('.adopt .swiper', {
        slidesPerView: 2,  /*제일 작은사이즈 일때*/
        spaceBetween: 20, 
        loop: true,
        breakpoints: {
            580: {   
                slidesPerView: 3,
                spaceBetween: 28,
            },
            768: {   
                slidesPerView: 3,
                spaceBetween: 28,
            },
            1024: {  
                slidesPerView: 4,
                spaceBetween: 28,
            },
            1280: {  
                slidesPerView: 4,
                spaceBetween: 28,
            },
            1280: {  
                slidesPerView: 'auto',
            },
        },
        navigation: {
            nextEl: '.adopt .next',
            prevEl: '.sadopt.prev',
        },
        pagination: {
            el: '.swiper-pagination', 
            clickable: true,  
            type: 'fraction', 
        },
    });
// adopt_swiper.autoplay.stop();
// adopt_swiper.autoplay.start();
    $('.adopt .ctrl_btn .stop ').on('click', function(){
        adopt_swiper.autoplay.stop();
        $(this).hide()
        $('.adopt .ctrl_btn .play').show()
    })
    $('.adopt .ctrl_btn .play').on('click', function(){
        adopt_swiper.autoplay.start();
        $(this).hide()
        $('.adopt .ctrl_btn .stop').show()
    })

    $('.footer .family_site .site_open').on('click', function(){
        $('.footer .family_site .site_list').slideDown()
        $(this).hide()
        $('.footer .family_site .site_close').show()
    })
    $('.footer .family_site .site_close').on('click', function(){
        $('.footer .family_site .site_list').slideUp()
        $(this).hide()
        $('.footer .family_site .site_open').show()
    })

    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })

    $('.header .gnb ul.depth1 >li:has(.depth2) >a').on('click', function(e){
		e.preventDefault()
        if($(this).parent().hasClass('sub_open') == true){
            console.log('sub_opneIsHere')
            $(this).parent().removeClass('sub_open')
            $(this).parent().find('ul.depth2').slideUp()
        }else{
            console.log('sub_opneIsNotHere')
            $(this).parent().addClass('sub_open')
            $(this).parent().find('ul.depth2').slideDown()
        }
	})
})
