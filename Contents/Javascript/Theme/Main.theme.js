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
    }

});