var jade = require('jade');
var path = require('path');

module.exports = {

  index: function(req, res){
    var html = jade.compileFile(path.join(__dirname, 'home.jade'));

    var user = {
      name: 'Narciso'
    };

    res.statusCode = 200;

    res.end(html({
      admin: user
    }));
  }

};
