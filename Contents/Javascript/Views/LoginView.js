
var LoginView = new MAF.Class({
	ClassName: 'LoginView',

	Extends: MAF.system.FullscreenView,

	createView: function () {

		var view = this;
		view.directionPointer = false;
		this.keyPressEvent = this.gotKeyPress.subscribeTo(MAF.application, 'onWidgetKeyPress', this);
		/** MAIN CONTAINER **/
		var loginContainer = new MAF.element.Container({
			styles: {
				width: view.width,
				height: view.height,
				backgroundColor: SPECIALCOLOR
			}
		}).appendTo(view);
		/** MAIN CONTAINER **/

		/** HEADER **/
		createHeader(view, "Intra In Cont");
		/** HEADER **/

		/** LOGIN WRAPPER **/
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
		/** LOGIN WRAPPER **/

		/** EMAIL FIELD **/
		var email = new MAF.element.Text({
			label: $_('email<br><input type="text" name="email"><br>parolă<br><input type="text" name="password">'),
			styles: {
				left: 150,
				top: 150,
				fontSize: 45,
				fontFamily: 'FuturaStd'
			}
		}).appendTo(leftWrap);
		/** EMAIL FIELD **/

		/** LOGIN BUTTON **/
		view.elements.playButton = new MAF.control.TextButton({
			label: $_('LOGIN'),
			ClassName: 'Button',
			theme: false,
			styles: {
				width: leftWrap.width - 200,
				height: 90,
				paddingTop: 20,
				paddingLeft: 250,
				top: 600,
				left: 50
			},
			textStyles: {
				fontSize: 40
			},

			events: {
				onFocus: function () {
					var view = this.getView();
					view.directionPointer = 'login';
				},
				onSelect: function () {
					MAF.application.loadView('view-LiveView');
				}
			}
		}).appendTo(leftWrap);
		/** LOGIN BUTTON **/

		/** TEXT WRAP **/
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
		/** TEXT WRAP **/

		/** SLIDER TITLE **/
		var titleSlider = new MAF.element.Text({
			ClassName: 'titleSlider',
			label: 'cum ma loghey cu facebook?',
			styles: {
				left: 100,
				fontSize: 45,
				fontFamily: 'FuturaStd'
			}
		}).appendTo(sliderWrap);
		/** SLIDER TITLE **/

	},

	updateView: function () {
		var view = this;
	},
	gotKeyPress: function (evt) {
		
		var view = this.getView();
		switch (evt.payload.key) {
			case 'right':
				if (view.directionPointer === 'backButton') this.elements.playButton.focus();
				break;
		}
		return;

	},
	destroyView: function () {
		MAF.messages.reset();
		this.gotKeyPressEvent.unsubscribeFrom(MAF.application, 'onWidgetKeyPress');
	}
});
