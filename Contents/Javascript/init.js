//Theme
include("Javascript/Theme/Main.theme.js");

// Include your views
include('Javascript/Views/Main.js');

//Components
include('Javascript/Components/Header.js');

// Init application with view config
MAF.application.init({
	views: [
		{ id: 'view-Main', viewClass: Main },
		{ id: 'view-About', viewClass: MAF.views.AboutBox }
	],
	defaultViewId: 'view-Main', // Declare what view to be loaded when opening the app
	settingsViewId: 'view-About' // Declare what view is opened when a used loads the settings
});
