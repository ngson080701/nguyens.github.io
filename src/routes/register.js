const express = require('express');
const router = express.Router();
const RegisterController = require('../app/controller/RegisterController');

// RegisterController.index
router.get('/jsonveri', RegisterController.jsonveri);
router.get('/verify', RegisterController.veri);
router.get('/:slug', RegisterController.show);
router.get('/', RegisterController.index);
module.exports = router;
