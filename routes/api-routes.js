const router = require('express').Router();

const userAPI = require('../controllers/api/user.js');
const postAPI = require('../controllers/api/post.js');

// user routes
router.get('/api/users', userAPI.getAllUsers);
router.post('/api/users', userAPI.createNewUser);
router.get('/api/users/:id', userAPI.getOneUser);

// post routes
router.get('/api/posts', postAPI.getAllPosts);
router.post('/api/posts', postAPI.createPost);
router.get('/api/posts/:id', postAPI.getOnePost);

module.exports = router;