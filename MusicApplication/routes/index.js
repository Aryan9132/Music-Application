var express = require('express');
var router = express.Router();
let fs = require('fs');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/gallery', function(req, res) {
  res.render('gallery');
});

router.get('/contact', function(req, res) {
  res.render('contact');
});

router.post('/submit', function(req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let number = req.body.number;
  let content = `name=${name}, email=${email}, number=${number}\n`;
  
  fs.appendFile('data.txt',content,function(err){
  if (err){
    console.log(err);
  }
  })
  res.render("index");
})

module.exports = router;
