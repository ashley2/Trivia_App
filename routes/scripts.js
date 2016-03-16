var express = require('express');
var router = express.Router();

var db = require('../config/db');

// /routes/car.js

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query('SELECT * FROM scripts', function(err, scripts) {
    if(err) {
      res.status(400).send(err);
      return;
    }
    res.send(scripts);
  });
});

router.post('/', function(req, res) {
  console.log('req.body:', req.body);
  db.query('INSERT INTO scripts SET ?', req.body, function(err, result) {
    if(err) {
      res.status(400).send(err);
      return;
    }
  });
  res.send();
});

module.exports = router;
