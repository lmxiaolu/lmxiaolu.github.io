var shopTpl=require('../tpl/shop.string');
SPA.defineView('shop',{
	html:shopTpl,
	plugins: ['delegated'],
	bindActions: {
		'exit': function () {

this.hide();

		}
	}
});
