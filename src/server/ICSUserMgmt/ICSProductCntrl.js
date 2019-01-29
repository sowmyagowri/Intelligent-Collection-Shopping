const express = require('express');
const router = express.Router();
const productService = require('./ICSProductService');

// routes
router.get('/listall', listall);
router.post('/listallByZip', listallByZip);
router.post('/addproduct', addproduct);
router.post('/buyUpdate', buyUpdate);
router.post('/getById', getById);
router.post('/getByBuyerId', getByBuyerId);
router.post('/registerProduct', registerProduct);
router.post('/searchProductByName', searchProductByName);
router.post('/findByProductNameandZip', findByProductNameandZip);


module.exports = router;

function listall(req, res,next) {
    console.log('ICSProductCntrl List All' );
    
    productService.listall()
    .then(products => res.json(products))
    .catch(err => next(err));
}


function listallByZip(req, res,next) {
    console.log('ICSProductCntrl: listallByZip: %s', JSON.stringify(req.body) );
    productService.listallByZip(req.body)
        .then(posts => res.json(posts))
        .catch(err => next(err));

    console.log('ICSProductCntrl: listallByZip : end');
    console.log(res);
}

function addproduct(req, res, next) {
        
    console.log('ICSProductCntrl:', (JSON.stringify(req.body)) );
    productService.addproduct(req.body)
        .then(products => products ? console.log(products) : res.status(400).json({ error: 'Products not added' }))
        .catch(err => next(err));
}

function buyUpdate(req, res, next){
    console.log('ICSProduct Cntrl to update after buy %s', JSON.stringify(req.body) )
    productService.buyUpdate(req.body)
    .then(products => products ? res.json(products) : res.status(400).json({ error: 'Products not found' }))
    .catch(err => next(err));

}

//get buy seller id
function getById(req, res, next) {
    console.log('ICSProductCntrl: getById: %s', JSON.stringify(req.body) );
    productService.findById(req.body)
        .then(posts => res.json(posts))
        .catch(err => next(err));

    console.log('ICSProductCntrl: getById : end');
    console.log(res);
}

function getByBuyerId(req, res, next) {
    console.log('ICSProductCntrl: getByBuyerId: %s', JSON.stringify(req.body) );
    productService.findByBuyerId(req.body)
        .then(posts => res.json(posts))
        .catch(err => next(err));

    console.log('ICSProductCntrl: getByBuyerId : end');
    console.log(res);
}

function registerProduct(req, res, next) {
        
    console.log('ICSProductCntrl:registerProduct', (JSON.stringify(req.body)) );
    productService.registerProduct(req.body)
        .then(products => products ?  res.json(products) : res.status(400).json({ error: 'Product not added' }))
        .catch(err => next(err));
   
}
function searchProductByName(req, res, next) {
    console.log('ICSProductCntrl: searchProductByName: %s', JSON.stringify(req.body) );
    productService.findByProductName(req.body)
        .then(posts => res.json(posts))
        .catch(err => next(err));

    console.log('ICSProductCntrl: searchProductByName : end');
    console.log(res);
}

function findByProductNameandZip(req, res, next) {
    console.log('ICSProductCntrl: findByProductNameandZip: %s', JSON.stringify(req.body) );
    productService.findByProductNameandZip(req.body)
        .then(posts => res.json(posts))
        .catch(err => next(err));

    console.log('ICSProductCntrl: findByProductNameandZip : end');
    //console.log(res);
}