const { User, Post, Comment } = require('../../models');

exports.getAllComments = (req, res) => {
  Comment.findAll({
    
  })
}