const express = require('express');
const router = express.Router();
const productService = require('./ICSProductService');

// routes
router.get('/listall', listall);
router.get('/addproduct', addproduct);

module.exports = router;

function listall(req, res,next) {
	console.log('ICSProductCntrl' );
		
    productService.listall()
    .then(products => res.json(products))
    .catch(err => next(err));
}

function addproduct(req, res, next) {
	console.log('ICSProductCntrl' );
		
    productService.addproduct()
        .then(products => products ? console.log(products) : res.status(400).json({ error: 'Products not found' }))
        .catch(err => next(err));
}