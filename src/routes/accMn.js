const express = require('express');
const router = express.Router();
const AccMnController = require('../app/controller/AccMnController');

router.get('/', AccMnController.index);

module.exports = router;
