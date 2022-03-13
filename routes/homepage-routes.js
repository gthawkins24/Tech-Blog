const router = require('express').Router();

const homepageController = require('../controllers/homepage.js');

router.get('/', homepageController.displayHomepage);
router.get('/login', homepageController.login);
router.get('/post/:id', homepageController.viewSinglePost);

module.exports = router;