var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var traditionalwearSchema = new Schema({

    name: String,
    front: String,
    back: String,
    price: Number,
    size: []
}
);
var traditionalwear = mongoose.model('traditionalwear', traditionalwearSchema, 'traditionalwear');
module.exports = traditionalwear;