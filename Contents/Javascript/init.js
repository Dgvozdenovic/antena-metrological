//Config
include("Javascript/config.js");

// Include your views
include('Javascript/Views/MyView.js');


//Theme
include("Javascript/Theme/Main.theme.js");


// Init application with view config
MAF.application.init({
	views: [
		{ id: 'view-MyView', viewClass: MyView }
	],
	defaultViewId: 'view-MyView'

});
