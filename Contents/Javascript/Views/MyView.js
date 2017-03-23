
var MyView = new MAF.Class({
	ClassName: 'MyView',

	Extends: MAF.system.FullscreenView,

	createView: function () {

		var view = this;

		/** MAIN CONTAINER **/
		this.elements.antennaContainer = new MAF.element.Container({
			styles: {
				width: this.width,
				height: this.height,
				fontSize: 60,
				backgroundColor: SPECIALCOLOR
			}
		}).appendTo(this);
		/** MAIN CONTAINER **/

		/** BACKGROUND IMAGE **/
		this.elements.antennaInitImage = new MAF.element.Image({
			src: 'Images/Homepage-background-Image.jpg',
			styles: {
				top: 0,
				width: this.width,
				height: this.elements.antennaContainer.height - 300,
				fontSize: 60,
				anchorStyle: 'center'
			}
		}).appendTo(this.elements.antennaContainer);
		/** BACKGROUND IMAGE **/


		/** FOOTER BUTTON **/
		this.elements.footerButton = new MAF.element.Container({
			styles: {
				top: this.elements.antennaInitImage.height + 10,
				width: 1180,
				height: 180,
				marginLeft: (this.width - 1180) / 2,
				marginRight: (this.width - 1180) / 2,
				fontSize: 15
			}
		}).appendTo(this.elements.antennaContainer);

		/** FOOTER BUTTON **/

		/** BUTTONS **/

		this.elements.liveButton = new MAF.control.TextButton({
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

		this.elements.emisiuniButton = new MAF.control.TextButton({
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

		this.elements.favoriteButton = new MAF.control.TextButton({
			label: $_('FAVORITE'),
			ClassName: 'Button',
			theme: false,
			styles: {
				width: 270,
				height: 110,
				top: 35,
				left: this.elements.emisiuniButton.width + this.elements.liveButton.width + 60,
				paddingLeft: 45,
				paddingTop: 29
			}
		}).appendTo(this.elements.footerButton);


		this.elements.contButton = new MAF.control.TextButton({
			label: $_('CONT'),
			ClassName: 'Button',
			theme: false,
			styles: {
				width: 270,
				height: 110,
				top: 35,
				left: this.elements.emisiuniButton.width + this.elements.liveButton.width + this.elements.favoriteButton.width + 80,
				paddingLeft: 80,
				paddingTop: 29
			}
		}).appendTo(this.elements.footerButton);

		/** BUTTONS **/
		this.elements.logo = new MAF.element.Text({
			styles: {
				top: this.elements.antennaInitImage.height + this.elements.footerButton.height + 15,
				left: 800,
				width: this.width,
				height: this.height,
				fontSize: 60,
				anchorStyle: 'center',
				backgroundImage: 'Images/Antena-Logo.jpg',
				backgroundRepeat: 'no-repeat'
			}
		}).appendTo(this.elements.antennaContainer);
	},

	updateView: function () {
		var view = this;
	}

});
