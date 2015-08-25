
var myrequest = require('./httprequest/httprequest');

/*
* methods to access all user services from the BlueApp platform
*/


exports.getWidgets = function(params, successHandler, errorHandler){
    myrequest.sendHttpRequests('', '/v1/organizations/'+params.orgid+'/widgets', 'GET', successHandler, errorHandler);
};

exports.createWidget = function(params, successHandler, errorHandler){
    myrequest.sendHttpRequests(params, '/v1/organizations/'+params.orgid+'/widgets', 'POST', successHandler, errorHandler);
};

exports.getWidget = function(params, successHandler, errorHandler){
    myrequest.sendHttpRequests('', '/v1/organizations/'+params.orgid+'/widgets/'+params.widgetid, 'GET', successHandler, errorHandler);
};

exports.updateWidget = function(params, successHandler, errorHandler){
    myrequest.sendHttpRequests(params, '/v1/organizations/'+params.orgid+'/widgets/'+params.widgetid, 'PUT', successHandler, errorHandler);
};

exports.deleteWidget = function(params, successHandler, errorHandler){
    myrequest.sendHttpRequests('', '/v1/organizations/'+params.orgid+'/widgets/'+params.widgetid, 'DELETE', successHandler, errorHandler);
};