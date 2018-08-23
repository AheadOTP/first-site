var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopdb", { useNewUrlParser: true });

handleError = (err) =>
  console.log("Got an error", err)

var product = new Product({
		imageUrl: 'https://cdn.shopify.com/s/files/1/1253/0787/products/bucklers-moisturize-soap_1024x1024.png?v=1460917198',
		title: "Buckler's Soap",
		description: 'qualitative',
		price: 15
	});

	product.save(function(err) {
			if (err) return handleError(err);
			exit();
		}
	);


function exit() {
	mongoose.disconnect();
}