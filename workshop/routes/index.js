var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET new page. */
router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Novo Cadastro' });
});

/* GET exemplo1. */
router.get('/exemplo1', function(req, res, next) {
  res.render('exemplo1', { });
});

module.exports = router;
