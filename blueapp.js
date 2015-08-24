/**
 * Module dependencies.
 */

var user = require('./routes/user');
var device = require('./routes/devices');
var applications = require('./routes/applications');
var org = require('./routes/organizations');

var myrequest = require('./routes/httprequest/httprequest');



/*
* Get Proxy Server
*/
var getProxyServerUrl = function(successHandler, errorHandler){
	var callback = function(result){successHandler(result[0].name)};
    myrequest.sendHttpRequests('', '/v1/proxyservers', 'GET', callback, errorHandler);
};

var getDeviceAuthToken = function(params, successHandler, errorHandler){
    myrequest.sendHttpRequests(params, '/v1/getauthtoken', 'POST', successHandler, errorHandler);
};



// ################## EXPORT ALL METHODS ################## //

module.exports = {
	//Users related

	login: user.login,
	whoAmI: user.whoAmI,
	logout: user.logout,
	updateUser: user.updateUser,

	//Organizations related
	getOrganizations:org.getOrganizations,
	getOrganization:org.getOrganization,
	
	//Devices related
	getDeviceTypes: device.getDeviceTypes,
	addDevice: device.addDevice,
	deleteDevice:device.deleteDevice,
	getDevices: device.getDevices,
	getDevice: device.getDevice,
	getGateways: device.getGateways,
	getPeripherals: device.getPeripherals,
	updateDevice: device.updateDevice,
	getUUIDsFromDevice: device.getUUIDsFromDevice,
	findDeviceByUUID: device.findDeviceByUUID,

	//Devices - Tages related
	getAllTags: device.getAllTags,
	addTagForDevice: device.addTagForDevice,

	//Applications related
	getApplications: applications.getApplications,
	updateAppFromOrg: applications.updateAppFromOrg,

	//Applications - Locations app related
	getLocationGatewaysByOrg: applications.getLocationGatewaysByOrg,
	getAllLocationGateways: applications.getAllLocationGateways,
	getAllLocationPeripherals: applications.getAllLocationPeripherals,
	getLocationPeripheralsByOrg: applications.getLocationPeripheralsByOrg,
	updateLocationGatewaysByOrg: applications.updateLocationGatewaysByOrg, // send only selected gateways array from the 'getLocationGatewaysByOrg'.
	updateLocationPeripheralsByOrg: applications.updateLocationPeripheralsByOrg, // send only selected peripherals array from the 'getLocationPeripheralsByOrg'.

	getProxyServerUrl:getProxyServerUrl,
	getDeviceAuthToken:getDeviceAuthToken,

	getNotifications:device.getNotifications,
	createNotification:device.createNotification,
	deleteNotification:device.deleteNotification
};

