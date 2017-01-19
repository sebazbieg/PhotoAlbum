/**
 * Created by A on 13.01.2017.
 */

var express = require('express');
var app = express();

var routes = require('./routes/upload.js');


//var request = require('request');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.static(path.join(__dirname+ 'app')));

app.use('/', routes);

//require("./routes/upload.js")(app);

var port = process.env.PORT || 3000;

app.listen(port);

