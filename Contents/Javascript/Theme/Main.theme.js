Theme.set({

    'Button': {
        normal: {
            styles: {
                backgroundColor: SPECIALCOLOR,
                borderRadius: 7,
                border: "2px solid" + BORDERCOLOR
            }
        },

        focused: {
            styles: {
                backgroundColor: FOCUSBACKGROUNDCOLOR,
                borderRadius: 7,
                border: "2px solid" + FOCUSCOLOR,
                boxShadow: "0px 0px 10px 3px" + SHADOWCOLOR
            }
        }
    },

    ControlBackButtonIcon: {
        styles: {
            display: 'none'
        }
    },

    SpecialButton: {
        normal: {
            styles: {
                color: 'white',
            }
        },

        focused: {
            styles: {
                color: 'black'
            }
        }
    },

    'cellWrap .BaseContainer': {
        styles: {
            backgroundColor: SPECIALCOLOR,
            borderRadius: 7,
            border: "2px solid" + SPECIALCOLOR,
            'box-shadow': "0px 0px 10px 3px" + SPECIALCOLOR
        }

    },

    'cellWrap.focused .BaseContainer': {
        styles: {
            backgroundColor: SPECIALCOLOR,
            borderRadius: 7,
            border: "2px solid" + FOCUSCOLOR,
            'box-shadow': "0px 0px 10px 3px" + SHADOWCOLOR
        }
    },

    /*cellWrap: {
        normal: {
            styles: {
                backgroundColor: SPECIALCOLOR,
                borderRadius: 7,
                border: "2px solid" + FOCUSCOLOR,
                'box-shadow': "0px 0px 10px 3px" + SPECIALCOLOR
            }
        },

        focused: {
            styles: {
                backgroundColor: SPECIALCOLOR,
                borderRadius: 7,
                border: "2px solid" + SPECIALCOLOR,
                'box-shadow': "0px 0px 10px 3px" + SHADOWCOLOR

            }
        }
    }*/
});