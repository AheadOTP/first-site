var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopdb", { useNewUrlParser: true });

handleError = (err) =>
  console.log("Got an error", err)

var products = [
	new Product({
		imageUrl: 'https://cdn.shopify.com/s/files/1/1253/0787/products/bucklers-moisturize-soap_1024x1024.png?v=1460917198',
		title: "Buckler's Soap",
		description: 'qualitative',
		price: 15,
    id: 1
	}),
	new Product({
		imageUrl: 'https://cdn.shopify.com/s/files/1/1253/0787/products/bucklers-moisturize-soap_1024x1024.png?v=1460917198',
		title: "Average Buckler's Soap",
		description: 'average',
		price: 10,
    id: 2
	}),
	new Product({
		imageUrl: 'https://cdn.shopify.com/s/files/1/1253/0787/products/bucklers-moisturize-soap_1024x1024.png?v=1460917198',
		title: "Awesome Buckler's Soap",
		description: 'awesome',
		price: 25,
    id: 3
	}),
  new Product({
    imageUrl: 'https://cdn.shopify.com/s/files/1/1253/0787/products/bucklers-moisturize-soap_1024x1024.png?v=1460917198',
		title: "AAAAAAAAA MILO",
		description: 'MIIILOOO',
		price: 65,
    id: 4
	})
];

var done = 0;

for (var i = 0; i < products.length; i++) {
	products[i].save(function(err) {
		if (err) return handleError(err);
		done++;
		if (done === products.length) {
			exit();
		}
	});
}

function exit() {
	mongoose.disconnect();
}
