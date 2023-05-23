const express = require('express');
const router = express.Router();
const Statistical = require('../app/controller/StatisticalController');


router.get('/', Statistical.index);
module.exports = router;
