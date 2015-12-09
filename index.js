if(typeof process === 'object' && process + '' === '[object process]') {
	var blueappapi = require('swagger-client');
	var blueappgattip = require('gatt-ip-js');

	module.exports = {
		api: blueappapi,
		gattip: blueappgattip
	};
}
