var server = require('./server').httpServer;
var jade   = require('jade');
var path   = require('path');
var url    = require('url');
var routes = require('./routes');

var notFound = jade.compileFile(path.join(__dirname, '404.jade'));

server.on('request', function(req, res){
  var pathname = url.parse(req.url).pathname;
  if(routes[pathname]){ return routes[pathname].apply(this, arguments); };

  return res.end(notFound());
});
