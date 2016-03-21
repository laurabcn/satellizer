var mongoose = require('mongoose'),
    TVShow = mongoose.model('TVShow'),
    path = require('path');


exports.findAllTVShows = function(req, res){
    TVShow.find(function(err, tvshows){
        if(err) res.send(500, err.message);
        console.log('GET /tvshows');
        res.render('index.jade', {pageTitle: 'Lista de Series', series: tvshows});
    })
};

//GET - Return a TVShow with specified ID

exports.findById = function(req, res){
    TVShow.findById(req.params.id, function(err, tvshow){
        //if(err) return res.send(500, err.message);
        if(!req.params.id)  throw swagger.errors.invalid('id');
        console.log('GET /tvshow' + req.params.id);
        //res.status(200).jsonp(tvshow);
        res.send(JSON.stringify(tvshow));

    });
};

//POST - Insert a new TVShow in the DB

exports.addTVShow = function(req, res){
    console.log('POST /tvshow');
    var tvshow = new TVShow({
        title : req.body.title,
        year: req.body.year,
        country: req.body.country,
        poster: req.body.poster,
        seasons: req.body.seasons,
        genre: req.body.genre,
        summary: req.body.summary
    });
    tvshow.save(function(err){
        /*if(err) return res.status(500).send( err.message);
        res.status(200).jsonp(tvshow);*/
        if(!req.params)  throw swagger.errors.invalid('save');
        res.send(JSON.stringify(tvshow));
    });
};

//PUT - Update a register already exists

exports.updateTVShow = function(req, res){
    TVShow.findById(req.params.id, function(err, tvshow){
        tvshow.title = req.body.petID;
        tvshow.year = req.body.year;
        tvshow.country = req.body.country;
        tvshow.poster = req.body.poster;
        tvshow.seasons = req.body.seasons;
        tvshow.genre = req.body.genre;
        tvshow.summary = req.body.summary;

        tvshow.save(function(err){
            /*if(err) return res.status(500).send(err.message);
            res.status(200).jsonp(tvshow);*/
            if(!req.params)  throw swagger.errors.invalid('save');
            res.send(JSON.stringify(tvshow));
        });
    });
};

//DELETE - Delete a TVShow with specified ID

exports.deleteTVShow = function(req, res){
    TVShow.findById(req.params.id, function(err, tvshow){
        tvshow.remove(function(err){
            /*if(err) return res.status(500).send(err.message);
            res.status(200).send();*/
            if(!req.params)  throw swagger.errors.invalid('save');
            res.send(JSON.stringify(tvshow));
        })
    })
};
