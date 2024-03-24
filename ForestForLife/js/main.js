$(document).ready(function(){
	const myFullpage = new fullpage('#fullpage', {

		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['MAIN', '나무심기', '활동소개', '활동이야기'],
		showActiveTooltip: true,

		autoScrolling:true,
		scrollHorizontally: true,
		scrollOverflow: false,
		verticalCentered: true,

		afterLoad: function(origin, destination, direction, trigger){
			if((destination.index == 1)){
				$('.counter').counterUp();
				console.log('초록');
				$('#fp-nav').attr('data-color', 'black')
				$('header').addClass('black')
			}else{
				console.log('하양');
				$('#fp-nav').attr('data-color', '')
				$('header').removeClass('black')
			}
		},

		responsiveWidth: 640
	});

	const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

	effect: "fade", /* fade 효과 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 3300,
		disableOnInteraction: true,
	},

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.visual .paging', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
			return '<span class="page' + (index + 1) + ' '+className+'"><span></span></span>'
		},
	},

	navigation: {  /* 이전, 다음 버튼 */
		nextEl: '.swiper-button-next',  /* 다음 버튼의 클래스명 */
		prevEl: '.swiper-button-prev',  
	},

});
const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 20, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		426: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		769: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1025: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	},
	centeredSlides: false,
});

})