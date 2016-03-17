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
  console.log('req.body:', req.body);
  db.query('INSERT INTO newscript SET ?', req.body, function(err, result) {
    if(err) {
      res.status(400).send(err);
      return;
    }
    res.send(result);
  });
});

router.delete('/custom/:index', function(req, res) {
  var id = req.params.id;
  db.query("DELETE FROM flashcards WHERE id=" + id, function(err, result) {
        if (err) return res.status(400).send(err);
        console.log('delete newScript');
  });
});

router.put('/custom/:index', function(req, res) {
  var id = req.params.id;
  db.query("UPDATE newscript SET category = 'custom', question='" + updateObj.question + "', answer1='" + updateObj.answer1 + "', answer2='" + updateObj.answer2 + "', answer3='" + updateObj.answer3 + "', show1='" + updateObj.show1 + "', show2='" + updateObj.show2 + "', show3='" + updateObj.show3 + "'where id='" + id + "'", function(err, result) {
        if (err) return res.status(400).send(err);
        console.log('delete newScript');
  });
});

module.exports = router;
