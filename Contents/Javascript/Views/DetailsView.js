
var DetailsView = new MAF.Class({
	ClassName: 'DetailsView',

	Extends: MAF.system.FullscreenView,
	initialize: function () {
		var view = this;
		view.directionPointer = false;
		view.parent();
		view.registerMessageCenterListenerCallback(view.dataHasChanged);
	},

	dataHasChanged: function (event) {
		var view = this,
			elements = view.elements;

		if (event.payload.key === 'DetailsData') {
			if (event.payload.value.length > 0) {
				elements.slider.changeDataset(event.payload.value, true);				
				elements.playButton.focus();
			} else {
				elements.slider.visible = false;
			}
		}
	},

	createView: function () {

		var view = this;
		this.keyPressEvent = this.gotKeyPress.subscribeTo(MAF.application, 'onWidgetKeyPress', this);
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
		createHeader(view, "Chefi la Cutite");
		/** HEADER **/

		/** LEFT WRAPPER **/
		var leftWrap = this.elements.leftWrap = new MAF.element.Container({

			styles: {
				width: 800,
				height: 850,
				paddingLeft: 150,
				hOffset: 100,
				vOffset: 150,
				backgroundColor: 'SPECIALCOLOR',
				zIndex: 2
			}
		}).appendTo(view);
		/** LEFT WRAPPER **/

		/** IMAGE LEFT WRAPPER **/
		var imageWrap = view.elements.imageWrap = new MAF.element.Image({

			styles: {
				top: 30,
				left: 50,
				width: leftWrap.width,
				height: leftWrap.height / 2
			}
		}).appendTo(leftWrap);
		/** IMAGE LEFT WRAPPER **/

		/** TITLE **/
		var title = view.elements.title = new MAF.element.Text({

			styles: {
				left: 50,
				width: 500,
				height: 70,
				top: imageWrap.height + 40,
				fontSize: 50,
				fontFamily: 'FuturaStd'
			}
		}).appendTo(leftWrap);
		/** TITLE **/

		/** SUBTITLE **/
		var subtitle = view.elements.subtitle = new MAF.element.Text({

			styles: {
				left: 50,
				top: imageWrap.height + title.height + 40,
				width: 500,
				height: 60,
				fontSize: 40
			}
		}).appendTo(leftWrap);
		/** SUBTITLE **/

		/** DATE **/
		var date = view.elements.date = new MAF.element.Text({

			styles: {
				left: 50,
				top: imageWrap.height + title.height + subtitle.height + 40,
				width: 500,
				height: 60,
				fontSize: 40
			}
		}).appendTo(leftWrap);
		/** DATE **/

		/** PLAY BUTTON **/
		view.elements.playButton = new MAF.control.TextButton({
			label: $_('<i class="fa fa-play" aria-hidden="true"></i>' + ' ' + ' PLAY'),
			ClassName: 'Button',
			theme: false,
			styles: {
				width: leftWrap.width - 200,
				height: 90,
				paddingTop: 20,
				paddingLeft: 250,
				top: imageWrap.height + title.height + subtitle.height + date.height + 60,
				left: 50
			},
			textStyles: {
				fontSize: 40
			},

			events: {
				onFocus: function () {
					var view = this.getView();
					view.directionPointer = 'play';
				},
				onSelect: function () {
					MAF.application.loadView('view-VideoView');
				}
			}
		}).appendTo(leftWrap);
		/** PLAY BUTTON **/

		/** CONTENT SLIDER WRAP **/
		var sliderWrap = this.elements.sliderWrap = new MAF.element.Container({

			styles: {
				left: '50%',
				width: 800,
				height: 800,
				paddingLeft: 150,
				vOffset: 150,
				backgroundColor: 'SPECIALCOLOR',
				zIndex: 2,
				borderLeft: 'solid #333131 3px'
			}
		}).appendTo(view);
		/** CONTENT SLIDER WRAP **/

		/** SLIDER TITLE **/
		var titleSlider = new MAF.element.Text({
			ClassName: 'titleSlider',
			label: 'Editii anterioare',
			styles: {
				left: 100,
				fontSize: 45,
				fontFamily: 'FuturaStd'
			}
		}).appendTo(sliderWrap);
		/** SLIDER TITLE **/

		createContentSlider(view, sliderWrap, 3, 60, 'DetailsData');
	},

	updateView: function () {
		var view = this;
		item = view.persist.item;
		view.elements.title.setText(item.title);
		view.elements.subtitle.setText(item.subtitle);
		view.elements.date.setText(item.date);
		view.elements.imageWrap.setSources({
			src: item.img,
			missingSrc: 'Images/no-thumb.jpg'
		});

		getDetailsData();

	},
	gotKeyPress: function (evt) {

		var view = this.getView();

		switch (evt.payload.key) {
			case 'left':
				if (view.directionPointer === 'play') this.elements.backButton.focus();
				else if (view.directionPointer === 'slider') this.elements.playButton.focus();
				break;
			case 'right':
				if (view.directionPointer === 'play') this.elements.slider.focus();
				else if (view.directionPointer === 'backButton') this.elements.playButton.focus();
				break;
			case 'down':
				if (view.directionPointer === 'backButton') this.elements.playButton.focus();
				break;
			case 'up':
				if (view.directionPointer === 'play') this.elements.backButton.focus();
				break;
		}
		return;

	},
	destroyView: function () {
		MAF.messages.reset();
		this.gotKeyPressEvent.unsubscribeFrom(MAF.application, 'onWidgetKeyPress');
	}
});
