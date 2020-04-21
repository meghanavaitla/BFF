var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jacketsSchema = new Schema({

    name: String,
    front: String,
    back: String,
    price: Number,
    size: []
}
);
var jackets = mongoose.model('jackets', jacketsSchema, 'jackets');
module.exports = jackets;