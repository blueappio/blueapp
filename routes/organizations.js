var myrequest = require('./httprequest/httprequest');


exports.createOrganization = function(params, successHandler, errorHandler) {
    myrequest.sendHttpRequests(params, '/v1/organizations/', 'POST', successHandler, errorHandler);
};

exports.getOrganization = function(params, successHandler, errorHandler) {
    myrequest.sendHttpRequests('', '/v1/organizations/' + params.orgid, 'GET', successHandler, errorHandler);
};

exports.updateOrganization = function(params, successHandler, errorHandler) {
    myrequest.sendHttpRequests(params, '/v1/organizations/' + params.orgid, 'PUT', successHandler, errorHandler);
};

exports.deleteOrganization = function(params, successHandler, errorHandler) {
    myrequest.sendHttpRequests('', '/v1/organizations/' + params.orgid, 'DELETE', successHandler, errorHandler);
};

exports.getOrganizations = function(successHandler, errorHandler) {
    myrequest.sendHttpRequests('', '/v1/organizations', 'GET', successHandler, errorHandler);
};

exports.getUsersInOrg = function(params, successHandler, errorHandler) {
    myrequest.sendHttpRequests('', '/v1/organizations/' + params.orgid + '/users', 'GET', successHandler, errorHandler);
};

exports.getUserRoles = function(params, successHandler, errorHandler) {
    myrequest.sendHttpRequests('', '/v1/organizations/' + params.orgid + '/roles', 'GET', successHandler, errorHandler);
};

exports.removeUserFromOrg = function(params, successHandler, errorHandler) {
    myrequest.sendHttpRequests('', '/v1/organizations/' + params.orgid + '/user/' + params.userid, 'DELETE', successHandler, errorHandler);
};

exports.updateUserRoles = function(params, successHandler, errorHandler) {
    myrequest.sendHttpRequests(params, '/v1/organizations/' + params.orgid + '/user/' + params.userid + '/roles', 'PUT', successHandler, errorHandler);
};
