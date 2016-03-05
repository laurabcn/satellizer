var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send("Hello Maldita sabandija!!!");
});

app.use(router);

app.listen(2000, function(){
  console.log("Node server running on http://localhost:2000");
});
module.exports = router;
