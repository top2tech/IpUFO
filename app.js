var express = require("express");
var app = express();
app.get("/", function(req, res) {
  var result = getClientIP(req);
  res.send(result);

});

var port = 8001;
var server = app.listen(port, function() {
  console.log("Server started, listening on port:"+server.address().port);
});

function getClientIP(req) {
  return (req.ip);	

};