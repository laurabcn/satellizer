/**
 * Created by laurarv on 05/03/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tvshowSchema = new Schema({
          title: String,
          year: Number,
          country: String,
          poster: String,
          seasons: Number,
          genre: {
              type: String,
              enum: [
                  'Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy'
              ]
          },
          summary:  String,
          updated_at: Date
});

tvshowSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});

var TVShow = mongoose.model('TVShow', tvshowSchema);
module.exports = TVShow;
