
var FavoriteView = new MAF.Class({
	ClassName: 'FavoriteView',

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


		/** MAIN CONTAINER **/
		var liveContainer = new MAF.element.Container({
			styles: {
				width: view.width,
				height: view.height,
				backgroundColor: SPECIALCOLOR
			}
		}).appendTo(view);
		/** MAIN CONTAINER **/

		/** HEADER **/
		createHeader(view, "FAVORITE");
		/** HEADER **/

		/** CONTENT SLIDER WRAP **/
        var sliderWrap = this.elements.sliderWrap = new MAF.element.Container({
			
            styles: {
                width: 1680,
                height: 900,
                hOffset: 150,
				vOffset: 150,				
				backgroundColor:'SPECIALCOLOR',
				zIndex:2
            }
        }).appendTo(view);

		createContentSlider(view, sliderWrap);
	},

	updateView: function () {
		var view = this;
		getAntenaData();
	}

});