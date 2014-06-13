
var express = require("express");
var lessMiddleware = require( 'less-middleware' );

module.exports = function ( app, config ) {

    var publicDir = config.root + '/public';
    app.use( lessMiddleware( publicDir ) );
    app.use( express.static( publicDir));
    app.set( "views", config.root + "/app/views" );
    app.set( "view engine", "jade" );

};