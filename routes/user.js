
var myrequest = require('./httprequest/httprequest');

/*
* methods to access all user services from the BlueApp platform
*/

exports.login = function(email, password, keepmelogin, successHandler, errorHandler){
	var params = {
        email:email,
        password:password,
        keepmelogin:keepmelogin
    };

	myrequest.sendHttpRequests(params, '/v1/login', 'POST', successHandler, errorHandler);
};

exports.whoAmI = function(successHandler, errorHandler){
    myrequest.sendHttpRequests('', '/v1/users/me', 'GET', successHandler, errorHandler);
};

exports.updateUser = function(params, successHandler, errorHandler){
    myrequest.sendHttpRequests(params, '/v1/users/me', 'PUT', successHandler, errorHandler);
};

exports.logout = function(successHandler, errorHandler){
    myrequest.sendHttpRequests('', '/v1/logout', 'GET', successHandler, errorHandler);
};
