const express = require('express');

const router = express.Router();

const homepageController = require('../controllers/homepage.js');

router.get('/', homepageController.displayHomepage);

module.exports = router;