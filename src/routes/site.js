const express = require('express');
const router = express.Router();
const siteController = require('../app/controller/SiteController');

// RegisterController.index
router.get('/', siteController.home);
router.get('/:slug', siteController.show);
module.exports = router;
