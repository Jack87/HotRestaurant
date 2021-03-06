var bodyParser = require('body-parser')
var express = require('express')
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;
 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})