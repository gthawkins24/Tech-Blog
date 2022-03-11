const router = require('express').Router();

const userAPI = require('../controllers/api/user.js');

router.get('/api/users', userAPI.getAllUsers);
router.post('/api/users', userAPI.createNewUser);
router.get('/api/users/:id', userAPI.getOneUser);

module.exports = router;