var express = require('express');
var router = express.Router();
const PostsController = require('../controllers/PostsController');

// GET Posts Page
router.get('/', PostsController.index);

module.exports = router;