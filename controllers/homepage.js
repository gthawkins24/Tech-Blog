const sequelize = require('../config/connection');

exports.displayHomepage = (req, res) => {
  res.render('homepage');
};