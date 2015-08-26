var user = require('./routes/user');
var device = require('./routes/devices');
var applications = require('./routes/applications');
var org = require('./routes/organizations');
var widgets = require('./routes/widgets');

var myrequest = require('./routes/httprequest/httprequest');


var getProxyServerUrl = function(successHandler, errorHandler) {
	var callback = function(result) {
		successHandler(result[0].name)
	};
	myrequest.sendHttpRequests('', '/v1/proxyservers', 'GET', callback, errorHandler);
};


var getNotifications = function(params, successHandler, errorHandler) {
	myrequest.sendHttpRequests('', '/v1/notifications', 'GET', successHandler, errorHandler);
};

var createNotification = function(params, successHandler, errorHandler) {
	myrequest.sendHttpRequests(params, '/v1/notifications', 'POST', successHandler, errorHandler);
};

var deleteNotification = function(params, successHandler, errorHandler) {
	myrequest.sendHttpRequests('', '/v1/notifications/' + params.token + '/' + params.noti_stat, 'DELETE', successHandler, errorHandler);
};


module.exports = {

	login: user.login,
	whoAmI: user.whoAmI,
	updateUser: user.updateUser,
	changeOrg: user.changeOrg,
	logout: user.logout,

	createOrganization: org.createOrganization,
	getOrganization: org.getOrganization,
	updateOrganization: org.updateOrganization,
	deleteOrganization: org.deleteOrganization,
	getOrganizations: org.getOrganizations,
	getUsersInOrg: org.getUsersInOrg,
	getUserRoles: org.getUserRoles,
	removeUserFromOrg: org.removeUserFromOrg,
	updateUserRoles: org.updateUserRoles,

	getDeviceTypes: device.getDeviceTypes,
	addDevice: device.addDevice,
	deleteDevice: device.deleteDevice,
	getDevices: device.getDevices,
	getDevice: device.getDevice,
	getGateways: device.getGateways,
	getPeripherals: device.getPeripherals,
	updateDevice: device.updateDevice,
	getUUIDsFromDevice: device.getUUIDsFromDevice,
	findDeviceByUUID: device.findDeviceByUUID,
	getDeviceAuthToken: device.getDeviceAuthToken,

	createTags: device.createTags,
	addTagsForDevice: device.addTagsForDevice,
	updateTagsForDevice: device.updateTagsForDevice,
	deleteTags: device.deleteTags,
	getAllTags: device.getAllTags,

	getWidgets: widgets.getWidgets,
	createWidget: widgets.createWidget,
	getWidget: widgets.getWidget,
	updateWidget: widgets.updateWidget,
	deleteWidget: widgets.deleteWidget,

	getApplications: applications.getApplications,
	updateAppFromOrg: applications.updateAppFromOrg,

	getProxyServerUrl: getProxyServerUrl,

	getNotifications: getNotifications,
	createNotification: createNotification,
	deleteNotification: deleteNotification
};
