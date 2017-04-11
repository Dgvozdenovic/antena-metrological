
var ChannelLiveView = new MAF.Class({
	ClassName: 'ChannelLiveView',

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

		if (event.payload.key === 'ProgramData') {
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
				width: 900,
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
				height: leftWrap.height / 2 + 50
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

		/** LIVE TV **/
		var liveTV = view.elements.liveTV = new MAF.element.Text({
			label: $_('Live TV'),
			styles: {
				left: 50,
				top: imageWrap.height + title.height + 40,
				width: 500,
				height: 60,
				fontSize: 30
			}
		}).appendTo(leftWrap);
		/** LIVE TV **/

		/** URMARESTE LIVE BUTTON **/
		view.elements.playButton = new MAF.control.TextButton({
			label: $_('<i class="fa fa-play" aria-hidden="true"></i>' + ' ' + ' URMARESTE LIVE'),
			ClassName: 'Button',
			theme: false,
			styles: {
				top: imageWrap.height + title.height + liveTV.height + 100,
				left: 50,
				width: imageWrap.width - 60,
				height: 90,
				paddingTop: 20,
				paddingLeft: 170
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
					MAF.application.loadView('view-LiveView');
				}
			}
		}).appendTo(leftWrap);
		/** URMARESTE LIVE BUTTON **/

		/** CONTENT SLIDER WRAP **/
		var sliderWrap = this.elements.sliderWrap = new MAF.element.Container({

			styles: {
				left: '55%',
				width: 700,
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
		var titleSlider = this.elements.titleSlider = new MAF.element.Text({
			ClassName: 'titleSlider',
			styles: {
				left: 45,
				fontSize: 45,
				fontFamily: 'FuturaStd'
			}
		}).appendTo(sliderWrap);
		/** SLIDER TITLE **/

		createProgramContentSlider(view, sliderWrap, 4, 70);
	},

	updateView: function () {
		var view = this;
		item = view.persist.item;
		view.elements.title.setText(item.title);
		view.elements.titleSlider.setText('Program TV: ' + item.title);
		view.elements.imageWrap.setSources({
			src: item.img
		});

		getProgramsData();

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
