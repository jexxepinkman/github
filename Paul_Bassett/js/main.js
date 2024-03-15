$(document).ready(function(){


    const social_swiper = new Swiper('.social .swiper', {
	slidesPerView: 2,
	spaceBetween: 20,
	breakpoints: {
		640: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
});
})