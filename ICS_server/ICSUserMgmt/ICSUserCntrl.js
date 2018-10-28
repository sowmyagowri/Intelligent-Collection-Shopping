const express = require('express');
const router = express.Router();
const userService = require('./ICSUserService');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/allRegistered', getAll);

module.exports = router;

function authenticate(req, res, next) {
	console.log('req: %s', req.body);
	console.log('req json: %s', JSON.stringify(req.body) );
	console.log('req userId : %s', req.body['userId'] );
	
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    userService.registerUser(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}
