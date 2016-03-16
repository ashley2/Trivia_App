var express = require('express');
var router = express.Router();

var db = require('../config/db');

// /routes/car.js

/* GET home page. */
router.get('/category/:chosenCategory', function(req, res, next) {
  var chosenCategory = req.params.chosenCategory
  console.log('route cat', chosenCategory);
  // var cat = 'leaders';
  db.query(`SELECT * FROM scripts WHERE category =  '${chosenCategory}'`, function(err, scripts) {
  // db.query("SELECT * FROM scripts WHERE category = 'leaders'", function(err, scripts) {
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

//router.put

//router.delete
module.exports = router;
