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
