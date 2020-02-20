/**
 * Module dependencies.
 */
var express = require('express'),
    http = require('http'),
    path = require('path'),
    fs = require('fs')
var cfenv = require('cfenv');
//const morgan = require("morgan");
var app = express();
const jwt = require('jsonwebtoken');

var bodyParser = require('body-parser');
var call =  require("./routes/call");






// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//app.use(morgan("dev"));
app.use(bodyParser.urlencoded({  extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use("/call", call);






http.createServer(app).listen(app.get('port'), '0.0.0.0', function() {
    console.log('Express server listening on port ' + app.get('port'));
});


