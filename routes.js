var homeController  = require('./homeController');
var usersController = require('./usersController');

module.exports = {

  "/" : homeController.index,

  "/users" : usersController.index

};
