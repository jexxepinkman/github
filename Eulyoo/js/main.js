$(document).ready(function(){
    const swiper = new Swiper('.swiper', {

        //effect: "fade",  fade 효과

        autoplay: {  // 팝업 자동 실행
            delay: 4500,
            disableOnInteraction: true,
        },
    
        loop: true,  // 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기
    
        pagination: {  // 몇개의 팝업이 있는지 보여주는 동그라미
            el: '.visual .pagination',
            clickable: true,  // 클릭하면 해당 팝업으로 이동
            //type: 'fraction',  //팝업을 숫자로 표사
        },
    
        navigation: {  // 이전, 다음 버튼
            nextEl: '.visual .next',
            prevEl: '.visual .prev',  
        },
    
    });

    
    //팝업 재생/정지
    $('.visual .swiper .stop').on('click', function(){
        swiper.autoplay.stop()
        $('.visual .swiper .play').show() //숨기기
        $('.visual .swiper .stop').hide() //보이기
    })
    $('.visual .swiper .play').on('click', function(){
        swiper.autoplay.start()
        $('.visual .swiper .play').hide()
        $('.visual .swiper .stop').show()
    })

    //스크롤시 .fixed 추가, 맨 위에 있을시 .fixed 제거
    let scrolling

    function scroll_chk(){ //함수 선언
        scrolling = $(window).scrollTop() //스크롤 된 값을 저장
        console.log(scrolling)
        if(scrolling > 0 ){
            $('.header').addClass('fixed')
        }else{
            $('.header').removeClass('fixed')
        }
    }
    scroll_chk() //함수 실행
    $(window).scroll(function(){ //스크롤 할 때마다 실행
        scroll_chk()
    })
})
