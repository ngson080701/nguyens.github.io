const express = require('express');
const router = express.Router();
const logController = require('../app/controller/LoginController');

router.get('/', logController.index1);

module.exports = router;
