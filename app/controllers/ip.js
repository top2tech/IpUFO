
exports.index = function(req, res) {

  res.render("ip/index", {
    endpoint:{
      ip:req.socket.remoteAddress,
      port: req.socket.remotePort,
    },
    headers: req.headers
  });

};