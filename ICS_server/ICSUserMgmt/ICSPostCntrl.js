const express = require('express');
const router = express.Router();
const postService = require('./ICSPostService');

// routes
router.get('/allPosts', getAll);
router.post('/createNew', createNew);
router.post('/getById', getById);

module.exports = router;

function getAll(req, res, next) {
    console.log('ICSPostCntrl: allPosts: %s', JSON.stringify(req.body) );
    postService.getAll()
        .then(posts => res.json(posts))
        .catch(err => next(err));
}

function getById(req, res, next) {
	console.log('ICSPostCntrl: getById: %s', JSON.stringify(req.body) );
    postService.findById(req.body)
        .then(posts => res.json(posts))
        .catch(err => next(err));

    console.log('ICSPostCntrl: getById : end');
    console.log(res);
}

function createNew(req, res, next) {
    console.log('ICSPostCntrl: createNew: %s', JSON.stringify(req.body) );
    postService.createPost(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ error: 'Post creation failed' }))
        .catch(err => next(err));
}
