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
})