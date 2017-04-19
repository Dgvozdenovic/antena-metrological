Theme.Fonts.add('FuturaStd', 'Fonts/FuturaStdReg', ['woff']);
Theme.Fonts.add('FuturaStdBold', 'Fonts/FuturaStdBold', ['woff']);
Theme.Fonts.add('ProximaNovaBold', 'Fonts/ProximaNovaBold', ['woff']);
Theme.Fonts.add('ProximaNova', 'Fonts/ProximaNovaStandard', ['woff']);


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
                border: "2px solid transparent",
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

    'cellLeft .BaseText': {
        styles: {
            backgroundColor: SPECIALCOLOR,
            borderRadius: 7,
            border: "2px solid" + SPECIALCOLOR,
            'box-shadow': "0px 0px 10px 3px" + SPECIALCOLOR
        }

    },

    'cellLeft.focused .BaseText': {
        styles: {
            backgroundColor: SPECIALCOLOR,
            borderRadius: 7,
            border: "2px solid" + FOCUSCOLOR,
            'box-shadow': "0px 0px 10px 3px" + SHADOWCOLOR
        }
    },

    'titleSlider': {
        styles: {
            fontFamily: 'ProximaNovaBold'
        }
    }    
});