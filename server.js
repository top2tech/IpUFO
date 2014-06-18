var express = require("express");
var app = express();
var config = require("./config/config");
require("./config/express")(app,config);
require("./config/routes")(app,config);

var port = 8001;
var server = app.listen(port, function() {
  console.log("Server started, listening on port:"+server.address().port);
});
