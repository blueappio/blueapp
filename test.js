var blueapp = require('./blueapp');

									// ################## UNIT TESTING ################## //


/* Type following line in terminal
* node blueapp test
*/
process.argv.forEach(function (val, index, array) {
  	switch(val) {
	  	case "test": 
			blueapp.login('kushal@vensi.com', 'Kushi@123', true, function(response){
				console.log('login :',response);
				
				blueapp.whoAmI(function(message){
					console.log('whoami :',message);

					blueapp.getPeripherals({orgid:639892668}, function(message){
						console.log('getPeripherals :',message);

						blueapp.getDevice({orgid:639892668, deviceid:60958815}, function(message){
							console.log('getDevice :',message);

							blueapp.logout(function(message){
								console.log('logout :',message);
							}, function (error) {
								console.error(error);
							});
						}, function (error) {
							console.error(error);
						});
					}, function (error) {
						console.error(error);
					});
				}, function (error) {
					console.error(error);
				});
			}, function (error) {
				console.error(error);
			});
			break;

		case "login":
			blueapp.login('kushal@vensi.com', 'Kushi@123', true, function(response){
				// console.log('login :',response);

// Get the list of the applications
/*				blueapp.getApplications({orgid:639892668}, function(response){
					console.log('getApplications :',response);
				}, function(error){
					console.error(error);
				});
*/

// Add / Remove app from Organization
/*				blueapp.updateAppFromOrg({orgid:639892668, appid:3}, function(response){
					console.log('updateAppFromOrg :',response);
				}, function(error){
					console.error(error);
				});
*/

// Get device AuthToken
/*				var params = {orgid: 639892668,gatewayId: 875444761,isGateway: true,filterScan: false};
				blueapp.getDeviceAuthToken(params, function(response){
					console.log('getDeviceAuthToken :',response);
				}, function(error){
					console.error(error);
				});
*/

// Get device types
/*				blueapp.getDeviceTypes({orgid:639892668}, function(message){
					console.log('getDeviceTypes :',message);
				}, function (error) {
					console.error(error);
				});
*/

// Get all devices
/*				blueapp.getDevices({orgid:639892668}, function(response){
					console.log('getDevices :',response);
				}, function(error){
					console.error(error);
				});
*/

// Add a device
/*				var params = {
					orgid:639892668,
			        bt_address: 'bt_address',
			        device_uuid: 'device_uuid',
			        name: 'Reddy',
			        device_type: 2,
			        description: 'description',
			        serial_number: 'serial_number',
			        firmware: 'firmware',
			        hardware_version: 'hardware_version',
			        software_version: 'software_version',
			        manufacturer_name: 'manufacturer_name',
			        model_number: 'model_number',
			        system_id: 'system_id',
			        wifi_macaddress: 'wifi_macaddress',
			        ethernet_macaddress: 'ethernet_macaddress',
			 		tags: ['kushi', 'malli', 'gopal', 'manesh'],
			        tag_ids: '',
			        wifi_name: 'wifi_name',
			        wifi_pwd: 'wifi_pwd'
			    };
				blueapp.addDevice(params, function(response){
					console.log('addDevice :',response);
				}, function(error){
					console.error(error);
				});
*/

// Deleting a device
/*				blueapp.deleteDevice({orgid:639892668 ,deviceid:976722683}, function(message){
					console.log('deleteDevice :',message);
				}, function (error) {
					console.error(error);
				});
*/

// Get a device
/*				blueapp.getDevice({orgid:639892668, deviceid:60958815}, function(message){
					console.log('getDevice :',message);
				}, function(error){
					console.error(error);
				});					
*/

// Update device
/*			var params = {
					orgid:639892668,
			        deviceid:729477635,
			        bt_address: 'bt_address2',
			        device_uuid: 'device_uuid2',
			        name: 'GK Reddy',
			        device_type: '1',
			        description: 'description2',
			        firmware: 'firmware2',
			        serial_number: 'serial_number2',
			        hardware_version: 'hardware_version2',
			        software_version: 'software_version2',
			        manufacturer_name: 'manufacturer_name2',
			        model_number: 'model_number2',
			        system_id: 'system_id2',
			        wifi_macaddress: 'wifi_macaddress2',
			        ethernet_macaddress: 'ethernet_macaddress2',
			        tags: ['kushi2', 'malli2', 'gopal2', 'manesh2'],
			        tag_ids: '',			        
			        wifi_name: 'wifi_name2',
			        wifi_pwd: 'wifi_pwd2'
			    };
				blueapp.updateDevice(params, function(response){
					console.log('updateDevice :',response);
				}, function(error){
					console.error(error);
				});
*/

// Find the device by device UUID
/*				blueapp.findDeviceByUUID({orgid:639892668, uuid:'E8CDBC6D-FE08-4CC5-BA28-DFC88C5F1778'}, function(response){
					console.log('findDeviceByUUID :',response);
				}, function(error){
					console.error(error);
				});
*/

// Get all Gateways
/*				blueapp.getGateways({orgid:639892668}, function(message){
					console.log('getGateways :',message);
				}, function(error){
					console.error(error);
				});
*/

// Get all Peripherals
/*				blueapp.getPeripherals({orgid:639892668}, function(message){
					console.log('getPeripherals :',message);
				}, function(error){
					console.error(error);
				});
*/

// Get UUIDs from device
/*				blueapp.getUUIDsFromDevice({orgid:639892668, device_id:875444761}, function(response){
					console.log('getUUIDsFromDevice :',response);
				}, function(error){
					console.error(error);
				});
*/

// Get all Notifications
/*				blueapp.getNotifications(function(message){
					console.log('getNotifications :',message);
				}, function(error){
					console.error(error);
				});
*/

// Create Notification
/*			var params = {
				  device_type: 'Android',
				  device_name: 'KushiGS2',
				  device_token: 'abcdefghijklmnopqrstuvwxyz',
				  device_uuid: '1234567890'
				};
				blueapp.createNotification(params, function(message){
					console.log('createNotification :',message);
				}, function(error){
					console.error(error);
				});
*/

// Delete a Notification
/*			var params = {
				  token: 956090403,
				  noti_stat: 1
				};
				blueapp.deleteNotification(params, function(message){
					console.log('deleteNotification :',message);
				}, function(error){
					console.error(error);
				});
*/

// Get Proxy server url
/*				blueapp.getProxyServerUrl(function(response){
					console.log('getProxyServerUrl :',response);
				}, function(error){
					console.error(error);
				});
*/

// Get current user onfo
/*				blueapp.whoAmI(function(response){
					console.log('whoAmI :',response);
				}, function(error){
					console.error(error);
				});
*/

// update user
			var params = {
				  first_name: 'Kushal',
				  last_name: 'Kumar'
				};
				blueapp.updateUser(params, function(response){
					console.log('updateUser :',response);
				}, function(error){
					console.error(error);
				});





// ############################################# //


// Get Locations Gateways per Org
/*				blueapp.getLocationGatewaysByOrg({orgid:639892668}, function(response){
					console.log('getLocationGatewaysPerOrg :',response);
				}, function(error){
					console.error(error);
				});
*/

// Get Locations Gateways per Org
/*				blueapp.getAllLocationGateways(function(response){
					console.log('getAllLocationPeripherals :',response);
				}, function(error){
					console.error(error);
				});
*/				

// Get Locations Gateways per Org
/*				blueapp.getAllTags({orgid:639892668}, function(response){
					console.log('getAllTags :',response);
				}, function(error){
					console.error(error);
				});
*/
// Add Tags TODO: Working more
/*				blueapp.addTagForDevice({tags:['Galaxy'],device_id:60958815}, function(response){
					console.log('addTagForDevice :',response);
				}, function(error){
					console.error(error);
				});
*/


// Get Organizations
/*				blueapp.getOrganizations(function(response){
					console.log('getOrganizations :',response);
				}, function(error){
					console.error(error);
				});
*/

// Get Organizations Working on it.
/*				blueapp.getOrganization({org:639892668}, function(response){
					console.log('getOrganization :',response);
				}, function(error){
					console.error(error);
				});
*/
			}, function (error) {
				console.error(error);
			});
			break;

  	}
});
