const express = require('express');
const router = express.Router();
const DeviceController = require('../app/controller/DevicesController');

router.get('/create', DeviceController.create);
router.post('/store', DeviceController.store);
router.get('/:slug', DeviceController.index);

module.exports = router;
