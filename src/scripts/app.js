

require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');
require('./views/guide.js');
require('./views/index.js');
require('./views/diff.js');
require('./views/home.js'); 
// 配置视图的信息
SPA.config({
  indexView: 'guide' 
});
 