var myrequest = require('./httprequest/httprequest');

/*
* methods to access all applications related services from the BlueApp platform
*/

exports.getApplications = function(params, successHandler, errorHandler){
    myrequest.sendHttpRequests('', '/v1/organizations/'+params.orgid+'/applications', 'GET', successHandler, errorHandler);
};

exports.updateAppFromOrg = function(params, successHandler, errorHandler){
    myrequest.sendHttpRequests('', '/v1/organizations/'+params.orgid+'/applications/'+params.appid, 'PUT', successHandler, errorHandler);
};

/*
* Location App:
*/
exports.getLocationGatewaysByOrg = function(params, successHandler, errorHandler){
    myrequest.sendHttpRequests('', '/v1/organizations/'+params.orgid+'/locations/gateways', 'GET', successHandler, errorHandler);
};

exports.getAllLocationGateways = function(successHandler, errorHandler){
    myrequest.sendHttpRequests('', '/v1/locations/gateways_all', 'GET', successHandler, errorHandler);
};

exports.getLocationPeripheralsByOrg = function(params, successHandler, errorHandler){
    myrequest.sendHttpRequests('', '/v1/organizations/'+params.orgid+'/locations/peripherals', 'GET', successHandler, errorHandler);
};

exports.getAllLocationPeripherals = function(successHandler, errorHandler){
    myrequest.sendHttpRequests('', '/v1/locations/peripherals_all', 'GET', successHandler, errorHandler);
};

exports.updateLocationGatewaysByOrg = function(params, successHandler, errorHandler){
    myrequest.sendHttpRequests('', '/v1/organizations/'+params.orgid+'/locations/gateways', 'POST', successHandler, errorHandler);
};

exports.updateLocationPeripheralsByOrg = function(params, successHandler, errorHandler){
    myrequest.sendHttpRequests('', '/v1/organizations/'+params.orgid+'/locations/peripherals', 'POST', successHandler, errorHandler);
};
