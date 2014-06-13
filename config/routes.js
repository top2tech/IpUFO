
var ip = require("../app/controllers/ip");


module.exports = function(app,config) {

  app.get("/", ip.index);

};