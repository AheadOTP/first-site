var express = require('express');
var router = express.Router();
var Product = require("../models/product");
var csrf = require('csurf');
var passport = require('passport');
var Cart = require('../models/cart');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs) {
	  res.render('index', { title: 'Express', products: docs });
  });
 });

 router.get('/add-to-cart/:id', function(req, res, next) {
   var productId = req.params.id;
   var cart = new Cart(req.session.cart ? req.session.cart : {});

   Product.findOne({id: productId}, function(err, product) {
     if (err) {
       return res.redirect('/');
     }
     cart.add(product, product.id);
     req.session.cart = cart;
     console.log("kjasdlkfj lk ", req.session.cart);
     res.redirect('/');
   });
 });

module.exports = router;
