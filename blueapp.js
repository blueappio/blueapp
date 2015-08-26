var user = require('./routes/user');
var devices = require('./routes/devices');
var applications = require('./routes/applications');
var organizations = require('./routes/organizations');
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

	createOrganization: organizations.createOrganization,
	getOrganization: organizations.getOrganization,
	updateOrganization: organizations.updateOrganization,
	deleteOrganization: organizations.deleteOrganization,
	getOrganizations: organizations.getOrganizations,
	getUsersInOrg: organizations.getUsersInOrg,
	getUserRoles: organizations.getUserRoles,
	removeUserFromOrg: organizations.removeUserFromOrg,
	updateUserRoles: organizations.updateUserRoles,

	getDeviceTypes: devices.getDeviceTypes,
	addDevice: devices.addDevice,
	deleteDevice: devices.deleteDevice,
	getDevices: devices.getDevices,
	getDevice: devices.getDevice,
	getGateways: devices.getGateways,
	getPeripherals: devices.getPeripherals,
	updateDevice: devices.updateDevice,
	getUUIDsFromDevice: devices.getUUIDsFromDevice,
	findDeviceByUUID: devices.findDeviceByUUID,
	getDeviceAuthToken: devices.getDeviceAuthToken,

	createTags: devices.createTags,
	addTagsForDevice: devices.addTagsForDevice,
	updateTagsForDevice: devices.updateTagsForDevice,
	deleteTags: devices.deleteTags,
	getAllTags: devices.getAllTags,

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
