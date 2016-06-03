var indexTpl = require('../tpl/index.string');
var diffTpl = require('../tpl/diff.string');
var Swiper=require('../lib/swiper-3.3.1.min.js');
SPA.defineView('index', {
  html: indexTpl,
  plugins: ['delegated'],
  modules:[{
		name:'content',
		container:'.m-index-container',
		views:['home','diff','my'],
		defaultTag:'home'
	}],

  bindActions: {
    'goto.diff': function () {
       SPA.open('diff');
    
    } 
  }


} );

window.onload=function()
{
	
	var mySwiper = new Swiper ('#index-swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay:1500,
    autoplayDisableOnInteraction : false,
    // 如果需要分页器
    pagination: '.swiper-pagination',
  })

}
