const express = require('express');
const router = express.Router();
const communityService = require('./ICSCommunityService');

// routes
router.post('/register', register);
router.post('/getById', getById);

module.exports = router;

function register(req, res, next) {
    console.log('ICSCommunityCntrl: register: %s', JSON.stringify(req.body) );
    communityService.register(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ error: 'Community registration failed' }))
        .catch(err => next(err));
}

function getById(req, res, next) {
    console.log('ICSCommunityCntrl: getById: %s', JSON.stringify(req.body) );
    communityService.findById(req.body)
        .then(communities => res.json(communities))
        .catch(err => next(err));
}