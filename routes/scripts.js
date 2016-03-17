var express = require('express');
var router = express.Router();
var uuid = require('uuid');
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
// var id = uuid();

router.post('/category', function(req, res) {
var post = req.body;
// var post =
// {
// id: "35",
// category: 'herstory',
// question: 'Who holds the title for the first female video game designer:',
// answer1: 'Carol Shaw',
// answer2: 'Grace Hopper',
// answer3: 'Someone was hacking highly secretive computer programming information',
// show1: 'Carol Shaw',
// show2: 'Carol Shaw',
// show3: 'Carol Shaw',
// correct: 'answer1',
// selected: 'false' };
  console.log('req.body:', req.body);
  db.query('INSERT INTO scripts SET ?', post, function(err, result) {
    if(err) {
      res.status(400).send(err);
      return;
    }
  });
  res.send();
});

// router.put('/', function(req, res) {
//   // console.log('req.body:', req.body);
//   db.query('INSERT INTO scripts SET ?', req.body, function(err, result) {
//     if(err) {
//       res.status(400).send(err);
//       return;
//     }
//   });
//   res.send();
// });
//
// //router.put
//
// //router.delete
module.exports = router;
