

require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');
require('./views/guide.js');
require('./views/diff.js');
require('./views/find.js');
require('./views/my.js');
require('./views/home.js');
require('./views/index.js');
require('./views/shop.js');
// 配置视图的信息
SPA.config({
  indexView: 'guide'
});
