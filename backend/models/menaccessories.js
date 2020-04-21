var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var menaccessoriesSchema = new Schema({

    name: String,
    front: String,
    back: String,
    price: Number,
    size: []
}
);
var menaccessories = mongoose.model('menaccessories', menaccessoriesSchema, 'menaccessories');
module.exports = menaccessories;