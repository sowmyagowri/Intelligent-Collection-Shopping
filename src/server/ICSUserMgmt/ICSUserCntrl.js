const express = require('express');
const router = express.Router();
const userService = require('./ICSUserService');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/allRegistered', getAll);
router.get('/getById', getById);
router.get('/getByAddrs', getByAddrs);

module.exports = router;

function authenticate(req, res, next) {
	console.log('ICSUserCntrl: authenticate: %s', JSON.stringify(req.body) );
		
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ error: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    console.log('ICSUserCntrl: register: %s', JSON.stringify(req.body) );
    userService.registerUser(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ error: 'User registration failed' }))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getById(req, res, next) {
	console.log('ICSUserCntrl: getById: %s', JSON.stringify(req.body) );
    userService.findById()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getByAddrs(req, res, next) {
	console.log('ICSUserCntrl: getByAddrs: %s', JSON.stringify(req.body) );
    userService.findByAddrs()
        .then(users => res.json(users))
        .catch(err => next(err));
}
