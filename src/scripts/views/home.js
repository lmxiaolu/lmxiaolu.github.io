var homeTpl=require('../tpl/home.string');
SPA.defineView('home',{
	html:homeTpl,
	bindEvents:{
		'beforeShow': function () {
			var guideSwiper = new Swiper('#index-swiper', {
				direction: 'horizontal',
				loop: true,
				autoplay:1500,
				autoplayDisableOnInteraction : false,
				// 如果需要分页器
				pagination: '.swiper-pagination',
			})
		}
	}
});
