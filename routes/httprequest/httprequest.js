var http = require('http'),
    https = require('https');

var authorization;

exports.sendHttpRequests = function(payload, path, method, successHandler, errorHandler) {

    var options = {
        host: 'app.blueapp.io',
        path: path,
        method: method,
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    };

    if (authorization) {
        options.headers['authorization'] = authorization;
    }

    try {
        var req = https.request(options, function(res) {
            var msg = '';
            res.setEncoding('utf8');

            res.on('data', function(chunk) {
                msg += chunk;
            });

            res.on('end', function() {
                var result = JSON.parse(msg);
                if (res.req.path.indexOf("login") > -1) {
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
        } else {
            req.write('');
        }
        req.end();
    } catch (err) {
        console.error('Exception: ' + err);
        errorHandler(err);
    }
}
