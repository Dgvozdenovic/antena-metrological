
var HomeView = new MAF.Class({
	ClassName: 'HomeView',

	Extends: MAF.system.FullscreenView,

	createView: function () {

		var view = this;

		/** MAIN CONTAINER **/
		var antennaContainer = new MAF.element.Container({
			styles: {
				width: view.width,
				height: view.height,
				fontSize: 60,
				backgroundColor: SPECIALCOLOR
			}
		}).appendTo(this);
		/** MAIN CONTAINER **/

		/** BACKGROUND IMAGE **/
		var antennaInitImage = new MAF.element.Image({
			src: 'Images/Homepage-background-Image.jpg',
			styles: {
				top: 0,
				width: view.width,
				height: antennaContainer.height - 300,
				fontSize: 60,
				anchorStyle: 'center'
			}
		}).appendTo(antennaContainer);
		/** BACKGROUND IMAGE **/


		/** FOOTER BUTTON **/
		view.elements.footerButton = new MAF.element.Container({
			styles: {
				top: antennaInitImage.height + 10,
				width: 1180,
				height: 180,
				marginLeft: (view.width - 1180) / 2,
				marginRight: (view.width - 1180) / 2,
				fontSize: 15
			}
		}).appendTo(antennaContainer);

		/** FOOTER BUTTON **/

		/** BUTTONS **/

		view.elements.liveButton = new MAF.control.TextButton({
			label: $_('LIVE'),
			ClassName: 'Button',
			theme: false,
			styles: {
				width: 270,
				height: 110,
				top: 35,
				left: 20,
				paddingLeft: 90,
				paddingTop: 29
			}
		}).appendTo(this.elements.footerButton);

		view.elements.emisiuniButton = new MAF.control.TextButton({
			label: $_('EMISIUNI'),
			ClassName: 'Button',
			theme: false,
			styles: {
				width: 270,
				height: 110,
				top: 35,
				left: this.elements.liveButton.width + 40,
				paddingLeft: 50,
				paddingTop: 29
			},
		}).appendTo(this.elements.footerButton);

		view.elements.favoriteButton = new MAF.control.TextButton({
			label: $_('FAVORITE'),
			ClassName: 'Button',
			theme: false,
			styles: {
				width: 270,
				height: 110,
				top: 35,
				left: view.elements.emisiuniButton.width + view.elements.liveButton.width + 60,
				paddingLeft: 45,
				paddingTop: 29
			}
		}).appendTo(view.elements.footerButton);


		view.elements.contButton = new MAF.control.TextButton({
			label: $_('CONT'),
			ClassName: 'Button',
			theme: false,
			styles: {
				width: 270,
				height: 110,
				top: 35,
				left: view.elements.emisiuniButton.width + view.elements.liveButton.width + view.elements.favoriteButton.width + 80,
				paddingLeft: 80,
				paddingTop: 29
			}
		}).appendTo(view.elements.footerButton);

		/** BUTTONS **/
		new MAF.element.Text({
			styles: {
				top: antennaInitImage.height + view.elements.footerButton.height + 15,
				left: 800,
				width: view.width,
				height: view.height,
				fontSize: 60,
				anchorStyle: 'center',
				backgroundImage: 'Images/Antena-Logo.jpg',
				backgroundRepeat: 'no-repeat'
			}
		}).appendTo(antennaContainer);
	},

	updateView: function () {
		var view = this;
	}

});
