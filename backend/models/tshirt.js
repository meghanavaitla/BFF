var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var tshirtSchema = new Schema({

    name: String,
    front: String,
    back: String,
    price: Number,
    size: []
}
);
var tshirt = mongoose.model('tshirt', tshirtSchema, 'tshirt');
module.exports = tshirt;