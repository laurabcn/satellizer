/**
 * Created by laurarv on 05/03/16.
 */

    exports = module.exports = function(app, mongoose) {

       var tvshowSchema = new mongoose.Schema({
          title: String,
          year: Number,
          country: String,
          poster: String,
          seasons: Number,
          genre: String, enum: [
                'Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy'
             ],
          summary:  String
       });

       module.exports = mongoose.model('TVShow', tvshowSchema);
    };
