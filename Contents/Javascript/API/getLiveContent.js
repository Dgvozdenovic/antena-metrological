var getAntenaData = function () {	
	MAF.utility.WaitIndicator.up();
	file='data.json';
	new Request({
		url: 'Javascript/Utility/'+file,
		onSuccess: function(data) {			
			MAF.messages.store('AntenaData', data || []);
			MAF.utility.WaitIndicator.down();
		}
	}).send();
};

var getDetailsData = function () {	
	MAF.utility.WaitIndicator.up();
	file='details.json';
	new Request({
		url: 'Javascript/Utility/'+file,
		onSuccess: function(data) {			
			MAF.messages.store('DetailsData', data || []);
			MAF.utility.WaitIndicator.down();
		}
	}).send();
};