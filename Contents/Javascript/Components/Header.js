function createHeader(view, title) {

    var headerWrapper = view.elements.headerWrapper = new MAF.element.Text({
        styles: {
            width: view.width,
            height: 120,
            backgroundColor: 'purple'
        }

    }).appendTo(view);

    new MAF.control.BackButton({
        ClassName: 'SpecialButton',
        label: FontAwesome.get('fa', ['fa-arrow-circle-left']) + '   ' + $_('Back'),
        styles: {
            width: headerWrapper.width/4,
            top: 0,
            left: 0,
            fontWeight: 'bold',
            fontSize: 40,
            verticalAlign: 'middle',
            height: headerWrapper.height
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
                left: view.width/4,
                fontSize: 40,
                width: view.width/2,
                textAlign: 'center',
                textTransform: 'uppercase',
                height: headerWrapper.height/2
            }
        }
    ).appendTo(headerWrapper);

    new MAF.element.Image(
        {
            src: 'Images/Antena-Logo.jpg',
            styles: {
                top: 0,
                width: headerWrapper.width/4,
                right: 0,
                height: headerWrapper.height
            }
        }
    ).appendTo(headerWrapper);

}