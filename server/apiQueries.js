
var keys = require('./keys.js');
var api_key = keys.key;
var api_secret = keys.secret;
var sem3 = require('semantics3-node')(api_key,api_secret);

module.exports = {

	apiQuery: function (indentifier, value, callback) {
		console.log('in the query: ', indentifier, value);
		// Build the request
		sem3.products.clear()
		sem3.products.products_field( indentifier, value );
		// Run the request
		sem3.products.get_products(
		   function(err, products) {
			    if (err) {
			       	console.log("Couldn't execute request: get_products");
			        callback(err, null);
			    }
			    var returnData = JSON.parse(products);
			    callback(null, returnData.results);
		   }
		);
	},

	extractData: function (hash) {
		var details = {};
		var main = returnHash.results[0];
		details.name = main.name;
		details.brand = main.brand;
		details.image = main.images[0];
		details.category = main.category;
		details.model = main.model;
		details.description = main.description;
		details.mpn = main.mpn;
		details.color = main.color;
		details.url = main.url;
		details.price = main.price;
		details.features = main.features;
		return details;
	}

};

