
var keys = require('./keys.js');
var api_key = keys.key;
var api_secret = keys.secret;
var sem3 = require('semantics3-node')(api_key,api_secret);

module.exports = {

	apiQuery: function (indentifier, value, offset) {

		return new Promise(function(resolve, reject) {
			var edits = {
			  weight: 1000000,
			  width: 10,
			  length: 10,
			  height: 10
			};
			// Build the request
			sem3.products.clear()
			sem3.products.products_field( indentifier, value );
			sem3.products.products_field( "offset", offset );
			// Run the request
			sem3.products.get_products(function(err, products) {
			    if (err) {
			       	// console.log("Couldn't execute request: get_products");
			        return reject(err);
			    }
			    var returnData = JSON.parse(products);
			    var results = returnData.results;
				results.forEach(function(product) {
				   //make the weight into kg and other dimensions in cm
				    for(var key in edits) {
				    	if (product[key]) {
				        	var data = product[key]/edits[key];
				        	product[key] = data.toFixed(2);
				      	}
				    }
				});
			    return resolve({
			    	resultsUpdated: results,
			    	count: returnData.total_results_count
			    });
			});
		});

	}

};

