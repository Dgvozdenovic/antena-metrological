function createProgramContentSlider(view, sliderWrap, visibleCells, top) {
    var slider = view.elements.slider = new MAF.element.SlideCarousel({
        ClassName: 'contentSlider',
        visibleCells: visibleCells,
        top: top,
        slideDuration: 0.2,
        subCells: 1,
        cellsSpacing: 10,
        orientation: 'vertical',
        carousel: false,
        dynamicFocus: true,
        dynamicFocusEnd: 2,
        dynamicFocusStart: 0,
        styles: {
            top: top,
            width: sliderWrap.width,
            height: sliderWrap.height - 100,
            fontSize: 16,
            backgroundColor: SPECIALCOLOR
        },

        cellCreator: function () {

            var cell = new MAF.element.SlideCarouselCell({

                styles: this.getCellDimensions(),
                ClassName: 'cellWrap',
                theme: false,
                events: {
                    onFocus: function () {
                        view.directionPointer = 'slider';

                    }
                }
            });

            cell.descriptionBox = new MAF.element.Container({

                styles: {
                    width: slider.width - 40,
                    height: sliderWrap.height / 6,
                    hOffset: 20,
                    vOffset: 20,
                }
            }).appendTo(cell);

            cell.title = new MAF.element.Text({
                styles: {
                    top: 10,
                    left: 20,
                    width: cell.descriptionBox.width,
                    height: 4 * (sliderWrap.height / 4 - 50) / 10,
                    fontSize: 4 * (sliderWrap.height / 4 - 50) / 10,
                    fontFamily: 'FuturaStd'
                }
            }).appendTo(cell.descriptionBox);

            cell.acum = new MAF.element.Text({
                label: 'ACUM',
                styles: {
                    top: 4 * (sliderWrap.height / 4 - 50) / 10 + 10,
                    left: cell.descriptionBox.width / 4 + 40,
                    width: cell.descriptionBox.width / 4 - 30,
                    height: 3 * (sliderWrap.height / 4 - 50) / 10 + 5,
                    fontSize: 3 * (sliderWrap.height / 4 - 50) / 10,
                    fontWeight: 'bold',
                    color: 'black',
                    backgroundColor: 'white',
                    paddingLeft: 20,
                    paddingTop: 5,
                    visible: false
                }
            }).appendTo(cell.descriptionBox);


            cell.time = new MAF.element.Text({
                styles: {
                    top: 4 * (sliderWrap.height / 4 - 50) / 10,
                    left: 20,
                    width: cell.descriptionBox.width / 2,
                    height: 3 * (sliderWrap.height / 4 - 50) / 10,
                    fontSize: 5 * (sliderWrap.height / 4 - 50) / 10,
                    color: '#5F5F5F'
                }
            }).appendTo(cell.descriptionBox);

            return cell;
        },

        cellUpdater: function (cell, data) {
            var startTime = data.time.match(/\s*[\d]+/g);
            var endTime = data.endTime.match(/\s*[\d]+/g);
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            log(endTime[0]); log(m);
            if (startTime[0] <= h && endTime[0] >= h) {
                if (endTime[0] == h && endTime[1] <= m) {
                    log(h); log(m); log(startTime[0]);
                    cell.acum.visible = false;
                }
                else cell.acum.visible = true;
            }
            else cell.acum.visible = false;
            cell.title.setText(data.title);
            cell.time.setText(data.time);
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