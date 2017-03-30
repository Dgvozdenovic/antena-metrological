
var ContentSliderView = new MAF.Class({
	ClassName: 'ContentSliderView',

	Extends: MAF.system.FullscreenView,
	initialize: function () {
		var view = this;
		view.parent();
		view.registerMessageCenterListenerCallback(view.dataHasChanged);
	},

	dataHasChanged: function (event) {
		var view = this,
			elements = view.elements;

		if (event.payload.key === 'AntenaData') {
			if (event.payload.value.length > 0) {
				elements.slider.changeDataset(event.payload.value, true);
				elements.slider.focus();
			} else {
				elements.slider.visible = false;
			}
		}
	},

	createView: function () {

		var view = this;

		/** CONTENT SLIDER WRAP **/
        var sliderWrap = this.elements.sliderWrap = new MAF.element.Container({
			
            styles: {
                width: 1500,
                height: 900,
                hOffset: 200,
				vOffset: 150,				
				backgroundColor:'silver',
				zIndex:500
            }
        }).appendTo(view);

		createContentSlider(view, sliderWrap);
	},

	updateView: function () {
		var view = this;
		getAntenaData();
	}

});
