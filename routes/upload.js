var express = require('express');
var router = express.Router();
var multer = require('multer');
//var upload = multer({dest: 'app/images/', nsme: 'test.jpg'});

// Multer storage options
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'app/images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
var upload = multer({ storage: storage });


router.get('/', function(req, res, next){
  res.render('index', {title: 'Express' });
});

var it = 13;
router.post('/api/send', upload.any(), function(req, res, next){
  console.log('2', 1);
//   console.log(res);
  res.redirect('http://localhost:9000');
});

module.exports = router;
