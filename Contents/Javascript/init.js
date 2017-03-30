//Config
include("Javascript/config.js");

//Theme
include("Javascript/Theme/Main.theme.js");

//API
include("Javascript/API/getLiveContent.js");

// Include your views
include('Javascript/Views/HomeView.js');
include('Javascript/Views/LiveView.js');
include('Javascript/Views/ContentSliderView.js');

//Components
include('Javascript/Components/Header.js');
include('Javascript/Components/ContentSlider.js');

// Init application with view config
MAF.application.init({
	views: [
		{ id: 'view-HomeView', viewClass: HomeView },
		{ id: 'view-LiveView', viewClass: LiveView },
		{ id: 'view-ContentSliderView', viewClass: ContentSliderView }
	],
	defaultViewId: 'view-HomeView'
});
