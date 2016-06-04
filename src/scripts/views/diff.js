var diffTpl=require('../tpl/diff.string');
SPA.defineView('diff',{
	html:diffTpl,
	plugins:['delegated',{
    name: 'avalon',
    options: function(vm) {
      vm.livelist = [];
    }
  }],
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
			'show': function () {

				var vm = this.getVM();
				$.ajax({
				url:'/unique/mock/livelist.json',
					success: function (res) {
						console.log(res.data);
						var data = res.data;
						var tempArr = [];
						for (var i = 0; i < Math.ceil(data.length); i++) {
							tempArr[i] = data[i];
						}
						vm.livelist = tempArr;
						console.log(tempArr);
					}
				});
			},
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
