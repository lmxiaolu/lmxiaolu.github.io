var indexTpl = require('../tpl/index.string');
var diffTpl = require('../tpl/diff.string');
var diffTpl = require('../tpl/shop.string');
var Swiper=require('../lib/swiper-3.3.1.min.js');
SPA.defineView('index', {
  html: indexTpl,
  plugins: ['delegated'],
  modules:[{
		name:'content',
		container:'.m-index-container',
		views:['home','find','my','shop','diff'],
		defaultTag:'home'
	}],
  init: {
    indexSwiper: null,
    setActive: function (obj) {
      obj.addClass('active').siblings().removeClass('active');
    }
  },
  bindActions: {
    'goto.diff': function () {
       SPA.open('diff');

    },
    'goto.car': function () {
       SPA.open('shop');
      //  this.hide();
    },
    'switch.view':function(e){
      // console.log(e);
      this.modules.content.launch(e.data.tag);
         this.setActive($(e.el));
    }
  }


} );
