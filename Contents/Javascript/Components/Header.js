function createHeader(view, title) {

    var headerWrapper = view.elements.headerWrapper = new MAF.element.Text({
        styles: {
            width: view.width,
            height: 120,
            backgroundImage: 'Images/backgroundAntenaHeaderImg.jpg',
            backgroundRepeat: 'repeat-x',
            border: "1px solid",
            borderColor: '#141414'
        }

    }).appendTo(view);

    view.elements.backButton = new MAF.control.BackButton({
        ClassName: 'SpecialButton',
        label: FontAwesome.get('fa', ['fa-arrow-circle-left']) + '   ' + $_('Inapoi'),
        styles: {
            width: headerWrapper.width / 6,
            top: 20,
            left: 20,
            fontWeight: 'bold',
            fontSize: 40,
            verticalAlign: 'middle',
            height: headerWrapper.height - 40,
            color: 'white'

        },
        events: {
            onFocus: function () {
                view.directionPointer = 'backButton';
            }
        }
    }).appendTo(headerWrapper);

    new MAF.element.Text(
        {
            ClassName: 'PageName',
            label: title,
            textStyles: {
                verticalAlign: 'middle'
            },
            styles: {
                top: 35,
                left: view.width / 4,
                fontSize: 40,
                width: view.width / 2,
                textAlign: 'center',
                textTransform: 'uppercase',
                height: headerWrapper.height / 2
            }
        }
    ).appendTo(headerWrapper);

    new MAF.element.Image(
        {
            src: 'Images/Antena-Logo.jpg',
            styles: {
                top: 20,
                width: headerWrapper.width / 6,
                right: 20,
                height: headerWrapper.height - 40
            }
        }
    ).appendTo(headerWrapper);

}