/**
 * Module dependencies.
 */

var user = require('./routes/user');
var device = require('./routes/devices');
var applications = require('./routes/applications');
var org = require('./routes/organizations');
var widgets = require('./routes/widgets');

var myrequest = require('./routes/httprequest/httprequest');



/*
* Get Proxy Server
*/
var getProxyServerUrl = function(successHandler, errorHandler){
	var callback = function(result){successHandler(result[0].name)};
    myrequest.sendHttpRequests('', '/v1/proxyservers', 'GET', callback, errorHandler);
};


									// ################## NOTIFICATIONS ################## //

var getNotifications = function(params, successHandler, errorHandler){
    myrequest.sendHttpRequests('', '/v1/notifications', 'GET', successHandler, errorHandler);
};

var createNotification = function(params, successHandler, errorHandler){
    myrequest.sendHttpRequests(params, '/v1/notifications', 'POST', successHandler, errorHandler);
};

var deleteNotification = function(params, successHandler, errorHandler){
    myrequest.sendHttpRequests('', '/v1/notifications/'+params.token+'/'+params.noti_stat, 'DELETE', successHandler, errorHandler);
};



									// ################## EXPORT ALL METHODS ################## //

module.exports = {

	//Users = 5
	login: user.login,
	whoAmI: user.whoAmI,
	updateUser: user.updateUser,
	changeOrg: user.changeOrg,
	logout: user.logout,	

	//Organizations = 9
	createOrganization: org.createOrganization,
	getOrganization: org.getOrganization,
	updateOrganization: org.updateOrganization,
	deleteOrganization: org.deleteOrganization,	
	getOrganizations: org.getOrganizations,
	getUsersInOrg: org.getUsersInOrg,
	getUserRoles: org.getUserRoles,
	removeUserFromOrg: org.removeUserFromOrg,
	updateUserRoles: org.updateUserRoles,

	//Devices related = 11
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
	getDeviceAuthToken: device.getDeviceAuthToken,

	//Tags = 5
	createTags: device.createTags,
	addTagsForDevice: device.addTagsForDevice,
	updateTagsForDevice: device.updateTagsForDevice,
	deleteTags: device.deleteTags,
	getAllTags: device.getAllTags,

	//Widgets = 5
	getWidgets: widgets.getWidgets,
	createWidget: widgets.createWidget,
	getWidget: widgets.getWidget,
	updateWidget: widgets.updateWidget,
	deleteWidget: widgets.deleteWidget,

	//Applications = 2
	getApplications: applications.getApplications,
	updateAppFromOrg: applications.updateAppFromOrg,

	getProxyServerUrl:getProxyServerUrl,	

	getNotifications:getNotifications,
	createNotification:createNotification,
	deleteNotification:deleteNotification,


	//Applications - Locations app related
	getLocationGatewaysByOrg: applications.getLocationGatewaysByOrg,
	getAllLocationGateways: applications.getAllLocationGateways,
	getAllLocationPeripherals: applications.getAllLocationPeripherals,
	getLocationPeripheralsByOrg: applications.getLocationPeripheralsByOrg,
	updateLocationGatewaysByOrg: applications.updateLocationGatewaysByOrg, // send only selected gateways array from the 'getLocationGatewaysByOrg'.
	updateLocationPeripheralsByOrg: applications.updateLocationPeripheralsByOrg, // send only selected peripherals array from the 'getLocationPeripheralsByOrg'.

};

