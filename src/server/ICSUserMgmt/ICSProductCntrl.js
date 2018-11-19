const express = require('express');
const router = express.Router();
const productService = require('./ICSProductService');

// routes
router.get('/listall', listall);
router.get('/addproduct', addproduct);
router.post('/buyUpdate', buyUpdate);

module.exports = router;

function listall(req, res,next) {
	console.log('ICSProductCntrl List All' );
		
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

function buyUpdate(req, res, next){
    console.log('ICSProduct Cntrl to update after buy %s', JSON.stringify(req.body) )
    productService.buyUpdate(req.body)
    .then(products => products ? res.json(products) : res.status(400).json({ error: 'Products not found' }))
    .catch(err => next(err));

}