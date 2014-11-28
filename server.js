var Server = require('http').Server;
var server = new Server();

function start(ready){
  server.on('listening', ready);
  server.listen(3030);
}

module.exports.start      = start;
module.exports.httpServer = server;
