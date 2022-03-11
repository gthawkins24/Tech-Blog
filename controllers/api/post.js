const res = require('express/lib/response');
const { User, Post, Comment } = require('../../models');

exports.getAllPosts = (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'post_content',
      'user_id'
    ],
    include: [
      {
        model: Comment,
        attributes: [
          'id',
          'comment_text',
          'user_id',
          'post_id'
        ],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
};

exports.getOnePost = (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'post_content',
      'user_id'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(dbPostData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

exports.createPost = (req, res) => {
  Post.create({
    title: req.body.title,
    post_content: req.body.post_content,
    user_id: req.body.user_id
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};