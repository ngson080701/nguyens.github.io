const express = require('express');
const router = express.Router();
const logController = require('../app/controller/LoginController');

router.get('/', logController.index1);
router.post('/createAcc', logController.createAcc);
module.exports = router;
