// 引入模板
var tplGuide = require('../tpl/guide.string');

// 定义一个视图
SPA.defineView('guide', {
  html: tplGuide,

  // 添加插件
  plugins: ['delegated'],
  bindEvents:{
  		'beforeShow' : function(){
  //			var guideSwiper = new Swiper('#guide-swiper',function(){
  //				loop:false
  //			});
  			setTimeout(
  				function(){
  //					console.log(111)
  					SPA.open('index');
  					var mySwiper = new Swiper ('.m-guide', {
  						autoplay:2000,//自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。

  					    loop: true,//循环
  					    autoplayDisableOnInteraction : false
  					// 如果需要分页器

  					});
  				}
  			,1000)
  		}
  	}

  // // 绑定事件
  // bindActions: {
  //   'goto.index': function () {
  //     SPA.open('index');
  //     var mySwiper = new Swiper ('.swiper-container', {
  //   direction: 'horizontal',
  //   loop: true,
  //   autoplay:1500,
  //   autoplayDisableOnInteraction : false,
  //   // 如果需要分页器
  //   pagination: '.swiper-pagination',
  // })
  //   }
  // }
});
