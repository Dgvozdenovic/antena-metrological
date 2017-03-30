
var DetailsView = new MAF.Class({
	ClassName: 'DetailsView',

	Extends: MAF.system.FullscreenView,
	initialize: function () {
		var view = this;
		view.parent();
		view.registerMessageCenterListenerCallback(view.dataHasChanged);
	},

	dataHasChanged: function (event) {
		var view = this,
			elements = view.elements;

		if (event.payload.key === 'DetailsData') {
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
		createHeader(view, "Chefi la Cutite");
		/** HEADER **/

        /** LEFT WRAPPER **/
        var leftWrap = this.elements.leftWrap = new MAF.element.Container({
			
            styles: {
				width: 800,
                height: 850,
                paddingLeft: 150,	
				hOffset:100,			
				vOffset: 150,				
				backgroundColor: 'SPECIALCOLOR',
				zIndex:2
            }
        }).appendTo(view);
		/** LEFT WRAPPER **/
		 
		 /** IMAGE LEFT WRAPPER **/
		 var imageWrap = new MAF.element.Image({
                src: 'Images/Details.jpg',
                styles: {
                    top:30,
                    left:50
                }
            }).appendTo(leftWrap);
		 /** IMAGE LEFT WRAPPER **/	

		 /** TITLE **/
		var title = new MAF.element.Text({
			    label: 'Chefi la Cutite',           
                styles: {   
					left:50,                                
                    width: 500,
					height: 70,
                    top: imageWrap.height + 480,                    
                    fontSize: 50,
                    fontFamily: 'FuturaStd'
                }
            }).appendTo(leftWrap);
		/** TITLE **/

		 /** SUBTITLE **/
        var subtitle = new MAF.element.Text({   
				label: 'Cea mai recenta editie',             
                styles: { 
					left:50,   
                    top: imageWrap.height + title.height + 480,                              
                    width: 500,
                    height: 60,                    
                    fontSize: 40
                }
            }).appendTo(leftWrap);
        /** SUBTITLE **/

		/** DATE **/
        var date = new MAF.element.Text({
			    label: '12.03.2017',                
                styles: {
					left:50,
                    top: imageWrap.height + title.height + subtitle.height + 480,                              
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
				top: imageWrap.height + title.height + subtitle.height + date.height + 520, 
				left: 50
			},			
			textStyles: {
				fontSize:40
			},
			events: {
                onSelect: function () {
                    MAF.application.loadView('view-LiveView');
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
				backgroundColor:'SPECIALCOLOR',
				zIndex:2,
				borderLeft: 'solid #333131 3px'
            }
        }).appendTo(view);
		/** CONTENT SLIDER WRAP **/
        
		/** SLIDER TITLE **/
        var titleSlider = new MAF.element.Text({  
			    label: 'Editii anterioare',           
                styles: {      
					left: 100,
					fontSize: 45,                  
                    fontFamily: 'FuturaStd'             
                }
        }).appendTo(sliderWrap);
		/** SLIDER TITLE **/

		createContentSlider(view, sliderWrap, 3);
	},

	updateView: function () {
		var view = this;
		getDetailsData();
	}

});
