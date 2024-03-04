/*  
    file; main.js
    editor; jaemin_Kim
    date; 2024.02.28
    description; 메인페이지에만 사용 (header 제외)
*/
$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', {

        autoplay: {
            delay: 3500,
            disableOnInteraction: true,
        },
    
        loop: true,
    
        navigation: {
            nextEl: '.visual .next',
            prevEl: '.visual .prev',  
        },
    
    });
    
    $('.visual .btn_ctrl button.stop').on('click', function(){
        $(this).hide()
        $('.visual .btn_ctrl button.play').show()
        visual_swiper.autoplay.stop()
    })
    $('.visual .btn_ctrl button.play').on('click', function(){
        $(this).hide()
        $('.visual .btn_ctrl button.stop').show()
        visual_swiper.autoplay.start()
    })

    $('.biz .list ul li').on('mouseenter', function(){
        $('.biz .list ul li').removeClass('on')
        $('.biz .list ul li').addClass('off')
        $(this).removeClass('off')
        $(this).addClass('on')
    })
    $('.biz .list ul').on('mouseleave', function(){
        $('.biz .list ul li').removeClass('on')
        $('.biz .list ul li').removeClass('off')
    })

    const news_swiper = new Swiper('.news .swiper', {
	slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
        426: {    /* 768px 이상일때 적용 */
        slidesPerView: 2,
        spaceBetween: 28,
        },
        1025: {    /* 768px 이상일때 적용 */
			slidesPerView: 3,
			spaceBetween: 20,
		}
	}
})
})
