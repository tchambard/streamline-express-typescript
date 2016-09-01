require("streamline").register({});
require ('streamline-runtime');
var ServerApp = require('./app').ServerApp;

var app = new ServerApp();
app.setRoutes();
app.startServer();