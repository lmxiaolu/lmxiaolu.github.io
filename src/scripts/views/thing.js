var thingTpl=require('../tpl/thing.string');
SPA.defineView('thing',{
	html:thingTpl,
	plugins: ['delegated'],
	bindActions: {
		'none': function () {

this.hide();

		}
	}

});
