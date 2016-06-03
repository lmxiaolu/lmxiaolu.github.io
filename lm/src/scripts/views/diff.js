var diffTpl=require('../tpl/diff.string');
SPA.defineView('diff',{
	html:diffTpl,
	plugins:['delegated'],
	 init: {
    indexSwiper: null,
    setActive: function (obj) {
      obj.addClass('active').siblings().removeClass('active');
    }
  },

	bindActions:{
		  'switch.swiper': function (e) {
         this.setActive($(e.el));
         this.indexSwiper.slideTo($(e.el).index() );
       },

	},
 
    bindEvents: {
    'beforeShow': function () {
      this.indexSwiper = new Swiper('#diff-swiper', {
        loop: false,
        onSlideChangeStart: function (swiper) {
          $('#index-nav li').eq(swiper.activeIndex)
            .addClass('active').siblings().removeClass('active');
        }
      });
    }
  }
});
