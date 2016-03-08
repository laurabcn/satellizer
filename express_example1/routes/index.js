var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose = require('mongoose'),
    http = require('http'),
    server = http.createServer(app);


mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
  if(err) throw err;
  console.log("Connect to db");
});

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var models = require('./models/tvshow');
var TVShowCtrl = require('./controllers/tvshows')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
  res.send("Hello sabandija!!!");
});

app.use(router);

var tvshows = express.Router();


tvshows.route('/tvshows')
    .get(TVShowCtrl.findAllTVShows)
    .post(TVShowCtrl.addTVShow);

tvshows.route('/tvshows/:id')
    .get(TVShowCtrl.findById)
    .put(TVShowCtrl.updateTVShow)
    .delete(TVShowCtrl.deleteTVShow);

app.use('/api', tvshows);




