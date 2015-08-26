var myrequest = require('./httprequest/httprequest');


exports.login = function(params, successHandler, errorHandler) {
    myrequest.sendHttpRequests(params, '/v1/login', 'POST', successHandler, errorHandler);
};

exports.whoAmI = function(successHandler, errorHandler) {
    myrequest.sendHttpRequests('', '/v1/users/me', 'GET', successHandler, errorHandler);
};

exports.updateUser = function(params, successHandler, errorHandler) {
    myrequest.sendHttpRequests(params, '/v1/users/me', 'PUT', successHandler, errorHandler);
};

exports.changeOrg = function(params, successHandler, errorHandler) {
    myrequest.sendHttpRequests('', '/v1/organizations/' + params.orgid + '/users', 'PUT', successHandler, errorHandler);
};

exports.logout = function(successHandler, errorHandler) {
    myrequest.sendHttpRequests('', '/v1/logout', 'GET', successHandler, errorHandler);
};
