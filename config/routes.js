
var ip = require("../app/controllers/ip");


module.exports = function(app,config) {

  app.get("/", ip.index);
  app.get("/j", ip.JApi);
  app.get("/i", ip.IpOnly);

  app.get("/api", ip.API);
  app.get("/comments", ip.comments);
  app.get("/about", ip.about);

};