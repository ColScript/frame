var server = require('./server');

server.start(function(){
  require('./router');
  console.log('Server is Ready!');
});
