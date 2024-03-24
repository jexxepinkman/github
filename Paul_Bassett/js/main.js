$(document).ready(function(){


    const social_swiper = new Swiper('.social .swiper', {
		slidesPerView: 1,
		spaceBetween: 20,
		breakpoints: {
			426: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			769: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
	});

	AOS.init({
		offset: 150, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
		duration: 500, // 애니메이션 효과가 작동되는 시간
		easing: 'ease', // 가속도
	});

})