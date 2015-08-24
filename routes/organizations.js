var myrequest = require('./httprequest/httprequest');

/*
* methods to access all organizations related services from the BlueApp platform
*/

									// ################## ORGANIZATIONS ################## //

exports.getOrganizations = function(successHandler, errorHandler){
    myrequest.sendHttpRequests('', '/v1/organizations', 'GET', successHandler, errorHandler);
};

exports.getOrganization = function(params, successHandler, errorHandler){
    myrequest.sendHttpRequests('', '/v1/organizations/'+params.orgid, 'GET', successHandler, errorHandler);
};
