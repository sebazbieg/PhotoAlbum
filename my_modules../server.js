/**
 * Created by A on 13.01.2017.
 */

var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors');

var routes = require('./routes/upload.js');


//var request = require('request');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())
app.use('/static', express.static(path.join(__dirname, 'images')));
app.use('/', routes);

var port = process.env.PORT || 3000;

app.listen(port);
