//Config
include("Javascript/config.js");

// Include your views
include('Javascript/Views/HomeView.js');


//Theme
include("Javascript/Theme/Main.theme.js");


//Components
include('Javascript/Components/Header.js');

// Init application with view config
MAF.application.init({
	views: [
		{ id: 'view-HomeView', viewClass: HomeView }
	],
	defaultViewId: 'view-HomeView'
});
