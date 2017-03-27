//Config
include("Javascript/config.js");

//API
include("Javascript/API/getLiveContent.js");

// Include your views
include('Javascript/Views/HomeView.js');
include('Javascript/Views/LiveView.js');

//Theme
include("Javascript/Theme/Main.theme.js");

// Init application with view config
MAF.application.init({
	views: [
		{ id: 'view-HomeView', viewClass: HomeView },
		{ id: 'view-LiveView', viewClass: LiveView }
	],
	defaultViewId: 'view-HomeView'
});
