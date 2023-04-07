const express = require('express');
const router = express.Router();
const ContactController = require('../app/controller/ContactController');

router.get('/', ContactController.index);

module.exports = router;
