/*
 * SETUP
 */
const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      path = require('path'),
      app = express();

app.use(bodyParser.json());//use bodyParser
app.use(express.static(path.join(__dirname, './../public/dist')));//connect angular

/*
 * ROUTES
 */
require('./config/mongoose.js');
var routes_setter = require('./config/routes.js');
routes_setter(app);

/*
 * SERVER PORT 
 */
app.listen(1337, function(){
    console.log('listening on port 1337');
});