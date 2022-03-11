const { User, Post, Comment } = require('../../models');

exports.getAllUsers = (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

exports.getOneUser = (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    },
    attributes: { exclude: ['password'] },
    include: [
      {
        model: Post,
        attributes: ['id', 'title', 'post_content', 'created_at']
      },
      {
      model: Comment,
      attributes: ['id', 'comment_text', 'created_at'],
      include: {
        model: Post,
        attributes: ['title']
      }
      },
      {
        model: Post,
        attributes: ['title']
      }
    ]
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

exports.createNewUser = (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
        res.json(dbUserData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};