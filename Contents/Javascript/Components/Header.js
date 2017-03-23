function createHeader(view, wall) {

    var backButton = view.elements.backButton = new MAF.control.BackButton({
        ClassName: 'SpecialButton',
        label: FontAwesome.get('fa', ['fa-arrow-circle-left']) + '   ' + $_('Back'),
        styles: {
            width: 250,
            height: 70,
            left: 50,
            top: 50,
            fontWeight: 'bold',
            fontSize: 40
        }
    }).appendTo(wall);

    var logo = view.elements.logo = new MAF.element.Image(
        {
            src: 'Images/Antena-Logo.jpg',
            styles: {
                top: 20,
                width: 480,
                left: 1300
            }
        }
    ).appendTo(wall);

    var pageName = new MAF.element.Text(
        {
            label: 'hardcoded for now',
            styles: {
                top: 20,
                fontSize: 40,
                width: view.width,
                anchorStyle: 'center',
                textTransform: 'uppercase'
            }
        }
    ).appendTo(wall);
}