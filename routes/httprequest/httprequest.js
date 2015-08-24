
/*
 * HTTP request method
 */

var http = require('http');
var authorization;

exports.sendHttpRequests = function(payload, path, method, successHandler, errorHandler){

    var options = {
      // host: 'localhost',
      // port: '3030',      
      host: 'dev.blueapp.io',
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8' 
        }
    };

    if(authorization){
        options.headers['authorization'] = authorization;
        // console.log(options.headers);
    }

    /*Normalize headers*/
/*    if (payload.headers) {
        for (var v in payload.headers) {
            if (payload.headers.hasOwnProperty(v)) {
                var name = v.toLowerCase();
                if (name !== "content-type" && name !== "content-length") {
                    // only normalise the known headers used later in this
                    // function. Otherwise leave them alone.
                    name = v;
                }
                options.headers[name] = payload.headers[v];
            }
        }
    }
*/

    try {
        var req = http.request(options, function(res) {
            var msg = '';
            res.setEncoding('utf8');

            res.on('data', function(chunk) {
                msg += chunk;
            });

            res.on('end', function() {
                var result = JSON.parse(msg);
                if(res.req.path.indexOf("login") > -1){
                    authorization = result.token;
                }
                successHandler(result);
            });
        }).on('error', function(e) {
            console.log("Got error: " + e.message);
            errorHandler(e.message);
        });

        if (payload && payload != '') {
            req.write(JSON.stringify(payload));
        }else{
        	req.write('');
        }
        req.end();
    }
    catch(err) {
        console.error('Exception: '+err);
        errorHandler(err);
    }    
}