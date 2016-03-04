/**
 * Created by laurarv on 03/03/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Model = new Schema({
    name : String,
    surname: String,
    age: Number
});

var regModel = mongoose.model('Model_name');

mongoose.connect('mongodb://localhost/db1');
