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
    swiper.autoplay.stop();  // 정지
    swiper.autoplay.start();  // 재생
})
