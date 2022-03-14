const router = require('express').Router();

const homepageController = require('../controllers/homepage.js');
const withAuth = require('../utils/auth.js');

router.get('/', homepageController.displayHomepage);
router.get('/login', homepageController.login);
router.get('/signup', homepageController.signup);
router.get('/post/:id', homepageController.viewSinglePost);
router.get('/dashboard', withAuth, homepageController.displayDashboard);
router.get('/dashboard/edit/post/:id', withAuth, homepageController.dashboardEditPost);

module.exports = router;