
var LiveView = new MAF.Class({
	ClassName: 'LiveView',

	Extends: MAF.system.FullscreenView,
	initialize: function () {		
		var view = this;
		view.parent(); 		
		view.registerMessageCenterListenerCallback(view.dataHasChanged);
	},

	dataHasChanged: function (event) {
		var view = this,
			elements = view.elements;
			log('dejan');
		if (event.payload.key === 'AntenaData') {
			if (event.payload.value.length > 0) {
				elements.slider.changeDataset(event.payload.value, true);
				//elements.slider.visible = true;
				elements.slider.focus();
			} else {
				elements.slider.visible = false;
			}
		}
	},

	createView: function () {

		var view = this;

		/** MAIN CONTAINER **/
		var antennaContainer = new MAF.element.Container({
			styles: {
				width: view.width,
				height: view.height,
				backgroundColor: SPECIALCOLOR
			}
		}).appendTo(view);
		/** MAIN CONTAINER **/

		/** BACKGROUND IMAGE **/
		var antennaInitImage = new MAF.element.Image({
			//src: 'Images/Homepage-background-Image.jpg',
			styles: {
				top: 0,
				width: view.width,
				height: antennaContainer.height - 300,
				anchorStyle: 'center'
			}
		}).appendTo(antennaContainer);
		/** BACKGROUND IMAGE **/

		/** HEADER **/
		createHeader(view, "LIVE")
		/** HEADER IMAGE **/

		/** LIVE SLIDER **/
		var slider = view.elements.slider = new MAF.element.SlideCarousel({
			visibleCells: 6,
			dynamicFocusStart :0,
			dynamicFocus : true,
			focusIndex: 1,
			slideDuration: 0.5,
			subCells: 2,
			carousel : false,

			styles:{
				width: view.width - 200,
				height: 800,
				hOffset: 92,
				vOffset: this.height - 940
			},
			cellCreator: function () {
				var cell = new MAF.element.SlideCarouselCell({
					
					styles: this.getCellDimensions(),

					events: {
						onFocus: function () {
							MAF.messages.store( 'currentCell', this.getCellDataIndex(this) );
								
							this.imageCont.animate({
								duration: 0.2,
								width: slider.width/7+13,
								height: 347,
								hOffset:20,
								vOffset: 20,
								backgroundColor: SPECIALCOLOR,
                				borderRadius: 4,
                				border: "2px solid" + FOCUSCOLOR,
                				boxShadow: "0px 0px 10px 3px" + SHADOWCOLOR
							});
						},
						onBlur: function(){
							this.imageCont.animate({
								duration: 0.2,
								width: slider.width/7+10,
								height: 344,
								hOffset:20,
								vOffset: 20,
								backgroundColor: SPECIALCOLOR,
                				borderRadius: 4,
                				border: "2px solid" + SPECIALCOLOR,
								boxShadow: "0px 0px 10px 3px" + SPECIALCOLOR
							});

						}

					}
				});
				
				cell.imageCont = new MAF.element.Container({					
					styles: {
						width: slider.width/7+10,
						height: 344,
						hOffset: 20,
						vOffset: 20,
						backgroundColor: SPECIALCOLOR,
                		borderRadius: 4,
                		border: "2px solid" + SPECIALCOLOR
					}
				}).appendTo(cell);

				cell.image = new MAF.element.Image({
					styles: {
						padding:5,
						width: slider.width/7+10,
						height: 344
					}
				}).appendTo(cell.imageCont);

				return cell;
			},
			cellUpdater: function(cell, data){
				cell.image.setSources({
					src: data.img,
					missingSrc: 'Images/no-thumb.jpg'
				});
				
			},
			events: {
				onDatasetChanged: function(){
					this.getCurrentCell().focus();

					this.animate({
						opacity: 1,
						duration: 0.2
					});


				}
			}
		}).appendTo(antennaContainer);
		/** LIVE SLIDER **/
	},

	updateView: function() {
		var view = this;
		getAntenaData();
	}

});
