$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', {
	autoplay: {
		delay: 4550,
		disableOnInteraction: true,
	},
	loop: true,
    })

    let scroll_dir
    let scroll_prev
    let scroll_curr
    function scroll_chk(){
        scroll_prev = scroll_curr
        scroll_curr = $(window).scrollTop()
        scroll_dir = scroll_prev - scroll_curr
        console.log(scroll_dir)
        if(scroll_curr > 100){
            $('header').addClass('fixed')
            if(scroll_dir > 0){
                $('header').attr('style', 'transform: translate(0, 0)')
            }else{
                $('header').attr('stlye','transform: translate(0, -100px)')
            }
        }else{
            $('header').removeClass('fixed')
            $('header').attr('style', 'transform: translate(0, 0)')
            $('header').removeClass('menu_over')
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

    $('header .gnb ul.depth1 >li').on('mouseenter', function(){
        if(device_status == 'pc'){
            $('header .gnb ul.depth1 >li').removeClass('on')
            $(this).addClass('on')
            $('header').addClass('menu_over')
        }
    })
    $('header').on('mouseleave', function(){
        if(device_status == 'pc'){
            $('header .gnb ul.depth1 >li').removeClass('on')
            $(this).removeClass('on')
            $('header').removeClass('menu_over')
        }
    })
    $('header .gnb .depth1 >li:last-child >.depth2 >li:last-child >a').on('focusout', function(){
        if(device_status == 'pc'){
            $('header .gnb ul.depth1 >li').removeClass('on')
            $('header').removeClass('menu_over')
        }
    })
    $('header').on('mouseleave', function(){
        $(this).removeClass('on')
        $('header').removeClass('menu_over')
    })

    $('header .gnb ul.depth1 >li >a').on("click", function(e){
		e.preventDefault()
	})

    
    const product_swiper = new Swiper('.product .swiper', {
	loop: true, /*무한 열차*/
    slidesPerView: 1,
	spaceBetween: 40,
	breakpoints: {
        426: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		769: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1025: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1280: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	},
    })
})