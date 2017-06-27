var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node Tutorial' });
});

router.post('/', function(req, res){
    var body = req.body;

    var res_body = {
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email
    };

    res.render('welcome', res_body);
});

module.exports = router;
