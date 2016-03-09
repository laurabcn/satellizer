var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
  if(err) throw err;
  console.log("Connect to db");
});

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var models = require('../../express_example1/models/tvshow')(app, mongoose);
var TVShowCtrl = require('../../express_example1/controllers/tvshows');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
  res.send("Hello sabandija!!!");
});
app.use(router);
*/
// API routes
var uola = express.Router();

uola.route('/tvshows')
  .get(TVShowCtrl.findAllTVShows)
  .post(TVShowCtrl.addTVShow);

uola.route('/tvshows/:id')
  .get(TVShowCtrl.findById)
  .put(TVShowCtrl.updateTVShow)
  .delete(TVShowCtrl.deleteTVShow);

app.use('/api', uola);

app.listen(2000, function(){
  console.log("Node server running on http://localhost:2000");
});
