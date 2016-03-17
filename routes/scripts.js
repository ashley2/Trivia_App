var express = require('express');
var router = express.Router();
var db = require('../config/db');

router.get('/category/:chosenCategory', function(req, res, next) {
  var chosenCategory = req.params.chosenCategory
  console.log('route cat', chosenCategory);
  db.query(`SELECT * FROM scripts WHERE category =  '${chosenCategory}'`, function(err, scripts) {
    if(err) {
      res.status(400).send(err);
      return;
    }
    res.send(scripts);
  });
});

router.post('/category', function(req, res) {
var post = req.body;

  console.log('req.body:', req.body);
  db.query('INSERT INTO scripts SET ?', post, function(err, result) {
    if(err) {
      res.status(400).send(err);
      return;
    }
  });
  res.send();
});

module.exports = router;
