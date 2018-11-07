var express = require('express');
var router = express.Router();
var controllers = require('.././controllers')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/auth/signup', controllers.UserController.getSignUp);
router.post('/auth/signup', controllers.UserController.postSignUp);

module.exports = router;
