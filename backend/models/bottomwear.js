var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bottomwearSchema = new Schema({

    name: String,
    front: String,
    back: String,
    price: Number,
    size: []
}
);
var bottomwear = mongoose.model('bottomwear', bottomwearSchema, 'bottomwear');
module.exports = bottomwear;