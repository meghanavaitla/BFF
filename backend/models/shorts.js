var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortsSchema = new Schema({

    name: String,
    front: String,
    back: String,
    price: Number,
    size: []
}
);
var shorts = mongoose.model('shorts', shortsSchema, 'shorts');
module.exports = shorts;