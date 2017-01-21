var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs = require('fs');

// Multer storage options
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
var upload = multer({ storage: storage });

router.get('/api/photos', function(req, res){
  var baseUrl = 'http://localhost:3000/static/';
  fs.readdir('images', function(err, images){
    if (!err) {
      images = images.map(function(image){
        return {
          src: baseUrl + image
        }
      });

      res.json(images);

    } else {
      res.json([]);
    }
  });
});

router.post('/api/photos', upload.any(), function(req, res, next){
  res.redirect('http://localhost:9000');
});

module.exports = router;
