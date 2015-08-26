var myrequest = require('./httprequest/httprequest');


exports.getApplications = function(params, successHandler, errorHandler) {
	myrequest.sendHttpRequests('', '/v1/organizations/' + params.orgid + '/applications', 'GET', successHandler, errorHandler);
};

exports.updateAppFromOrg = function(params, successHandler, errorHandler) {
	myrequest.sendHttpRequests('', '/v1/organizations/' + params.orgid + '/applications/' + params.appid, 'PUT', successHandler, errorHandler);
};
