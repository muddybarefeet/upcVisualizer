var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var port = 3000;
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

var apiScript = require('./apiQueries.js');
var keys = require('./keys.js');
var api_key = keys.key;
var api_secret = keys.secret;
var sem3 = require('semantics3-node')(api_key,api_secret);

app.use('/api', function (req, res) {
	//ping the semantics3 api and get the data
	var identifier = req.body.identifier;
	var value = req.body.value;
	return apiScript.apiQuery(identifier, value)
	.then(function (data) {
		return res.status(200).json({
	    	data: data
	    });
	})
	.catch(function (err) {
		return res.status(400).json({
	    	message: err
	    });
	});

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















