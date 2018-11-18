const express = require('express');
const router = express.Router();
const productService = require('./ICSProductService');

// routes
router.post('/listall', listall);

module.exports = router;

function listall(res, next) {
	console.log('ICSProductCntrl' );
		
    productService.listall()
        .then(products => products ? res.json(products) : res.status(400).json({ error: 'Products not found' }))
        .catch(err => next(err));
}