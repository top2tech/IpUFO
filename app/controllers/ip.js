

exports.IpOnly = function(req, res) {

  res.send(getRequestInfo(req).requestInfo.endpoint.ip+"\n");

};

exports.index = function(req, res) {

  var result = getRequestInfo(req);
  if (result.requestInfo.headers["user-agent"].startsWith("curl")) {
     return exports.IpOnly(req, res);
  }
  else {
    res.render("ip/index", result);
  }

};

exports.JApi = function(req, res) {

  var resString = JSON.stringify(getRequestInfo(req),null,4);
  res.send(resString);

};

exports.API = function(req, res) {

    res.render("ip/api");

};


exports.comments = function(req, res) {

    res.render("ip/comments");

};


exports.about = function(req, res) {

    res.render("ip/about");

};



function getRequestInfo(req) {

   return  {
    requestInfo: {
        endpoint:{
          ip:req.socket.remoteAddress,
          port: req.socket.remotePort,
        },
        headers: req.headers
    }
  };

};


if (typeof String.prototype.startsWith != 'function') {
  String.prototype.startsWith = function (str){
    return this.slice(0, str.length) == str;
  };
}