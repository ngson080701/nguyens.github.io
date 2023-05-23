const express = require('express');
const router = express.Router();
const notiController = require('../app/controller/NotificationController');


router.get('/', notiController.index);
module.exports = router;
