var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bottomsSchema = new Schema({

    name: String,
    front: String,
    back: String,
    price: Number,
    size: []
}
);
var bottoms = mongoose.model('bottoms', bottomsSchema, 'bottoms');
module.exports = bottoms;
