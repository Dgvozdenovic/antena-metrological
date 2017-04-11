var getInitialized = function () {
	MAF.utility.WaitIndicator.up();
	file = 'channels.json';
	new Request({
		url: 'Javascript/Utility/' + file,
		onSuccess: function (data) {
			MAF.messages.store('Initialized', data || []);
			MAF.utility.WaitIndicator.down();
		}
	}).send();
};

var getFavoriteData = function () {
	MAF.utility.WaitIndicator.up();
	file = 'channels.json';
	new Request({
		url: 'Javascript/Utility/' + file,
		onSuccess: function (data) {
			MAF.messages.store('FavoriteData', data || []);
			MAF.utility.WaitIndicator.down();
		}
	}).send();
};

var getDetailsData = function () {
	MAF.utility.WaitIndicator.up();
	file = 'details.json';
	new Request({
		url: 'Javascript/Utility/' + file,
		onSuccess: function (data) {
			MAF.messages.store('DetailsData', data || []);
			MAF.utility.WaitIndicator.down();
		}
	}).send();
};

var getChannelsData = function () {
	MAF.utility.WaitIndicator.up();
	file = 'channels.json';
	new Request({
		url: 'Javascript/Utility/' + file,
		onSuccess: function (data) {
			MAF.messages.store('ChannelsData', data || []);
			MAF.utility.WaitIndicator.down();
		}
	}).send();
};

var getChannelData = function () {
	MAF.utility.WaitIndicator.up();
	file = 'channel.json';
	new Request({
		url: 'Javascript/Utility/' + file,
		onSuccess: function (data) {
			MAF.messages.store('ChannelData', data || []);
			MAF.utility.WaitIndicator.down();
		}
	}).send();
};

var getAntenaStarsData = function () {
	MAF.utility.WaitIndicator.up();
	file = 'antenastars.json';
	new Request({
		url: 'Javascript/Utility/' + file,
		onSuccess: function (data) {
			MAF.messages.store('Antena Stars', data || []);
			MAF.utility.WaitIndicator.down();
		}
	}).send();
};

var getProgramsData = function () {
	MAF.utility.WaitIndicator.up();
	file = 'program.json';
	new Request({
		url: 'Javascript/Utility/' + file,
		onSuccess: function (data) {
			MAF.messages.store('ProgramData', data || []);
			MAF.utility.WaitIndicator.down();
		}
	}).send();
};