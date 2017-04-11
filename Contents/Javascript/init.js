//Config
include("Javascript/config.js");

//Theme
include("Javascript/Theme/Main.theme.js");

//API
include("Javascript/API/getContent.js");

// Include your views
include('Javascript/Views/HomeView.js');
include('Javascript/Views/LiveView.js');
include('Javascript/Views/FavoriteView.js');
include('Javascript/Views/DetailsView.js');
include('Javascript/Views/ContentSliderView.js');
include('Javascript/Views/EmisiuniView.js');
include('Javascript/Views/ChannelLiveView.js');
include('Javascript/Views/LoginView.js');


//Components
include('Javascript/Components/Header.js');
include('Javascript/Components/ContentSlider.js');
include('Javascript/Components/ProgramContentSlider.js');

// Init application with view config
MAF.application.init({
	views: [
		{ id: 'view-HomeView', viewClass: HomeView },
		{ id: 'view-LiveView', viewClass: LiveView },
		{ id: 'view-FavoriteView', viewClass: FavoriteView },
		{ id: 'view-DetailsView', viewClass: DetailsView },
		{ id: 'view-ContentSliderView', viewClass: ContentSliderView },
		{ id: 'view-EmisiuniView', viewClass: EmisiuniView },
		{ id: 'view-ChannelLiveView', viewClass: ChannelLiveView },
		{ id: 'view-LoginView', viewClass: LoginView }
	],
	defaultViewId: 'view-HomeView'
});
