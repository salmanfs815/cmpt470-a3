var express = require('express');
var router = express.Router();

var usersModel = require('../model/users');

router.get('/', function(req, res, next) {
  usersModel.getAll(function(err, allUsers) {
    if (err) throw err;
    console.log(allUsers);
    res.render('users', {
      title: 'View Users',
      allUsers: JSON.stringify(allUsers)
    });
  });
});

module.exports = router;
