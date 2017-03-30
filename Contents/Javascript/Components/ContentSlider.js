 function createContentSlider(view, sliderWrap, visibleCells) {
 var slider = view.elements.slider = new MAF.element.SlideCarousel({
        ClassName: 'contentSlider',
        visibleCells: visibleCells,
        slideDuration: 0.2,
        subCells: 1,
        cellsSpacing: 10,
        orientation: 'vertical',
        carousel: false,
        dynamicFocus: true,
        dynamicFocusEnd: 1,
        dynamicFocusStart: 0,
        styles: {
            width: sliderWrap.width,
            height: sliderWrap.height + 60,
            fontSize:16,      
            backgroundColor: SPECIALCOLOR
            
        },

        cellCreator: function () {

            var cell = new MAF.element.SlideCarouselCell({
                
                styles: this.getCellDimensions(),
                 
                 ClassName: 'cellWrap',
                   theme: false,
                    events: {
                    onFocus: function () {
                        this.animate({
							duration: 0.2                                                  						
						});
                    },
                    onBlur: function () {
                        this.animate({
								duration: 0.2
						});
                    },                    
                    onSelect: function () {
                         MAF.application.loadView('view-DetailsView');
                    }                          
                }
            });

           cell.imageCont = new MAF.element.Container({
                   
					styles: {
						width: slider.width-40,						
                        height: sliderWrap.height/4 - 10,
                        hOffset: 20,
				        vOffset: 20,				
					}
				}).appendTo(cell);

            cell.image = new MAF.element.Image({
               
                styles: {
                    top:17.5,
                    left:20,
                    width: 340,                   
                    height: sliderWrap.height/4 - 50
                }
            }).appendTo(cell.imageCont);

            cell.text = new MAF.element.Core({
               theme:false,
                styles: {
                    left:  cell.image.width + 40,                    
                    top:20,                    
                    width: cell.width/2-60,
                    height: sliderWrap.height/4 - 50,
                    paddingLeft:10,
                    paddingTop:0,
                    fontSize:65
                }
            }).appendTo(cell.imageCont);

            cell.title = new MAF.element.Text({               
                styles: {                                   
                    width: cell.text.width,
                    height: 4*(sliderWrap.height/4 - 50)/10,                    
                    fontSize: 0.4*4*(sliderWrap.height/4 - 50)/10,
                    fontFamily: 'FuturaStd'             
                }
            }).appendTo(cell.text);

            cell.date = new MAF.element.Text({               
                styles: {    
                    top: 3.5*(sliderWrap.height/4 - 50)/10,                              
                    width: cell.text.width,
                    height: 3*(sliderWrap.height/4 - 50)/10,                    
                    fontSize: 0.35*3*(sliderWrap.height/4 - 50)/10
                }
            }).appendTo(cell.text);
                 
            cell.provider = new MAF.element.Text({               
                styles: {    
                    top: 6*(sliderWrap.height/4 - 50)/10,                              
                    width: cell.text.width,
                    height: 3*(sliderWrap.height/4 - 50)/10,                    
                    fontSize: 0.35*3*(sliderWrap.height/4 - 50)/10,
                    color: '#8B8B8B'
                }
            }).appendTo(cell.text);

            return cell;
        },

        cellUpdater: function (cell, data) {  
            cell.image.setSources({
					src: data.img,
					missingSrc: 'Images/no-thumb.jpg'
				});
                
                cell.title.setText(data.title);
                cell.date.setText(data.day);
                cell.provider.setText(data.provider);
        },

        events: {
            onDatasetChanged: function () {
                    	this.animate({
						opacity: 1,
						duration: 0.2
					});
            }
        }
    }).appendTo(sliderWrap);
 }