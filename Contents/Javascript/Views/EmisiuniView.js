
var EmisiuniView = new MAF.Class({
    ClassName: 'EmisiuniView',

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

        if (event.payload.key === 'ChannelsData') {
            if (event.payload.value.length > 0) {
                elements.sliderLeft.changeDataset(event.payload.value, true);
                elements.sliderLeft.focus();
            } else {
                elements.sliderLeft.visible = false;
            }
        }
        if (event.payload.key === 'ChannelData') {
            if (event.payload.value.length > 0) {
                elements.slider.changeDataset(event.payload.value, true);
                elements.slider.focus();
            } else {
                elements.slider.visible = false;
            }
        }
        if (event.payload.key === 'Antena Stars') {
            if (event.payload.value.length > 0) {
                elements.slider.changeDataset(event.payload.value, true);
                elements.slider.focus();
            } else {
                elements.slider.visible = false;
            }
        }
        if (event.payload.key === 'Antena Monden') {
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
        getChannelsData();
        getChannelData();
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
        createHeader(view, "EMISIUNI");
        /** HEADER **/

        /** LEFT WRAPPER **/
        var leftWrap = this.elements.leftWrap = new MAF.element.Container({

            styles: {
                width: 450,
                height: 850,
                paddingLeft: 150,
                hOffset: 100,
                vOffset: 150,
                backgroundColor: 'SPECIALCOLOR',
                zIndex: 2
            }
        }).appendTo(view);
        /** LEFT WRAPPER **/

        createChannelSlider(view, leftWrap, 9, 0);

        /** CONTENT SLIDER WRAP **/
        var sliderWrap = this.elements.sliderWrap = new MAF.element.Container({

            styles: {
                left: '30%',
                width: 1100,
                height: 800,
                paddingLeft: 150,
                vOffset: 150,
                backgroundColor: 'SPECIALCOLOR',
                zIndex: 2,
                borderLeft: 'solid #333131 3px'
            }
        }).appendTo(view);
        /** CONTENT SLIDER WRAP **/

        createContentSlider(view, sliderWrap, 4);
    },

    updateView: function () {
        var view = this;
    },
    gotKeyPress: function (evt) {
        var view = this.getView();

        switch (evt.payload.key) {
            case 'left':
                if (view.directionPointer === 'slider') this.elements.sliderLeft.focus();
                break;
            case 'right':
                if (view.directionPointer === 'sliderLeft') this.elements.slider.focus();
                else if (view.directionPointer === 'backButton') this.elements.slider.focus();
                break;
        }
        return;

    },
    destroyView: function () {
        MAF.messages.reset();
        this.gotKeyPressEvent.unsubscribeFrom(MAF.application, 'onWidgetKeyPress');
    }
});
