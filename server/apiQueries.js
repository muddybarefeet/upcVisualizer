
var keys = require('./keys.js');
var api_key = keys.key;
var api_secret = keys.secret;
var sem3 = require('semantics3-node')(api_key,api_secret);

var module = {};

module.api = function (identifier, value) {

	// Build the request
	sem3.products.clear()
	sem3.products.products_field( identifier, value );

	// Run the request
	sem3.products.get_products(
	   function(err, products) {
		    if (err) {
		       	console.log("Couldn't execute request: get_products");
		         	return;
		    }
		    // View results of the request
		    console.log( "Results of request:\n" + JSON.stringify( products ) );
	   }
	);

};


module.exports = module;
