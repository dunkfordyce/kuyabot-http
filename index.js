var express = require('express'),
    app = express(),
    _ = require('underscore');

module.exports = function(client) { 
    client.config.http = _.defaults(client.config.http || {}, {
        port: 3333
    });
    
    app.get('/say', function(req, res, next) { 
        client.say(req.query.to, req.query.message);
        res.send(true);
    });

    app.get('/notice', function(req, res, next) { 
        client.notice(req.query.to, req.query.message);
        res.send(true);
    });

    app.get('/join', function(req, res, next) { 
        client.join(req.query.room);
        res.send(true);
    });

    console.log('http server listening on port', client.config.http.port);
    app.listen(client.config.http.port);
};
