// Create a class and extended it from the MAF.system.SidebarView
var MyView = new MAF.Class({
	ClassName: 'MyView',

	Extends: MAF.system.FullscreenView,

	// Create your view template
	createView: function () {
		// Reference to the current view
		var view = this;

		this.elements.ourText = new MAF.element.Text( {
			label: $_('Hello World!'),
			styles:{
				width: this.width,
				height: this.height,
				fontSize: 60,
				anchorStyle: 'center'
			}
		} ).appendTo( this );
	},

	// After create view and when returning to the view
	// the update view is called
	updateView: function () {
		// Reference to the current view
		var view = this;
	}
});
