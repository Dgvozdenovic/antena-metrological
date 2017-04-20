function createChannelSlider(view, sliderWrap, visibleCells, top, dataStore) {
    /** LEFT SLIDER */
    var sliderLeft = view.elements.sliderLeft = new MAF.element.SlideCarousel({
        ClassName: 'contentSlider',
        visibleCells: visibleCells,
        slideDuration: 0.2,
        subCells: 1,
        orientation: 'vertical',
        carousel: false,
        dynamicFocus: true,
        dynamicFocusEnd: 2,
        dynamicFocusStart: 0,
        styles: {
            top: top,
            width: sliderWrap.width - 60,
            height: sliderWrap.height + 40,
            fontSize: 16,
            backgroundColor: SPECIALCOLOR
        },

        cellCreator: function () {

            var cell = new MAF.element.SlideCarouselCell({

                styles: this.getCellDimensions(),

                ClassName: 'cellLeft',
                theme: false,

                events: {
                    onFocus: function () {
                        var view = this.getView();
                        view.directionPointer = 'sliderLeft';
                    },
                    onSelect: function () {
                        var takeChannel = this.getCellDataItem(this).title;
                        /*MAF.application.loadView('view-EmisiuniView', {
                            item: takeChannel
                        });*/
                        if(takeChannel=='Antena Stars') getAntenaStarsData();
                        else if(takeChannel=='Antena Monden') getAntenaMonden();
                    }
                }
            });

            cell.title = new MAF.element.Text({
                ClassName: 'titleSlider',
                styles: {
                    left: 15,
                    top: 5,
                    width: cell.width - 20,
                    height: cell.height - 50,
                    paddingLeft: 10,
                    paddingTop: 5,
                    fontSize: 60,
                    fontFamily: 'FuturaStd'
                }
            }).appendTo(cell);

            return cell;
        },

        cellUpdater: function (cell, data) {
            cell.title.setText(data.title);
        }
    }).appendTo(sliderWrap);
    /** LEFT SLIDER */

}