var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var apiScript = require('./apiQueries');

var port = 3000;
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

// //connection to the routes in ./routes folder
app.use('/api', function (req, res) {
	//ping the semantics3 api and get the data
	var identifier = req.body.identifier;
	var value = req.body.value;
	console.log('reached the server!', req.body );
	// apiScript.upcLookup(identifier, value);
});

//wild card route to anything not starting /api
//send html
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/client/index.html');
});

//then make all client file assests available to find the file searching for
app.use('/', express.static(__dirname + '/client'));

app.listen(port);
console.log("Express server listening on port", port);















