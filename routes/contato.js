var express = require('express');
var router = express.Router();
const ContatoController = require('../controllers/ContatoController');

// GET contato Page
router.get('/', ContatoController.index);

module.exports = router;