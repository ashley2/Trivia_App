var express = require('express');
var router = express.Router();
var db = require('../config/db');

router.get('/custom', function(req, res, next) {
  db.query(`SELECT * FROM newscript WHERE category = 'custom'`, function(err, newScripts) {
    if(err) {
      res.status(400).send(err);
      return;
    }
    res.send(newScripts);
  });
});

router.post('/custom', function(req, res) {
// var post = JSON.parse(req.body);
// var post = {hey: 'everybody'};
  // var post = req.body;
  console.log('req.body:', req.body);
  db.query('INSERT INTO newscript SET ?', req.body, function(err, result) {
    if(err) {
      res.status(400).send(err);
      return;
    }
    res.send(result);
  });
});

module.exports = router;
